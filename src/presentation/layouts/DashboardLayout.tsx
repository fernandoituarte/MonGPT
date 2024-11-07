import { Outlet } from "react-router-dom";
import { menuRoutes } from "../router/router";
import { SidebarMenuItem } from "../components";
import { useState } from "react";

export const DashboardLayout = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <main className={`flex ${!openSideBar ? 'flex-col' : 'flex-row'} mt-3`}>
      {openSideBar ? (
        <nav className="sm:flex flex-col ml-5 md:w-[370px] min-h-[calc(100vh-3.0rem)] bg-white bg-opacity-10 pt-4 p-2 md:p-5 rounded-3xl mr-3">
          <i
            className="fa-solid fa-xmark text-2xl flex justify-center md:justify-start"
            onClick={() => setOpenSideBar(false)}
          ></i>
          <h1 className="hidden md:flex font-bold my-2 text-2xl lg:text-3xl bg-gradient-to-br from-white via-white/50 bg-clip-text text-transparent">
            MonGPT<span className="text-indigo-500">.</span>
          </h1>
          <span className="hidden md:flex text-lg text-indigo-300">Bienvenue</span>

          <div className="border-gray-700 border my-3" />

          {/* Options du menu */}
          {menuRoutes.map((option) => (
            <SidebarMenuItem key={option.to} {...option} />
          ))}
        </nav>
      ) : (
        <i
          className="fa-solid fa-bars text-2xl pl-5 pt-2 pb-3"
          onClick={() => setOpenSideBar(true)}
        ></i>
      )}
      

      <section className="flex flex-col w-full h-[calc(100vh-50px)]  bg-white bg-opacity-10 p-5 rounded-3xl">
        <div className="flex flex-row h-full">
          <div className="flex flex-col flex-auto h-full p-1">
            <Outlet />
          </div>
        </div>
      </section>
    </main>
  );
};
