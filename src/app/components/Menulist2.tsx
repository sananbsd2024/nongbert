import Link from "next/link";

export default function MenuList2Page() {
  return (
    <div className="p-4">
      <div className="divide-y divide-gray-400">
        <div className="bg-blue-600 p-2 rounded-sm">
        <a href="" className="font-bold text-white">
          ข้อมูลสารสนเทศ
        </a>
        </div>

        <div className="flex flex-col grid grid-cols-1 divide-y gap-2 text-blue-500">
          <Link href="#" className="mx-2 p-1">
            ข้อมูลนักเรียน
          </Link>
          <Link href="#" className="mx-2 p-1">
            ข้อมูลบุคลากร
          </Link>
          <Link href="#" className="mx-2 p-1">
            ข้อมูลที่ดิน สิ่งปลูกสร้าง
          </Link>
          <Link href="#" className="mx-2 p-1">
            ข้อมูลครุภัณฑ์
          </Link>
        </div>
      </div>
    </div>
  );
}
