'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const AddStudent = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    fristname: "",
    lastname: "",
    g_level: "",
    grade: "",
    age: "",
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const res = await fetch('/api/students"', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess('เพิ่มบุคลากรเรียบร้อยแล้ว');
        setForm({ 
          fristname: "",
          lastname: "",
          g_level: "",
          grade: "",
          age: "",
        });
        router.push('/'); // กลับไปหน้าหลักหลังจากเพิ่มข้อมูล
      } else {
        setError(data.error || 'เกิดข้อผิดพลาด');
      }
    } catch (error) {
      console.error('Error adding employee:', error);
      setError('เกิดข้อผิดพลาด');
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">เพิ่มบุคลากรใหม่</h1>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">ชื่อ</label>
          <input
            type="text"
            name="fristname"
            value={form.fristname}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">ตำแหน่ง</label>
          <input
            type="text"
            name="lastname"
            value={form.lastname}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">เลือก</label>
          
          <select
            name="g_level"
            value={form.g_level}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          >

            <option value="">เลือกหมวดหมู่</option>
            <option value="director">อนุบาล</option>
            <option value="teacher">อนุบาล</option>
            <option value="staff">อนุบาล</option>
          </select>          
        </div>
        
          <div className="mb-4">
          <label className="block text-sm font-medium mb-1">อายุ</label>
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">เกรด</label>
          <input
            type="text"
            name="grade"
            value={form.grade}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          เพิ่มข้อมูล
        </button>
        
      </form>
    </div>
  );
};

export default AddStudent
