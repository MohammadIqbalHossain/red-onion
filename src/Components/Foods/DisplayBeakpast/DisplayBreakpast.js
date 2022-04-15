import React from 'react';

const DisplayBreakpast = ({ items }) => {
    const { name, price, des, img } = items;
    return (
        <div className="flex flex-col justify-center items-center border-1 border-gray-200 m-5 p-10 hover:shadow-2xl rounded-lg">
            <div>
                <img width={"200px"} src={img} alt="" />
            </div>
            <div>
                <h3 className="text-lg">{name}</h3>
                <h4 className="text-gray-500">{des}</h4>
                <p> ${price}</p>
            </div>
        </div>
    );
};

export default DisplayBreakpast;