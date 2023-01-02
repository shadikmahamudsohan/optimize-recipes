import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../CSS/Create.css';
const CreateRecipe = () => {
    const navigate = useNavigate();

    return (
        <motion.div className="hero min-h-screen bg-base-200"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
        >
            <div className="hero min-h-screen create-bg">
                <div className="hero-overlay bg-opacity-20"></div>
                {/* <div className="hero-content text-center text-neutral-content"> */}
                {/* <div className="max-w-md"> */}
                <div className='create-card'></div>
                {/* </div> */}
                {/* </div> */}
            </div>
        </motion.div>
    );
};

export default CreateRecipe;