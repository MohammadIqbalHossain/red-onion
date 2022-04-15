import React from 'react';

import lunch1 from '../../images/lunch/lunch1.png'
import lunch2 from '../../images/lunch/lunch2.png'
import lunch3 from '../../images/lunch/lunch3.png'
import lunch4 from '../../images/lunch/lunch4.png'
import lunch5 from '../../images/lunch/lunch5.png'
import lunch6 from '../../images/lunch/lunch6.png'
import DIsplayLunch from '../DisplayLunch/DIsplayLunch';


const Lunch = () => {
    const lunch = [
        {id: 1, name: "Bagel and cream chesse", des: "How we drem about our future", price: 6.99, img: lunch1},
        {id: 2, name: "Bagel and cream chesse", des: "How we drem about our future", price: 6.99, img: lunch2},
        {id: 3, name: "Bagel and cream chesse", des: "How we drem about our future", price: 6.99, img: lunch3},
        {id: 4, name: "Bagel and cream chesse", des: "How we drem about our future", price: 6.99, img: lunch4},
        {id: 5, name: "Bagel and cream chesse", des: "How we drem about our future", price: 6.99, img: lunch5},
        {id: 6, name: "Bagel and cream chesse", des: "How we drem about our future", price: 6.99, img: lunch6}
    ]
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 mx-10">
        {
            lunch.map(item => <DIsplayLunch
            key={item.id}
            items={item}
            ></DIsplayLunch>)
        }
    </div>
    );
};

export default Lunch;