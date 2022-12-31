import React from 'react';
import { useNavigate } from 'react-router-dom';

const NoteFound = () => {
    const navigate = useNavigate();
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">404</h1>
                    <p className="py-6">Oops! Your page is not found. </p>
                    <button className="btn btn-primary"
                        onClick={() => navigate("/")}
                    >Go Home</button>
                </div>
            </div>
        </div>
    );
};

export default NoteFound;