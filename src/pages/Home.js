import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Home.css';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="hero min-h-screen background justify-start" style={{ minHeight: "100vh" }}>
            <div className='paper-container flex justify-center items-center'>
                <div>
                    <h1 className='paper-text'>Optimize Your <br /> Recipes</h1>
                    <br />
                    <button className='paper-btn hover-underline-animation mb-9'>Step 1: find your recipes</button><br />
                    <button className='paper-btn hover-underline-animation mb-9'>Step 2: Create Your recipes</button><br />
                    <button onClick={() => navigate("/about")} className='paper-btn hover-underline-animation mb-9'>Step 3: Know about us</button>
                </div>
            </div>
            <div className='text'></div>
        </div>
    );
};

export default Home;