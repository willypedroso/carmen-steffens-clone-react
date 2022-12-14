import guiaMedidas from '../images/tabela-de-medidas.jpg';

import { HiGift } from "react-icons/hi";

function ProductDetails(props) {
    return (
        <div>
            {/* Product details */}
            <div className={props.mobile ? 'flex flex-col m-10 min-w-[330px]' : 'flex flex-col m-10 w-[350px]'}>

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

                <a href={guiaMedidas} className='mt-2 text-[0.8rem] cursor-pointer'><u>Veja nosso <strong>guia de medidas</strong></u></a>

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
                    <p className='mt-2'><strong>Descri????o</strong></p>
                    <p className='mt-3'>Rasteira de dedo e de bico quadrado confeccionada em couro leg??timo. Com detalhe de alfinete personalizado com logo CS, este modelo conta com fechamento com fivela.</p>
                    
                    <p className='mt-3'><strong>Por que apostar:</strong></p>
                    <p className='mt-3'>Minimalista, esta flat na cor preta acompanha os looks do dia a dia com muito conforto. Combine com vestido para compor uma produ????o fresh ou v?? de short de alfaiataria e blusa leve para criar uma inspira????o elegante.</p>

                    <p className='mt-3'><strong>Material:</strong> Couro leg??timo</p>

                    <p className='mt-3'><strong>Cor:</strong> Preto</p>

                    <p className='mt-3'><strong>Salto:</strong> 1 cm</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;