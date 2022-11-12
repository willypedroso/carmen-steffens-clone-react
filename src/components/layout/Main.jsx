import { useEffect, useState } from 'react';
import productPic1 from '../../images/product-pic.jpeg';
import productPic2 from '../../images/product-pic2.jpeg';

import { HiGift } from "react-icons/hi";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

function Main(props) {
    const [mainPicture, setMainPicture] = useState(productPic1);

    return (
        <div>
            {props.mobile ?
            (
            /* Rendering for mobiles and smaller screens */
            <div className='flex flex-col'>

                {/* Main picture of the product */}
                <div className='flex items-center m-3'>
                    <TfiAngleLeft className='inline text-[3rem] cursor-pointer' onClick={() => {
                        mainPicture == productPic1 ? setMainPicture(productPic2) : setMainPicture(productPic1)
                    }}/>
                    <div className='flex'>
                        <a href={mainPicture}><img src={mainPicture} alt="Product Picture"/></a>
                    </div>
                    <TfiAngleRight className='inline text-[3rem] cursor-pointer' onClick={() => {
                        mainPicture == productPic1 ? setMainPicture(productPic2) : setMainPicture(productPic1)
                    }}/>
                </div>

                {/* Product details */}
                <div className='flex flex-col m-10 min-w-[330px]'>

                    {/* Product name */}
                    <h3>Flat Alfinete CS</h3>
                    <p className='text-gray-600 text-[0.6rem] mt-1'>Ref.: 0204.463.001A</p>

                    {/* Product price */}
                    <h3 className='mt-2 font-medium'>R$349,90</h3>

                    {/* Product sizes */}
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

                    {/* Buttons */}
                    {/* Buy button */}
                    <div className='flex justify-center bg-[#a9cf80] text-white
                        p-3 text-[0.78rem] font-bold mt-3 cursor-pointer'>
                            <button>COMPRAR</button>
                    </div>
                    
                    {/* Add to cart button */}
                    <div className='flex justify-center bg-white text-[#a9cf80] border-[3px] border-[#a9cf80]
                        p-3 text-[0.78rem] font-bold mt-2 cursor-pointer'>
                            <button>ADICIONAR AO CARRINHO</button>
                    </div>
                    
                    {/* Ask for present button */}
                    <div className='flex justify-center bg-[#eac26a] text-black
                        p-2 text-[0.78rem] font-bold mt-2 cursor-pointer'>
                            <HiGift className='inline text-[1.3rem] mr-3'/><button>PEDIR DE PRESENTE</button>
                    </div>

                    {/* Product description */}
                    <div className='text-[0.7rem]'>
                        <p className='mt-2'><strong>Descrição</strong></p>
                        <p className='mt-3'>Rasteira de dedo e de bico quadrado confeccionada em couro legítimo. Com detalhe de alfinete personalizado com logo CS, este modelo conta com fechamento com fivela.</p>
                        
                        <p className='mt-3'><strong>Por que apostar:</strong></p>
                        <p className='mt-3'>Minimalista, esta flat na cor preta acompanha os looks do dia a dia com muito conforto. Combine com vestido para compor uma produção fresh ou vá de short de alfaiataria e blusa leve para criar uma inspiração elegante.</p>

                        <p className='mt-3'><strong>Material:</strong> Couro legítimo</p>

                        <p className='mt-3'><strong>Cor:</strong> Preto</p>

                        <p className='mt-3'><strong>Salto:</strong> 1 cm</p>
                    </div>
                </div>
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
                    <div className='w-[540px] mt-10'>
                        <a href={mainPicture}><img src={mainPicture} alt="Main picture of product" /></a>
                    </div>
                </div>

                {/* Product details */}
                <div className='flex flex-col m-10 w-[350px]'>

                    {/* Product name */}
                    <h3>Flat Alfinete CS</h3>
                    <p className='text-gray-600 text-[0.6rem] mt-1'>Ref.: 0204.463.001A</p>

                    {/* Product price */}
                    <h3 className='mt-2 font-medium'>R$349,90</h3>

                    {/* Product sizes */}
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

                    {/* Buttons */}
                    {/* Buy button */}
                    <div className='flex justify-center bg-[#a9cf80] text-white
                        p-3 text-[0.78rem] font-bold mt-3 cursor-pointer'>
                            <button>COMPRAR</button>
                    </div>
                    
                    {/* Add to cart button */}
                    <div className='flex justify-center bg-white text-[#a9cf80] border-[3px] border-[#a9cf80]
                        p-3 text-[0.78rem] font-bold mt-2 cursor-pointer'>
                            <button>ADICIONAR AO CARRINHO</button>
                    </div>
                    
                    {/* Ask for present button */}
                    <div className='flex justify-center bg-[#eac26a] text-black
                        p-2 text-[0.78rem] font-bold mt-2 cursor-pointer'>
                            <HiGift className='inline text-[1.3rem] mr-3'/><button>PEDIR DE PRESENTE</button>
                    </div>

                    {/* Product description */}
                    <div className='text-[0.7rem]'>
                        <p className='mt-2'><strong>Descrição</strong></p>
                        <p className='mt-3'>Rasteira de dedo e de bico quadrado confeccionada em couro legítimo. Com detalhe de alfinete personalizado com logo CS, este modelo conta com fechamento com fivela.</p>
                        
                        <p className='mt-3'><strong>Por que apostar:</strong></p>
                        <p className='mt-3'>Minimalista, esta flat na cor preta acompanha os looks do dia a dia com muito conforto. Combine com vestido para compor uma produção fresh ou vá de short de alfaiataria e blusa leve para criar uma inspiração elegante.</p>

                        <p className='mt-3'><strong>Material:</strong> Couro legítimo</p>

                        <p className='mt-3'><strong>Cor:</strong> Preto</p>

                        <p className='mt-3'><strong>Salto:</strong> 1 cm</p>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
};

export default Main;