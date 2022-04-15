import React from 'react';
import breakfast1 from '../../images/breakfast/breakfast1.png'
import breakfast2 from '../../images/breakfast/breakfast2.png'
import breakfast3 from '../../images/breakfast/breakfast3.png'
import breakfast4 from '../../images/breakfast/breakfast4.png'
import breakfast5 from '../../images/breakfast/breakfast5.png'
import breakfast6 from '../../images/breakfast/breakfast6.png'
import DisplayBreakpast from '../DisplayBeakpast/DisplayBreakpast';

const Breakfast = () => {
    const breakfast = [
        {id: 1, name: "Bagel and cream chesse", des: "How we drem about our future", price: 6.99, img: breakfast1},
        {id: 2, name: "Bagel and cream chesse", des: "How we drem about our future", price: 6.99, img: breakfast2},
        {id: 3, name: "Bagel and cream chesse", des: "How we drem about our future", price: 6.99, img: breakfast3},
        {id: 4, name: "Bagel and cream chesse", des: "How we drem about our future", price: 6.99, img: breakfast4},
        {id: 5, name: "Bagel and cream chesse", des: "How we drem about our future", price: 6.99, img: breakfast5},
        {id: 6, name: "Bagel and cream chesse", des: "How we drem about our future", price: 6.99, img: breakfast6}
    ]
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 mx-10">
            {
                breakfast.map(item => <DisplayBreakpast
                key={item.id}
                items={item}
                ></DisplayBreakpast>)
            }
        </div>
    );
};

export default Breakfast;