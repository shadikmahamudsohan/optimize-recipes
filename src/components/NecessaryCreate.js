import React from 'react';

const NecessaryCreate = ({ setIngredients, setInstruction }) => {
    return (
        <>
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
                onChange={(event) => setInstruction(event.target.value)}
                className="textarea input-bordered border-white w-full bg-transparent text-white" />
        </>
    );
};

export default NecessaryCreate;