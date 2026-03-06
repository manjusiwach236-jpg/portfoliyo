// src/Pages/BackendScreenshots.jsx
import React from "react";
import social1 from "../assets/images/social1.png";
import social2 from "../assets/images/social2.png";
import social3 from "../assets/images/social3.png";
import social4 from "../assets/images/social4.png";
import social5 from "../assets/images/social5.png";
import social6 from "../assets/images/social6.png";
import social7 from "../assets/images/social7.png";
import social8 from "../assets/images/social8.png";
import social9 from "../assets/images/social9.png";
import social10 from "../assets/images/social10.png";

const BackendScreenshots = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-4xl font-bold text-center text-indigo-600 mb-10">
                Social Media Backend Screenshots
            </h1>

            <div className="grid md:grid-cols-2 gap-6">
                <img
                    src={social1}
                    alt="Social Media Screenshot 1"
                    className="rounded-lg shadow-lg"
                />
                <img
                    src={social2}
                    alt="Social Media Screenshot 2"
                    className="rounded-lg shadow-lg"
                />
                <img
                    src={social3}
                    alt="Social Media Screenshot 3"
                    className="rounded-lg shadow-lg"
                />
                <img
                    src={social4}
                    alt="Social Media Screenshot 4"
                    className="rounded-lg shadow-lg"
                />
                <img
                    src={social5}
                    alt="Social Media Screenshot 5"
                    className="rounded-lg shadow-lg"
                />
                <img
                    src={social6}
                    alt="Social Media Screenshot 6"
                    className="rounded-lg shadow-lg"
                />
                <img
                    src={social7}
                    alt="Social Media Screenshot 7"
                    className="rounded-lg shadow-lg"
                />
                <img
                    src={social8}
                    alt="Social Media Screenshot 8"
                    className="rounded-lg shadow-lg"
                />
                <img
                    src={social9}
                    alt="Social Media Screenshot 9"
                    className="rounded-lg shadow-lg"
                />
                <img
                    src={social10}
                    alt="Social Media Screenshot 10"
                    className="rounded-lg shadow-lg"
                />

            </div>
        </div>
    );
};

export default BackendScreenshots;