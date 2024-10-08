import React from "react";
import  logo  from "../../assets/logo/variete.svg"

const SessionUser = () => {
  return (
    <section className="bg-gray-1 py-20 dark:bg-dark lg:py-[120px]">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
              <div className="mb-10 text-center md:mb-16">
                <a href="/#" className="mx-auto inline-block max-w-[160px]">
                  <img
                    src={logo}
                    alt="logo"
                  />
                </a>
              </div>
              <form>
                {/* Email */}
                <label className="mb-2 mt-4 text-base font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent text-center rounded-md border border-gray-300 dark:border-gray-600 py-3 px-5 text-gray-800 dark:text-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 dark:focus:ring-blue-500 transition"
                />

                {/* Contraseña */}
                <label className="mb-2 mt-4 text-base font-medium text-gray-700 dark:text-gray-300">
                  Contraseña
                </label>
                <input
                  type="password"
                  placeholder="Contraseña"
                  className="w-full bg-transparent text-center rounded-md border border-gray-300 dark:border-gray-600 py-3 px-5 text-gray-800 dark:text-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 dark:focus:ring-blue-500 transition"
                />
                <button
                  type="submit"
                  className="border rounded-full  items-center justify-center py-3 px-7 text-center text-base font-medium text-black hover:bg-[#0BB489] hover:border-[#0BB489] mt-4"
                >
                  Registrarse
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SessionUser;
