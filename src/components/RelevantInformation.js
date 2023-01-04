import React from 'react';

const RelevantInformation = ({ setCookingTimes, setTemperatures }) => {
    return (
        <>
            <label className="label">
                <span className="label-text text-white text-lg font-bold">Cooking times</span>
            </label>
            <input type="number"
                placeholder="Cooking times goes here"
                style={{ borderWidth: 2 }}
                onChange={(event) => setCookingTimes(event.target.value)}
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
    );
};

export default RelevantInformation;