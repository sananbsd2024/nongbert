import { options } from "./api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

export default async function Home() {
  const session = await getServerSession(options)

  return (
    <>
      {/* {session ? (
        <UserCard user={session?.user} pagetype={"Home"} />
      ) : (
        <h1 className="text-5xl">You Shall Not Pass!</h1>
      )} */}

      <div className="min-h-screen flex flex-col md:flex-row">
        {/* ส่วนซ้าย */}
        <div className="w-full md:w-1/4 bg-gray-200 text-white p-4">
          {/* <h2 className="text-xl font-bold">Left Sidebar</h2> */}
          <p>This is the left sidebar.</p>



        </div>

        {/* ส่วนขวา */}
        <div className="w-full md:w-3/4 bg-gray-100 p-4">
          <h2 className="text-xl font-bold">Right Content Area</h2>



          {/* <p>This is the main content area on the right.</p> */}
        </div>

        <div className="w-full md:w-1/4 bg-gray-200 text-white p-4">
          {/* <h2 className="text-xl font-bold">Left Sidebar</h2> */}
          <p>This is the left sidebar.</p>

          
        </div>
      </div>


    </>
  )
}
