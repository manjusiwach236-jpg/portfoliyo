import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ title, description, image, frontendLink, link, github }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Frontend Card */}
            {frontendLink && (
                <div className="bg-white shadow-lg rounded-lg p-4 hover:scale-105 transition">
                    <img src={image} alt={title} className="rounded w-full h-48 object-cover" />
                    <h3 className="text-xl font-bold mt-3">{title} (Frontend)</h3>
                    <p className="text-gray-600 mt-2">{description}</p>

                    <div className="flex gap-4 mt-4 items-center">
                        {/* <a
                            href={frontendLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2"
                        >
                            Live Demo
                        </a> */}
                        {github && (
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-black flex items-center gap-2"
                            >
                                <FaGithub /> GitHub
                            </a>
                        )}
                    </div>
                </div>
            )}

            {/* Backend Card */}
            {link && (
                <div className="bg-white shadow-lg rounded-lg p-4 hover:scale-105 transition">
                    <img src={image} alt={title} className="rounded w-full h-48 object-cover" />
                    <h3 className="text-xl font-bold mt-3">{title} (Backend)</h3>
                    <p className="text-gray-600 mt-2">{description}</p>

                    <div className="flex gap-4 mt-4 items-center">
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                        >
                            Open Backend
                        </a>
                        {github && (
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-black flex items-center gap-2"
                            >
                                <FaGithub /> GitHub
                            </a>
                        )}
                    </div>
                </div>
            )}

        </div>
    );
};

export default ProjectCard;