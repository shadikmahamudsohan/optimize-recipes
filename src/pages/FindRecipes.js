import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const FindRecipes = () => {
    const navigate = useNavigate();

    return (
        <motion.div className="hero min-h-screen bg-base-200"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
        >
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Find your recipe here</h1>
                    <p className="py-6">Where is my recipe I am hungry :(</p>
                    <button className="btn btn-primary"
                        onClick={() => navigate("/")}
                    >Go Home</button>
                </div>
            </div>
        </motion.div>
    );
};

export default FindRecipes;