import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Home.css';
import { motion } from 'framer-motion';

const Home = () => {
    const navigate = useNavigate();

    return (
        <motion.div
            className="hero min-h-screen background md:justify-start justify-center text-center"
            style={{ minHeight: "100vh" }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
        >
            <div className='paper-container flex justify-center items-center'>
                <div>
                    <h1 className='paper-text'>Optimize Your <br /> Recipes</h1>
                    <br />
                    <button className='paper-btn hover-underline-animation mb-9'>Step 1: find your recipes</button><br />
                    <button onClick={() => navigate("/create-recipe")} className='paper-btn hover-underline-animation mb-9'>Step 2: Create Your recipe</button><br />
                    <button onClick={() => navigate("/about")} className='paper-btn hover-underline-animation mb-9'>Step 3: Know about us</button>
                </div>
            </div>
            <div className='text'></div>
        </motion.div>
    );
};

export default Home;