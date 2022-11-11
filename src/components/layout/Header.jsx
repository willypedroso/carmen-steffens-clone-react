import logo from '../../images/carmen-steffens-logo.jpg';
import { RiArrowDropDownFill } from "react-icons/ri";
import { HiOutlineUser, HiOutlineShoppingBag, HiSearch } from "react-icons/hi";
import { useState } from 'react';

function Header() {
    
    /* Declaration of conditional menu control variables */
    const [renderSapatos, setRenderSapatos] = useState(false);
    const [renderBolsas, setRenderBolsas] = useState(false);
    const [renderRoupas, setRenderRoupas] = useState(false);
    const [renderCsyoung, setRenderCsyoung] = useState(false);
    const [renderAcessorios, setRenderAcessorios] = useState(false);
    const [renderOutlet, setRenderOutlet] = useState(false);

    return (
        <div>
            <div className='flex justify-center flex-wrap'>
                <div className='flex flex-col justify-center flex-wrap items-center h-[170px] w-[600px]'>
            
                    {/* Carmen Steffens header logo */}
                    <div><img src={logo} alt="Carmen Steffens Logo" /></div>
                    
                    {/* Menu */}
                    <div className='flex justify-around flex-wrap w-full text-[0.7rem] mt-3'>
                        <ul className='cursor-pointer'
                            onMouseOver={() => setRenderSapatos(true)}
                            onMouseOut={() => setRenderSapatos(false)}
                        >SAPATOS <RiArrowDropDownFill className='inline'/></ul>
            
                        {/* Conditional submenu "Sapatos" */}
                        {renderSapatos ? (
                            <div className='flex flex-col flex-wrap absolute shadow-lg top-[125px] h-[140px] w-[800px] p-[20px]'
                            onMouseOver={() => setRenderSapatos(true)}
                            onMouseOut={() => setRenderSapatos(false)}>
                                <a href="#"><strong>VER TODOS</strong></a>
                                <a href="#"><strong>FLATS</strong></a>
                                <a href="#"><strong>PLATAFORMAS</strong></a>
                                <a href="#"><strong>TAMANCOS</strong></a>
                                <a href="#"><strong>ANABELAS</strong></a>
                                <a href="#"><strong>MOCASSINS</strong></a>
                                <a href="#"><strong>SANDÁLIAS</strong></a>
                                <a href="#"><strong>TÊNIS</strong></a>
                                <a href="#"><strong>BOTAS</strong></a>
                                <a href="#"><strong>MULES</strong></a>
                                <a href="#"><strong>SAPATILHAS</strong></a>
                                <a href="#"><strong>LINHA CONFORT</strong></a>
                                <a href="#"><strong>CHINELOS</strong></a>
                                <a href="#"><strong>PEEP TOES</strong></a>
                                <a href="#"><strong>SCARPINS</strong></a>
                                <a href="#"><strong>LINHA NOVA</strong></a>
                            </div>
                        ) : false }
                        <ul className='cursor-pointer'
                            onMouseOver={() => setRenderBolsas(true)}
                            onMouseOut={() => setRenderBolsas(false)}
                        >BOLSAS <RiArrowDropDownFill className='inline'/></ul>
            
                        {/* Conditional submenu "Bolsas" */}
                        {renderBolsas ? (
                            <div className='flex flex-col flex-wrap absolute shadow-lg top-[125px] h-[140px] w-[800px] p-[20px]'
                            onMouseOver={() => setRenderBolsas(true)}
                            onMouseOut={() => setRenderBolsas(false)}>
                                <a href="#"><strong>VER TODOS</strong></a>
                                <a href="#"><strong>BOLSAS DE OMBRO</strong></a>
                                <a href="#"><strong>MOCHILAS</strong></a>
                                <a href="#"><strong>BOLSAS DE MÃO</strong></a>
                                <a href="#"><strong>BOLSAS TRANSVERSAIS</strong></a>
                                <a href="#"><strong>MALAS</strong></a>
                                <a href="#"><strong>BOLSAS DE MÃO E DE OMBRO</strong></a>
                                <a href="#"><strong>BOLSAS PARA LAPTOP</strong></a>
                                <a href="#"><strong>POCHETES</strong></a>
                                <a href="#"><strong>BOLSAS DE MÃO E TRANSVERSAIS</strong></a>
                                <a href="#"><strong>CLUTCHES</strong></a>
                            </div>
                        ) : false }
                        <ul className='cursor-pointer'
                            onMouseOver={() => setRenderRoupas(true)}
                            onMouseOut={() => setRenderRoupas(false)}
                        >ROUPAS <RiArrowDropDownFill className='inline'/></ul>
            
                        {/* Conditional submenu "Roupas" */}
                        {renderRoupas ? (
                            <div className='flex flex-col flex-wrap absolute shadow-lg top-[125px] h-[140px] w-[800px] p-[20px]'
                            onMouseOver={() => setRenderRoupas(true)}
                            onMouseOut={() => setRenderRoupas(false)}>
                                <a href="#"><strong>VER TODOS</strong></a>
                                <a href="#"><strong>CAMISAS</strong></a>
                                <a href="#"><strong>SAIAS</strong></a>
                                <a href="#"><strong>BEACHWEAR</strong></a>
                                <a href="#"><strong>BLUSAS E TOPS</strong></a>
                                <a href="#"><strong>CASACOS E JAQUETAS</strong></a>
                                <a href="#"><strong>SHORTS</strong></a>
                                <a href="#"><strong>BODY</strong></a>
                                <a href="#"><strong>LENÇOS</strong></a>
                                <a href="#"><strong>VESTIDOS</strong></a>
                                <a href="#"><strong>CALÇAS</strong></a>
                                <a href="#"><strong>MACACÕES</strong></a>
                                <a href="#"><strong>LINGERIE</strong></a>
                            </div>
                        ) : false }
                        <ul className='cursor-pointer'
                            onMouseOver={() => setRenderCsyoung(true)}
                            onMouseOut={() => setRenderCsyoung(false)}
                        >CS YOUNG <RiArrowDropDownFill className='inline'/></ul>
                        
                        {/* Conditional submenu "CS Young" */}
                        {renderCsyoung ? (
                            <div className='flex justify-between flex-wrap absolute shadow-lg top-[125px] h-[140px] w-[800px] p-[20px]'
                            onMouseOver={() => setRenderCsyoung(true)}
                            onMouseOut={() => setRenderCsyoung(false)}>
                                <a href="#"><strong>CS YOUNG ROUPAS</strong></a>
                                <a href="#"><strong>CS YOUNG BOLSAS</strong></a>
                                <a href="#"><strong>CS YOUNG SAPATOS</strong></a>
                                <a href="#"><strong>CS YOUNG ACESSÓRIOS</strong></a>
                            </div>
                        ) : false }
                        <ul className='cursor-pointer'
                            onMouseOver={() => setRenderAcessorios(true)}
                            onMouseOut={() => setRenderAcessorios(false)}
                        >ACESSÓRIOS <RiArrowDropDownFill className='inline'/></ul>
                        
                        {/* Conditional submenu "Acessórios" */}
                        {renderAcessorios ? (
                            <div className='flex flex-col justify-between flex-wrap absolute shadow-lg top-[125px] h-[140px] w-[800px] p-[20px]'
                            onMouseOver={() => setRenderAcessorios(true)}
                            onMouseOut={() => setRenderAcessorios(false)}>
                                <a href="#"><strong>VER TODOS</strong></a>
                                <a href="#"><strong>CARTEIRAS</strong></a>
                                <a href="#"><strong>ITENS ESPECIAIS</strong></a>
                                <a href="#"><strong>RELÓGIOS</strong></a>
                                <a href="#"><strong>ANÉIS</strong></a>
                                <a href="#"><strong>CINTOS</strong></a>
                                <a href="#"><strong>ÓCULOS</strong></a>
                                <a href="#"><strong>BONÉS</strong></a>
                                <a href="#"><strong>COLARES</strong></a>
                                <a href="#"><strong>PORTA-CELULAR</strong></a>
                                <a href="#"><strong>BRINCOS</strong></a>
                                <a href="#"><strong>CHAVEIROS</strong></a>
                                <a href="#"><strong>PULSEIRAS</strong></a>
                            </div>
                        ) : false }
                        <ul className='cursor-pointer'
                            onMouseOver={() => setRenderOutlet(true)}
                            onMouseOut={() => setRenderOutlet(false)}
                        >OUTLET <RiArrowDropDownFill className='inline'/></ul>
                        
                        {/* Conditional submenu "Outlet" */}
                        {renderOutlet ? (
                            <div className='flex flex-col justify-between flex-wrap absolute shadow-lg top-[125px] h-[140px] w-[800px] p-[20px]'
                            onMouseOver={() => setRenderOutlet(true)}
                            onMouseOut={() => setRenderOutlet(false)}>
                                <a href="#"><strong>SAPATOS</strong></a>
                                <a href="#"><strong>BOLSAS</strong></a>
                                <a href="#"><strong>ROUPAS</strong></a>
                                <a href="#"><strong>ACESSÓRIOS</strong></a>
                                <a href="#"><strong>CS YOUG BOLSAS</strong></a>
                                <a href="#"><strong>CS YOUNG ROUPAS</strong></a>
                                <a href="#"><strong>CS YOUNG SAPATOS</strong></a>
                                <a href="#"><strong>CS YOUNG ACESSÓRIOS</strong></a>
                            </div>
                        ) : false }
                    </div>
                </div>
                
                {/* Profile, Cart and Search field */}
                <div className='flex flex-col justify-around p-6'>
                    <div className='flex justify-between w-[190px] text-[0.88rem]'>
                        <a href="#">Meu Perfil <HiOutlineUser className='inline pb-[2px]'/></a>
                        <a href="#">Sacola <HiOutlineShoppingBag className='inline pb-[2px]'/></a>
                    </div>
                    <span className='border-2 border-gray-300 rounded-md'><input className='w-[180px] rounded-md p-1 text-[0.8rem]' type="text" placeholder='Faça sua busca aqui' /><HiSearch className='inline'/></span>
                </div>
            </div>
            {!renderSapatos && !renderBolsas && !renderRoupas && !renderCsyoung && !renderAcessorios && !renderOutlet ? (<div className='bg-black text-white text-center mt-[-15px]'>
                <p className='p-3 text-[0.8rem]'>FRETE GRÁTIS - Retire seu pedido em uma de nossas lojas por todo Brasil.</p>
            </div>): false}
        </div>
    );
}

export default Header;