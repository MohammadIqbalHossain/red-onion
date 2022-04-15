import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    const navigate = useNavigate(); 
    return (
        <div>
            <div className="banner-container flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold mb-4">Best food waiting for your belley</h1>

                <div className="">
                    <input
                        className="border-0 rounded-xl outline-none h-5 p-5 font-mono font-semibold "
                        type="text"
                        name=""
                        id=""
                    />
                    <button
                        className="bg-red-600 p-2 rounded-xl font-poppins text-white leading-2">
                        Search
                    </button>
                </div>
            </div>

            <div className="flex gap-5 mt-10 justify-center">
            <button onClick={() => navigate(`/dinner`)}>Dinner</button>

            <button onClick={() => navigate(`/breakfast`)}>Breakfast</button>
            
            <button onClick={() => navigate(`/lunch`)}>Lunch</button>
           
            </div>


            <div>
                <Outlet />
            </div>
        </div>

    );
};

export default Banner;