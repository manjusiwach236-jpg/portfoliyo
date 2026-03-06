// src/Components/ProjectCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, description, image, internalLink, github }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Link to={internalLink}>
                <img src={image} alt={title} className="w-full h-48 object-cover" />
            </Link>
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-700 mb-4">{description}</p>
                {github && (
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 font-semibold hover:underline"
                    >
                        Source Code
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;