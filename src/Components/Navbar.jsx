import { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            {/* Top Navbar */}
            <nav className="bg-indigo-600 text-white shadow-md sticky top-0 z-50 flex items-center justify-between px-6 h-16">
                <h1 className="text-2xl font-bold tracking-wide">Manju Siwach</h1>

                {/* Hamburger Icon */}
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="focus:outline-none"
                >
                    {sidebarOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                </button>
            </nav>

            {/* Sidebar */}
            <div
                className={`fixed top-16 right-0 h-[calc(100%-4rem)] w-64 bg-indigo-700 text-white shadow-xl transform transition-transform duration-300 z-40
          ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="flex flex-col mt-4 space-y-4 px-4">
                    <Link
                        to={ROUTES.HOME}
                        className="block px-4 py-2 rounded hover:bg-indigo-600 transition"
                        onClick={() => setSidebarOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to={ROUTES.ABOUT}
                        className="block px-4 py-2 rounded hover:bg-indigo-600 transition"
                        onClick={() => setSidebarOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        to={ROUTES.CONTACT}
                        className="block px-4 py-2 rounded hover:bg-indigo-600 transition"
                        onClick={() => setSidebarOpen(false)}
                    >
                        Contact
                    </Link>
                    {/* New Project Screenshots Link */}
                    <Link
                        to={ROUTES.SCREENSHOTS}
                        className="block px-4 py-2 rounded hover:bg-indigo-600 transition"
                        onClick={() => setSidebarOpen(false)}
                    >
                        Project Screenshots
                    </Link>
                </div>
            </div>

            {/* Overlay when sidebar is open */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-25 z-30"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}
        </>
    );
};

export default Navbar;