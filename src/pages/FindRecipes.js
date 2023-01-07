import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import "../CSS/FindRecipes.css";
import { BsSearch } from 'react-icons/bs';
const FindRecipes = () => {
    const [foundData, setFoundData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch("https://optimize-recipes-server.vercel.app/recipe")
            .then(res => res.json())
            .then(data => {
                setFoundData(data?.data);
            });
    }, []);
    console.log(foundData);
    return (
        <motion.div className="hero find-bg"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
        >
            <div className='h-full' style={{ maxWidth: "800px" }}>
                <div>
                    <h1 className='text-center find-title'>Find Your recipe</h1>
                    <div className='w-full flex justify-center find-search'>
                        <BsSearch size="30" className='ml-5' />
                        <input type="text" placeholder="Type your recipe name" className="input w-full bg-transparent" />
                    </div>
                </div>
                {
                    foundData?.map((data) => (
                        <div className='mt-20 text-justify'>
                            <span className='find-description '><strong>ingredients:</strong> {data.ingredients}</span>
                            <br />
                            <span className='find-description '><strong>instructions:</strong> {data.instructions}</span>
                            <br />
                            <span className='find-description '><strong>email:</strong> {data.email}</span>
                            <br />
                            <span className='find-description '><strong>email:</strong> {data.email}</span>
                            <br />
                        </div>
                    ))
                }
            </div>
        </motion.div>
    );
};

export default FindRecipes;