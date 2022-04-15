import React from 'react';
import dinner1 from '../../images/dinner/dinner1.png'
import dinner2 from '../../images/dinner/dinner2.png'
import dinner3 from '../../images/dinner/dinner3.png'
import dinner4 from '../../images/dinner/dinner4.png'
import dinner5 from '../../images/dinner/dinner5.png'
import dinner6 from '../../images/dinner/dinner6.png'
import DisplayDinner from '../DisplayDinner/DisplayDinner';

const Dinner = () => {
    const breakfast = [
        { id: 1, name: "Bagel and cream chesse", des: "How we drem about our future", price: 6.99, img: dinner1 },
        { id: 2, name: "Bagel and cream chesse", des: "How we drem about our future", price: 6.99, img: dinner2 },
        { id: 3, name: "Bagel and cream chesse", des: "How we drem about our future", price: 6.99, img: dinner3 },
        { id: 4, name: "Bagel and cream chesse", des: "How we drem about our future", price: 6.99, img: dinner4 },
        { id: 5, name: "Bagel and cream chesse", des: "How we drem about our future", price: 6.99, img: dinner5 },
        { id: 6, name: "Bagel and cream chesse", des: "How we drem about our future", price: 6.99, img: dinner6 }
    ]
    return (

        <div className="grid grid-cols-1 md:grid-cols-3 mx-10">
            {
                breakfast.map(item => <DisplayDinner
                    key={item.id}
                    items={item}
                ></DisplayDinner>)
            }
        </div>

    );
};

export default Dinner;