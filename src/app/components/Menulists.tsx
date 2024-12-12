import Link from "next/link";

export default function MenuListPage() {
  return (
    <div className="p-4">
      <div className="divide-y divide-gray-400">
        <div className="bg-blue-600 p-2 rounded-sm">
        <a href="" className="font-bold text-white">
          ข้อมูลพื้นฐาน
        </a>
        </div>

        <div className="flex flex-col grid grid-cols-1 divide-y gap-2 text-blue-500">
          <Link href="/info" className="mx-2 p-1">
            ข้อมูลพื้นฐานโรงเรียน
          </Link>
          <Link href="/history" className="mx-2 p-1">
            ประวัติหน่วยงาน
          </Link>
          <Link href="/vision" className="mx-2 p-1">
            วิสัยทัศน์ / ปรัชญา
          </Link>
          <Link href="/kk_sch" className="mx-2 p-1">
            คณะกรรมการสถานศึกษา
          </Link>
          {/* <Link href="/employeelist" className="mx-2">
            บุคลากรทางการศึกษา
          </Link> */}
          <Link href="/eservice" className="mx-2 p-1">
            e-service
          </Link>
          <Link href="/dashboard" className="mx-2 p-1">
            ผู้ดูแลระบบ
          </Link>
        </div>
      </div>
    </div>
  );
}
