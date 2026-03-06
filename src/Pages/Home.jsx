// src/Pages/Home.jsx
import React from "react";
import ProjectCard from "../Components/ProjectCard";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes";
import ecommerceImg from "../assets/images/ecommerce.jpg";
import socialImg from "../assets/images/socialmedia.jpg";
import heroBg from "../assets/images/hero.webp"; // Add a background image for hero

const projects = [
    {
        title: "E-commerce Website",
        description: "Built with React and Tailwind CSS. Includes product pages, cart, and checkout.",
        image: ecommerceImg,
        frontendLink: "http://localhost:5174/",
        github: "https://github.com/manjusiwach236-jpg"
    },
    {
        title: "Social Media Backend",
        description: "Django backend API with authentication, posts, likes, comments.",
        image: socialImg,
        link: "http://127.0.0.1:8000/",
        github: "https://github.com/manjusiwach236-jpg"
    }
];

const Home = () => {
    return (
        <div className="w-full min-h-screen">

            {/* Hero Section with blurred background */}
            <section
                className="relative flex flex-col justify-center items-center text-center h-screen"
                style={{
                    backgroundImage: `url(${heroBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Overlay for blur */}
                <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"></div>

                {/* Content */}
                <div className="relative z-10 px-4">
                    <h1 className="text-5xl md:text-6xl font-bold text-white">
                        Hi, I’m Manju
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mt-4">
                        I build scalable web applications with Python, Django, and React.
                    </p>

                    <div className="flex gap-4 mt-8 justify-center">
                        <Link
                            to={ROUTES.ABOUT}
                            className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-indigo-700 transition"
                        >
                            About Me
                        </Link>
                        <Link
                            to={ROUTES.CONTACT}
                            className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700 transition"
                        >
                            Contact Me
                        </Link>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="my-12 max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6 text-indigo-600 text-center">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} {...project} />
                    ))}
                </div>
            </section>

        </div>
    );
};

export default Home;