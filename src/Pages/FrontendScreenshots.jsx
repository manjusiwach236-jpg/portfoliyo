import React from "react";

import pent from "../assets/images/pent.png";
import gym from "../assets/images/gym.png";

import sofa from "../assets/images/sofa.png";
import hoodie from "../assets/images/hoodie.png";
import login from "../assets/images/login.png";
import signup from "../assets/images/signup.png";

const ProjectScreenshots = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-8">

            <h1 className="text-4xl font-bold text-center text-indigo-600 mb-10">
                Project Screenshots
            </h1>

            {/* E-commerce Screenshots */}
            <div className="mb-12">
                <h2 className="text-2xl font-semibold text-indigo-500 mb-4">
                    E-commerce Website
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    <img
                        src={pent}   // Use the imported variable
                        alt="Ecommerce Screenshot 1"
                        className="rounded-lg shadow-lg"
                    />
                    <img
                        src={gym}    // Use the imported variable
                        alt="Ecommerce Screenshot 2"
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Social Media Screenshots */}
            <div>
                {/* <h2 className="text-2xl font-semibold text-indigo-500 mb-4">
                    Social Media Backend
                </h2> */}

                <div className="grid md:grid-cols-2 gap-6">
                    <img
                        src={sofa}  // Use the imported variable
                        alt="Ecommerce Screenshot 3"
                        className="rounded-lg shadow-lg"
                    />
                    <img
                        src={hoodie}  // Use the imported variable
                        alt="Ecommerce Screenshot 4"
                        className="rounded-lg shadow-lg"
                    />
                    <img
                        src={login}  // Use the imported variable
                        alt="Ecommerce Screenshot 5"
                        className="rounded-lg shadow-lg"
                    />
                    <img
                        src={signup}  // Use the imported variable
                        alt="Ecommerce Screenshot 6"
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>

        </div>
    );
};

export default ProjectScreenshots;