import React from 'react';
import chefImage from '../images/adult-blur-blurred-background-687824.png'
import chefCook from '../images/chef-cook-food-33614.png'
import architecture from '../images/architecture-building-city-2047397.png'
import { BsBellFill } from 'react-icons/bs';
import { AiOutlineArrowRight } from 'react-icons/ai';

const blogs = () => {
    return (
        <div className="mx-10">
            <div className="mt-20 text-left w-[300px]">
                <h1 className="text-3xl">Why you choose us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <article className="text-left grid grid-cols-1 md:grid-cols-3 my-5">
                <div className="w-[300] mb-5">
                    <div className="">
                        <img width={400} src={chefImage} alt="" />
                    </div>
                    <div className="flex mt-5 ">
                        <div >
                            <BsBellFill color="red" className="w-20 text-4xl" />
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, ad? Recusandae Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, ipsam? Libero, at ipsa molestiae nobis tempora architecto fugiat voluptatem. Numquam ex repellat vero quaerat cupiditate omnis deleniti ea iusto et.
                        <button 
                        className="btn btn-link">See more
                        <AiOutlineArrowRight />
                         </button>
                         </p>
                    </div>
                </div>

                <div className="w-[300] mb-5">
                    <div className="">
                        <img width={400} src={chefCook} alt="" />
                    </div>
                    <div className="flex mt-5">
                        <div >
                            <BsBellFill color="red" className="w-20 text-4xl" />
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, ad? Recusandae Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nostrum.
                        <button 
                        className="btn btn-link">See more
                        <AiOutlineArrowRight   />
                         </button>
                         </p>
                        
                    </div>
                </div>

                <div className="w-[300] mb-5">
                    <div className="">
                        <img width={400} src={architecture} alt="" />
                    </div>
                    <div className="flex mt-5">
                        <div >
                            <BsBellFill color="red" className="w-20 text-4xl" />
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, ad? Recusandae Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste accusamus optio deserunt provident fugit quae amet, nemo commodi sit aliquam libero vel, voluptatum, explicabo quidem laboriosam cumque quam minus velit?
                        <button 
                        className="btn btn-link">See more
                        <AiOutlineArrowRight />
                         </button>
                        </p>
                    </div>
                </div>
            </article>



        </div>
    );
};

export default blogs;