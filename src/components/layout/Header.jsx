import logo from '../../images/carmen-steffens-logo.jpg';
import whiteLogoCs from '../../images/icon-brand-white-cs.png';
import whiteLogoCsc from '../../images/icon-brand-white-csc.png';
import whiteLogoCsy from '../../images/icon-brand-white-csy.png';
import logoCinza from '../../images/logo-cinza.svg';

import { menuSapatos, menuBolsas, menuRoupas, menuCsYoung, menuAcessorios, menuOutlet } from '../../data/menus';

import { RiArrowDropDownFill } from "react-icons/ri";
import { HiMenu, HiOutlineUser, HiOutlineShoppingBag, HiSearch } from "react-icons/hi";
import { useState } from 'react';

function Header(props) {
    
    /* Declaration of submenu conditional rendering variables */
    const [renderSapatos, setRenderSapatos] = useState(false);
    const [renderBolsas, setRenderBolsas] = useState(false);
    const [renderRoupas, setRenderRoupas] = useState(false);
    const [renderCsyoung, setRenderCsyoung] = useState(false);
    const [renderAcessorios, setRenderAcessorios] = useState(false);
    const [renderOutlet, setRenderOutlet] = useState(false);

    /* Declaration of mobile sidebar conditional rendering variables */
    const [sidebar, setSidebar] = useState(false);
    const [searchField, setSearchField] = useState(false);

    return (
        <div>
            {props.mobile ?
            (
                /* Rendering for phones and smaller screens */
                <div>
                    {/* Mobile side bar and Search Field */}
                    {sidebar || searchField ?
                    (
                    <div>
                        <div className='fixed bg-black h-screen
                            w-screen opacity-40' onClick={() => {document.documentElement.style.overflow = 'visible'; setSidebar(false); setSearchField(false)}}></div>
                        
                        {/* Mobile side bar */}    
                        {sidebar ? 
                        (
                        <div className='fixed flex flex-col top-0 left-0
                            h-screen w-[80%] min-w-[200px] font-serif bg-white'>
                            <div className='flex justify-between'>
                                <div className='m-3'>
                                    <h1 className='text-[1.2rem]'>Ol??, Visitante</h1>
                                    <p className='text-[.7rem] cursor-pointer hover:underline'>Fa??a seu login</p>
                                </div>
                                <p className='text-[.6rem] m-3 cursor-pointer hover:underline' onClick={() => {document.documentElement.style.overflow = 'visible'; setSidebar(false)}}>Fechar</p>
                            </div>
                            <div className='flex pr-16 mr-4 m-1'><img src={logoCinza} alt="Logo CS cinza" /></div>
                            <div className='flex flex-col text-[.7rem] mt-1 bg-gray-100'>
                                <a href="#" className='p-2 pl-4 bg-gray-100 border-b-[1px] border-gray-300'>SAPATOS</a>
                                <a href="#" className='p-2 pl-4 bg-gray-100 border-b-[1px] border-gray-300'>ROUPAS</a>
                                <a href="#" className='p-2 pl-4 bg-gray-100 border-b-[1px] border-gray-300'>BOLSAS</a>
                                <a href="#" className='p-2 pl-4 bg-gray-100 border-b-[1px] border-gray-300'>CS YOUNG</a>
                                <a href="#" className='p-2 pl-4 bg-gray-100 border-b-[1px] border-gray-300'>ACESS??RIOS</a>
                                <a href="#" className='p-2 pl-4 bg-gray-100'>OUTLET</a>
                                
                                <div className='text-gray-300 text-[1.2rem] m-3 flex flex-col'>
                                    <a href="#" className='hover:underline m-0'>Raphael Steffens</a>
                                    <a href="#" className='hover:underline m-0'>CS Club</a>
                                    <a href="#" className='hover:underline m-0'>CS Young</a>
                                </div>
                            </div>
                            <div className='text-[.7rem] flex flex-col mt-2'>
                                <a href="#" className='p-2 pl-4 border-b-[1px] border-gray-300'>SEJA UM(A) CONSULTOR(A)</a>
                                <a href="#" className='p-2 pl-4 border-b-[1px] border-gray-300'>O MUNDO CS</a>
                                <a href="#" className='p-2 pl-4 border-b-[1px] border-gray-300'>ATENDIMENTO</a>
                                <a href="#" className='p-2 pl-4 border-b-[1px] border-gray-300'>SERVI??O AO CONSUMIDOR</a>
                            </div>
                        </div>
                        ):false}

                        {/* Mobile search field */}
                        {searchField ?
                        (
                        <div className='absolute flex justify-start top-0 h-[60px] w-full bg-white'>
                            <input className='border-b-[1px] border-gray-400 p-0 m-3 text-[.77rem] w-full focus:outline-none placeholder:font-bold' type="text" placeholder="Fa??a sua busca aqui" />
                            <HiSearch className='inline self-center mr-3 text-[1.3rem] cursor-pointer' onClick={() => setSearchField(false)}/>
                        </div>
                        ):false}
                    </div>
                    ) : false}

                    {/* Mobile header */}
                    <div className='flex justify-between h-[70px] min-w-[330px]'>
                    
                        {/* Menu bar */}
                        <HiMenu className='m-2 text-[1.4rem] cursor-pointer' onClick={() => {document.documentElement.style.overflow = 'hidden'; setSidebar(true)}}/>
                    
                        {/* Carmen Steffens header logo */}
                        <img className='h-6 m-3 ml-6 cursor-pointer' src={logo} alt="Carmen Steffens Logo" />
                        {/* Search and Cart */}
                        <div className='flex w-14 text-[1.4rem] m-1'>
                            <HiSearch className='m-1 cursor-pointer' onClick={() => setSearchField(true)}/><HiOutlineShoppingBag className='m-1 cursor-pointer'/>
                        </div>
                    </div>
                    
                    {/* Banner */}
                    <div className='bg-black text-white text-center mt-[-15px] min-w-[330px]'>
                        <p className='p-3 text-[0.8rem]'>FRETE GR??TIS - Retire seu pedido em uma de nossas lojas por todo Brasil.</p>
                    </div>
                </div>
            ):
            (
                /* Rendering for computers and bigger screens */
            <div>
                {/* Initial black banner */}
                <div className='flex justify-between bg-black text-white h-[53px] mb-[-15px]'>

                    {/* Additional links from Carmen Steffens */}
                    <div className='flex justify-center align-middle'>
                        <img className='h-[20px] self-center m-2
                            ml-7 cursor-pointer' src={whiteLogoCs} alt="Carmen Steffens Brand Logo" />
                        <h1 className='self-center text-[0.6rem]
                            m-4 font-semibold cursor-pointer'>RAPHAEL STEFFENS</h1>
                        <img className='h-[24px] self-center m-2
                            cursor-pointer' src={whiteLogoCsc} alt="Carmen Steffens Brand Logo" />
                        <img className='h-[20px] self-center m-2 ml-4
                            cursor-pointer' src={whiteLogoCsy} alt="Carmen Steffens Brand Logo" />
                    </div>

                    {/* Additional options */}
                    <div className='flex justify-center align-middle text-[0.7rem]'>
                        <h1 className='self-center m-3 cursor-pointer'>Atendimento</h1>
                        <h1 className='self-center m-3 cursor-pointer'>Seja um(a) consultor(a)</h1>
                        <h1 className='self-center m-3 cursor-pointer'>Seja um franqueado</h1>
                        <h1 className='self-center m-3 cursor-pointer'>Blog</h1>
                        <h1 className='self-center max-w-[110px]
                            text-[0.6rem] text-center m-3 cursor-pointer'>FRETE GR??TIS ACIMA DE 599,90</h1>
                        <h1 className='self-center m-3 text-[1rem] mr-6 cursor-pointer'>????????</h1>
                    </div>
                </div>
                <div className='flex justify-center flex-wrap'>
                    <div className='flex flex-col justify-center flex-wrap items-center h-[170px] w-[600px]'>
                
                        {/* Carmen Steffens header logo */}
                        <div><img className='cursor-pointer' src={logo} alt="Carmen Steffens Logo" /></div>
                
                        {/* Menu */}
                        <div className='flex justify-around flex-wrap w-full text-[0.7rem] mt-3'>
                            <ul className='cursor-pointer'
                                onMouseOver={() => setRenderSapatos(true)}
                                onMouseOut={() => setRenderSapatos(false)}
                            >SAPATOS <RiArrowDropDownFill className='inline'/></ul>
                
                            {/* Conditional submenu "Sapatos" */}
                            {renderSapatos ? (
                                <div className='flex flex-col flex-wrap absolute bg-white shadow-lg top-[160px] h-[140px] w-[800px] p-[20px]'
                                onMouseOver={() => setRenderSapatos(true)}
                                onMouseOut={() => setRenderSapatos(false)}>
                                    {menuSapatos.map(item => (
                                        <a key={item} href="#"><strong>{item}</strong></a>
                                    ))}                                  
                                </div>
                            ) : false }
                            <ul className='cursor-pointer'
                                onMouseOver={() => setRenderBolsas(true)}
                                onMouseOut={() => setRenderBolsas(false)}
                            >BOLSAS <RiArrowDropDownFill className='inline'/></ul>
                
                            {/* Conditional submenu "Bolsas" */}
                            {renderBolsas ? (
                                <div className='flex flex-col flex-wrap absolute bg-white shadow-lg top-[160px] h-[140px] w-[800px] p-[20px]'
                                onMouseOver={() => setRenderBolsas(true)}
                                onMouseOut={() => setRenderBolsas(false)}>
                                    {menuBolsas.map(item => (
                                        <a key={item} href="#"><strong>{item}</strong></a>
                                    ))}
                                </div>
                            ) : false }
                            <ul className='cursor-pointer'
                                onMouseOver={() => setRenderRoupas(true)}
                                onMouseOut={() => setRenderRoupas(false)}
                            >ROUPAS <RiArrowDropDownFill className='inline'/></ul>
                
                            {/* Conditional submenu "Roupas" */}
                            {renderRoupas ? (
                                <div className='flex flex-col flex-wrap absolute bg-white shadow-lg top-[160px] h-[140px] w-[800px] p-[20px]'
                                onMouseOver={() => setRenderRoupas(true)}
                                onMouseOut={() => setRenderRoupas(false)}>
                                    {menuRoupas.map(item => (
                                        <a key={item} href="#"><strong>{item}</strong></a>
                                    ))}
                                </div>
                            ) : false }
                            <ul className='cursor-pointer'
                                onMouseOver={() => setRenderCsyoung(true)}
                                onMouseOut={() => setRenderCsyoung(false)}
                            >CS YOUNG <RiArrowDropDownFill className='inline'/></ul>
                
                            {/* Conditional submenu "CS Young" */}
                            {renderCsyoung ? (
                                <div className='flex justify-between flex-wrap absolute bg-white shadow-lg top-[160px] h-[60px] w-[800px] p-[20px]'
                                onMouseOver={() => setRenderCsyoung(true)}
                                onMouseOut={() => setRenderCsyoung(false)}>
                                    {menuCsYoung.map(item => (
                                        <a key={item} href="#"><strong>{item}</strong></a>
                                    ))}
                                </div>
                            ) : false }
                            <ul className='cursor-pointer'
                                onMouseOver={() => setRenderAcessorios(true)}
                                onMouseOut={() => setRenderAcessorios(false)}
                            >ACESS??RIOS <RiArrowDropDownFill className='inline'/></ul>
                
                            {/* Conditional submenu "Acess??rios" */}
                            {renderAcessorios ? (
                                <div className='flex flex-col justify-between flex-wrap absolute bg-white shadow-lg top-[160px] h-[140px] w-[800px] p-[20px]'
                                onMouseOver={() => setRenderAcessorios(true)}
                                onMouseOut={() => setRenderAcessorios(false)}>
                                    {menuAcessorios.map(item => (
                                        <a key={item} href="#"><strong>{item}</strong></a>
                                    ))}
                                </div>
                            ) : false }
                            <ul className='cursor-pointer'
                                onMouseOver={() => setRenderOutlet(true)}
                                onMouseOut={() => setRenderOutlet(false)}
                            >OUTLET <RiArrowDropDownFill className='inline'/></ul>
                
                            {/* Conditional submenu "Outlet" */}
                            {renderOutlet ? (
                                <div className='flex flex-col justify-between flex-wrap absolute bg-white shadow-lg top-[160px] h-[140px] w-[800px] p-[20px]'
                                onMouseOver={() => setRenderOutlet(true)}
                                onMouseOut={() => setRenderOutlet(false)}>
                                    {menuOutlet.map(item => (
                                        <a key={item} href="#"><strong>{item}</strong></a>
                                    ))}
                                    {menuCsYoung.map(item => (
                                        <a key={item} href="#"><strong>{item}</strong></a>
                                    ))}
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
                        <div className='flex items-center border-2 border-gray-300'><input className='p-1 pr-0 mr-0 text-[0.7rem] w-[150px] focus:outline-none' type="text" placeholder='Fa??a sua busca aqui' /><HiSearch className='inline ml-0 p-0 mr-3'/></div>
                    </div>
                </div>
                {/* Changeable color banner */}
                <div className='bg-black text-white text-center mt-[-15px]'>
                    <p className='p-3 text-[0.8rem]'>FRETE GR??TIS - Retire seu pedido em uma de nossas lojas por todo Brasil.</p>
                </div>
            </div>
            )}            
        </div>
    );
}

export default Header;