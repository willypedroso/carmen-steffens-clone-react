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
            <div className='flex justify-center'>

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

                {/* Product details */}
                <div className='flex flex-col m-10 w-[350px]'>
                    <h3>Flat Alfinete CS</h3>
                    <p className='text-gray-600 text-[0.6rem] mt-1'>Ref.: 0204.463.001A</p>
                    <h3 className='mt-2 font-medium'>R$349,90</h3>
                    <div className='flex flex-wrap mt-2'>
                        <span className='m-1 mr-2 ml-0 pt-[1px] pb-[1px] p-[12px] cursor-pointer
                            text-[0.88rem] border-2 border-gray-300 text-gray-300 rounded-md font-bold'
                        >33</span>
                        
                        <span className='m-1 mr-2 ml-0 pt-[1px] pb-[1px] p-[12px] cursor-pointer
                            text-[0.88rem] border-2 border-orange-500 text-orange-600 font-bold rounded-md'
                        >34</span>
                        
                        <span className='m-1 mr-2 ml-0 pt-[1px] pb-[1px] p-[12px] cursor-pointer
                            text-[0.88rem] border-2 border-black rounded-md font-bold'
                        >35</span>
                        
                        <span className='m-1 mr-2 ml-0 pt-[1px] pb-[1px] p-[12px] cursor-pointer
                            text-[0.88rem] border-2 border-black rounded-md font-bold'
                        >36</span>
                        
                        <span className='m-1 mr-2 ml-0 pt-[1px] pb-[1px] p-[12px] cursor-pointer
                            text-[0.88rem] border-2 border-orange-500 text-orange-600 font-bold rounded-md'
                        >37</span>
                        
                        <span className='m-1 mr-2 ml-0 pt-[1px] pb-[1px] p-[12px] cursor-pointer
                            text-[0.88rem] border-2 border-orange-500 text-orange-600 font-bold rounded-md'
                        >38</span>
                        
                        <span className='m-1 mr-2 ml-0 pt-[1px] pb-[1px] p-[12px] cursor-pointer
                            text-[0.88rem] border-2 border-orange-500 text-orange-600 font-bold rounded-md'
                        >39</span>
                        
                        <span className='m-1 mr-2 ml-0 pt-[1px] pb-[1px] p-[12px] cursor-pointer
                            text-[0.88rem] border-2 border-orange-500 text-orange-600 font-bold rounded-md'
                        >40</span>
                    </div>
                    <p className='bg-orange-600 text-white text-[0.4rem]
                        rounded-sm p-[2px] w-[120px] mt-1 text-center'>ESCOLHA UM TAMANHO</p>
                    
                    <p className='mt-2 text-[0.8rem] cursor-pointer'><u>Veja nosso <strong>guia de medidas</strong></u></p>

                    {/* Buy button */}
                    <div className='flex justify-center bg-[#a9cf80] text-white
                        p-3 text-[0.78rem] font-bold mt-3 cursor-pointer'>
                            <h1>COMPRAR</h1>
                    </div>
                    
                    {/* Add to cart button */}
                    <div className='flex justify-center bg-white text-[#a9cf80] border-4 border-[#a9cf80]
                        p-3 text-[0.78rem] font-bold mt-2 cursor-pointer'>
                            <h1>ADICIONAR AO CARRINHO</h1>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
};

export default Main;