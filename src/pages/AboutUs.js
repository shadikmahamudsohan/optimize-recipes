import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
    const navigate = useNavigate();

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Do you want to know about use?</h1>
                    <p className="py-6">I won't tell you about me, lol !!!!</p>
                    <button className="btn btn-primary"
                        onClick={() => navigate("/")}
                    >Go Home</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;