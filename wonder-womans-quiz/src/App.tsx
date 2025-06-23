import { Outlet } from "react-router"

export const App = () => {
  return (
    <div className="bg-gradient-to-b from-[#4568DC] to-[#B06AB3] w-full lg:h-screen min-h-screen flex items-center justify-center p-8">
      <div className="bg-black rounded-xl p-8 flex flex-col items-center justify-center gap-8 text-white text-center lg:max-w-xl">
        <Outlet />
      </div>
    </div>
  )
}