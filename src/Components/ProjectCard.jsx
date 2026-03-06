// src/Components/ProjectCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, description, image, internalLink }) => {
    const Wrapper = ({ children }) =>
        internalLink ? <Link to={internalLink}>{children}</Link> : <div>{children}</div>;

    return (
        <Wrapper>
            <div className="bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer hover:shadow-2xl transition">
                <img src={image} alt={title} className="w-full h-64 object-cover" />
                <div className="p-5">
                    <h3 className="text-xl font-bold mb-2">{title}</h3>
                    <p className="text-gray-700">{description}</p>
                </div>
            </div>
        </Wrapper>
    );
};

export default ProjectCard;