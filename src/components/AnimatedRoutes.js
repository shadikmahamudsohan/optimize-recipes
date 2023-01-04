import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import AboutUs from '../pages/AboutUs';
import Home from '../pages/Home';
import NoteFound from '../pages/NoteFound';

import { AnimatePresence } from 'framer-motion';
import CreateRecipe from '../pages/CreateRecipe';
import FindRecipes from '../pages/FindRecipes';

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<AboutUs />} />
                <Route path='/create-recipe' element={<CreateRecipe />} />
                <Route path='/find-recipe' element={<FindRecipes />} />
                <Route path='*' element={<NoteFound />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;