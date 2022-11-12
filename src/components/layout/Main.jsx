import { useState } from 'react';
import productPic1 from '../../images/product-pic.jpeg';
import productPic2 from '../../images/product-pic2.jpeg';

function Main(props) {
    const [mainPicture, setMainPicture] = useState(productPic1);

    return (
        <div>
            {props.mobile ?
            (
            <h1>Mobile</h1>
            ) :
            
            /* Rendering for computers and bigger screens */
            (
            <div className='flex flex-wrap justify-center'>

                {/* Available pictures for the product */}
                <div className='flex flex-col w-[120px] m-10'>
                    <img className='border-2 border-gray-100 m-1 cursor-pointer' onClick={() => setMainPicture(productPic1)} src={productPic1} alt="Product picture 1"/>
                    <img className='border-2 border-gray-100 m-1 cursor-pointer' onClick={() => setMainPicture(productPic2)} src={productPic2} alt="Product picture 2"/>
                </div>

                {/* Main picture of the product */}
                <div className='w-[540px] mt-10'>
                    <a href={mainPicture}><img src={mainPicture} alt="Main picture of product" /></a>
                </div>
            </div>
            )}
        </div>
    )
};

export default Main;