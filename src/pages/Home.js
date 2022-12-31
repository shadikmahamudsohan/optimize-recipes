import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Welcome to optimize recipes</h1>
                    <p className="py-6">Find your favorite recipes!! </p>
                    <button className="btn btn-primary"
                        onClick={() => navigate("/about")}
                    >About Us</button>
                </div>
            </div>
        </div>
    );
};

export default Home;