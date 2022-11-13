import { useState } from 'react';
import productPic1 from '../../images/product-pic.jpeg';
import productPic2 from '../../images/product-pic2.jpeg';
import guiaMedidas from '../../images/tabela-de-medidas.jpg';

import { HiGift } from "react-icons/hi";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import ProductDetails from '../ProductDetails';

function Main(props) {
    const [mainPicture, setMainPicture] = useState(productPic1);

    return (
        <div>
            {props.mobile ?
            (
            /* Rendering for mobiles and smaller screens */
            <div className='flex flex-col min-w-[330px]'>

                {/* Main picture of the product */}
                <div className='flex items-center m-3'>
                    <TfiAngleLeft className='inline text-[3rem] cursor-pointer' onClick={() => {
                        mainPicture == productPic1 ? setMainPicture(productPic2) : setMainPicture(productPic1)
                    }}/>
                    <div className='flex truncate'>
                        <a href={mainPicture}><img className='hover:scale-[2]' src={mainPicture} alt="Product Picture"/></a>
                    </div>
                    <TfiAngleRight className='inline text-[3rem] cursor-pointer' onClick={() => {
                        mainPicture == productPic1 ? setMainPicture(productPic2) : setMainPicture(productPic1)
                    }}/>
                </div>
                
                {/* Product details */}
                <ProductDetails mobile={props.mobile}/>

            </div>            
            ) :
            
            /* Rendering for computers and bigger screens */
            (
            <div className='flex justify-center'>

                <div className='flex flex-wrap justify-center'>
                    
                    {/* Available pictures for the product */}
                    <div className='flex flex-col w-[120px] m-10'>
                        <img className='border-2 border-gray-100 m-1 cursor-pointer' onClick={() => setMainPicture(productPic1)} src={productPic1} alt="Product picture 1"/>
                        <img className='border-2 border-gray-100 m-1 cursor-pointer' onClick={() => setMainPicture(productPic2)} src={productPic2} alt="Product picture 2"/>
                    </div>
                    
                    {/* Main picture of the product */}
                    <div className='w-[540px] mt-10 truncate'>
                        <a href={mainPicture}><img className='hover:scale-[2]' src={mainPicture} alt="Main picture of product" /></a>
                    </div>
                </div>

                {/* Product details */}
                <ProductDetails mobile={props.mobile}/>

            </div>
            )}
        </div>
    )
};

export default Main;