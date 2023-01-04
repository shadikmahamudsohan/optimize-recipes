import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../CSS/Create.css';
import { toast } from 'react-toastify';
const CreateRecipe = () => {
    const navigate = useNavigate();
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstruction] = useState("");
    const [cookingTimes, setCookingTimes] = useState("");
    const [temperatures, setTemperatures] = useState("");
    const [more, setMore] = useState(false);
    const submitForm = (event) => {
        event.preventDefault();
        fetch("https://optimize-recipes-server.vercel.app/recipe", {
            method: 'POST',
            body: JSON.stringify({
                email: "test@gmail.como",
                ingredients,
                instructions,
                cookingTimes,
                temperatures
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data?.status === "Success") {
                    toast.success("recipe created");
                }
            });
    };

    return (
        <motion.div className="hero min-h-screen bg-base-200"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
        >
            <div className="hero min-h-screen create-bg">
                <div className="hero-overlay bg-opacity-20"></div>
                {/* navigate to home page */}
                <button
                    onClick={() => navigate("/")}
                    className='btn fixed top-5 left-5'>Home</button>
                <div className='create-card flex justify-center md:p-10 p-3 overflow-hidden'>
                    <form className='w-full' onSubmit={(event) => submitForm(event)}>
                        <div className="form-control w-full flex justify-between h-full">
                            <div>
                                <label className="label">
                                    <span className="label-text text-white text-lg font-bold">Ingredients</span>
                                </label>
                                <textarea type="text"
                                    placeholder="Ingredients goes here"
                                    style={{ borderWidth: 2 }}
                                    onChange={(event) => setIngredients(event.target.value)}
                                    className="textarea input-bordered border-white w-full bg-transparent text-white" />
                                <label className="label">
                                    <span className="label-text text-white text-lg font-bold">Instruction</span>
                                </label>
                                <textarea type="text"
                                    placeholder="Instruction goes here"
                                    style={{ borderWidth: 2 }}
                                    onChange={(event) => setCookingTimes(event.target.value)}
                                    className="textarea input-bordered border-white w-full bg-transparent text-white" />
                                <div className="form-control">
                                    <label className="label cursor-pointer w-64">
                                        <input
                                            type="checkbox"
                                            id="demoCheckbox"
                                            name="checkbox"
                                            defaultChecked={more}
                                            onChange={() => setMore(!more)}
                                            className='checkbox border-white'
                                            value="1" />
                                        <label for="demoCheckbox" className='text-white'>Add more relevant information</label>
                                    </label>
                                </div>
                                {
                                    more && <>
                                        <label className="label">
                                            <span className="label-text text-white text-lg font-bold">Cooking times</span>
                                        </label>
                                        <input type="number"
                                            placeholder="Cooking times goes here"
                                            style={{ borderWidth: 2 }}
                                            onChange={(event) => setInstruction(event.target.value)}
                                            className="input input-bordered border-white w-full bg-transparent text-white" />
                                        <div className="form-control"></div>
                                        <label className="label">
                                            <span className="label-text text-white text-lg font-bold">Temperatures (C°)</span>
                                        </label>
                                        <input type="number"
                                            placeholder="Temperatures times goes here"
                                            style={{ borderWidth: 2 }}
                                            onChange={(event) => setTemperatures(event.target.value)}
                                            className="input input-bordered border-white w-full bg-transparent text-white" />
                                        <div className="form-control"></div>
                                    </>
                                }
                            </div>
                            <div>
                                <button type="submit"
                                    style={{ borderWidth: 2 }}
                                    className="btn w-full mt-4 bg-transparent border-white hover:bg-white hover:text-black"
                                >Button</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};

export default CreateRecipe;