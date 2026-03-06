// src/Pages/Contact.jsx
import React from "react";

const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-16 px-6">
            <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-10 text-center">
                {/* Heading */}
                <h1 className="text-5xl font-bold text-indigo-600 mb-12">
                    Contact Me
                </h1>

                {/* Contact Info */}
                <div className="space-y-8 text-lg">
                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
                        <h2 className="font-semibold text-gray-700 mb-2">Email</h2>
                        <p className="text-blue-600">manjusiwach236@gmail.com</p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
                        <h2 className="font-semibold text-gray-700 mb-2">Phone</h2>
                        <p className="text-blue-600">+91-8059945851</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;