import React from 'react';

const Restrictions = ({ setVegetarian, setGlutenFree, vegetarian, glutenFree }) => {
    return (
        <div className='w-full flex  justify-between items-center'>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <input
                        type="checkbox"
                        id="checkbox2"
                        name="checkbox"
                        defaultChecked={vegetarian}
                        onChange={() => setVegetarian(!vegetarian)}
                        className='checkbox border-white'
                        style={{ borderWidth: 2 }}
                        value="1" />
                    <label for="checkbox2" className='text-white ml-2'>Vegetarian</label>
                </label>
            </div>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <input
                        type="checkbox"
                        id="checkbox3"
                        name="checkbox"
                        defaultChecked={glutenFree}
                        onChange={() => setGlutenFree(!glutenFree)}
                        className='checkbox border-white'
                        style={{ borderWidth: 2 }}
                        value="1" />
                    <label for="checkbox3" className='text-white ml-2'>Gluten-free</label>
                </label>
            </div>
        </div>
    );
};

export default Restrictions;