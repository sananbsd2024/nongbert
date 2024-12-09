import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/app/lib/mongoose';
import Students from '@/app/models/Students';

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const body = await request.json();

    // ตรวจสอบข้อมูล
    const { fristname, lastname, grade, age, role } = body;
    if (!fristname || !lastname || !grade || !age || !role) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!['director', 'teacher', 'staff'].includes(role)) {
      return NextResponse.json(
        { success: false, error: 'Invalid role provided' },
        { status: 400 }
      );
    }

    // สร้างข้อมูลบุคลากรใหม่
    const newStudents = new Students({ fristname, lastname, grade, age, role });
    const savedStudents = await newStudents.save();

    return NextResponse.json({ success: true, data: savedStudents }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating Students:', error.message);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    await connectToDatabase();
    const { id } = await request.json();
    await Students.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: 'Students deleted' });
  } catch (error) {
    console.error('Error deleting Students:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}


export async function GET(request: Request) {
  try {
    await connectToDatabase();

    const url = new URL(request.url);
    const role = url.searchParams.get('role'); // กรองตาม role

    const query = role ? { role } : {}; // ถ้ามี role ให้กรอง
    const students = await Students.find(query).sort({ createdAt: -1 });

    return NextResponse.json({ success: true, data: Students });
  } catch (error) {
    console.error('Error fetching Students:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
