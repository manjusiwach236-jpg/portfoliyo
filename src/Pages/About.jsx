import React from "react";

const About = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
            <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-10">
                <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-8 text-center">
                    About Me
                </h1>

                <p className="text-gray-700 mb-6 text-lg">
                    Hi, I’m <strong>Manju Siwach</strong> from Haryana, India. I completed my secondary school from CBSE in 2022 and have training in Python, Web Development, and Full Stack Development.
                </p>

                <p className="text-gray-700 mb-6 text-lg">
                    <strong>Skills:</strong> Python, Django, React, HTML, CSS, JavaScript, TailwindCSS
                </p>

                <p className="text-gray-700 mb-6 text-lg">
                    <strong>Strengths:</strong> Quick learner, problem-solving, team player
                </p>

                <p className="text-gray-700 mb-6 text-lg">
                    <strong>Weaknesses:</strong> Overthinking, sometimes spending too much time on details
                </p>
            </div>
        </div>
    );
};

export default About;