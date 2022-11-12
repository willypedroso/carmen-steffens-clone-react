import logo from '../../images/carmen-steffens-logo.jpg';
import { SlSocialInstagram, SlSocialLinkedin, SlSocialYoutube } from "react-icons/sl";
import { FaFacebookF } from "react-icons/fa";
import { TfiPinterest } from "react-icons/tfi";


function Footer() {
    return (
        <div>
            <div className="flex flex-wrap justify-center border-t-2 pt-5">
            
                {/* Follow links */}
                <div className="flex flex-col w-[240px] m-4">
                    <img className='m-2 w-[160px]' src={logo} alt="Carmen Steffens logo" />
                    <h1 className='m-2 font-bold text-[0.8rem]'>FOLLOW US</h1>
                    <div className='flex'>
                        <SlSocialInstagram className='m-1 cursor-pointer'/>
                        <FaFacebookF className='m-1 cursor-pointer'/>
                        <TfiPinterest className='m-1 cursor-pointer'/>
                        <SlSocialYoutube className='m-1 cursor-pointer'/>
                        <SlSocialLinkedin className='m-1 cursor-pointer'/>
                    </div>
                </div>
                {/* Help and Support */}
                <div className="flex flex-col w-[240px] m-4">
                    <h1 className='m-2 font-bold text-[0.8rem]'>AJUDA E SUPORTE</h1>
                    <a href='#' className='text-[0.8rem] m-1'>Central de Atendimento</a>
                    <a href='#' className='text-[0.8rem] m-1'>Como Comprar</a>
                    <a href='#' className='text-[0.8rem] m-1'>Entrega e Frete</a>
                    <a href='#' className='text-[0.8rem] m-1'>Segurança</a>
                    <a href='#' className='text-[0.8rem] m-1'>Trocas e Devoluções</a>
                    <a href='#' className='text-[0.8rem] m-1'>Condições de Uso</a>
                </div>
                {/* About */}
                <div className="flex flex-col w-[240px] m-4">
                <h1 className='m-2 font-bold text-[0.8rem]'>SOBRE A CARMEN STEFFENS</h1>
                    <a href='#' className='text-[0.8rem] m-1'>A Empresa</a>
                    <a href='#' className='text-[0.8rem] m-1'>Blog CS</a>
                </div>
                {/* Costumer services */}
                <div className="flex flex-col w-[240px] m-4">
                <h1 className='m-2 font-bold text-[0.8rem]'>SERVIÇOS AO CONSUMIDOR</h1>
                    <a href='#' className='text-[0.8rem] m-1'>Seja um franqueado</a>
                    <a href='#' className='text-[0.8rem] m-1'>Multimarcas</a>
                    <a href='#' className='text-[0.8rem] m-1'>Minha Conta</a>
                    <a href='#' className='text-[0.8rem] m-1'>Meus Pedidos</a>
                </div>
            </div>
            <div className='flex justify-between items-center bg-gray-300 mb-2 mt-3 min-h-[50px]'>
                <div className='flex justify-center'>
                    <a href='#' className='text-[0.8rem] m-5 p-2 mt-0 mb-0'>Termos de Uso</a>
                    <a href='#' className='text-[0.8rem] m-5 p-2 mt-0 mb-0'>Política de Privacidade</a>
                </div>
                <div className='flex justify-center'>
                <a href='#' className='text-[0.8rem] m-6 mt-0 mb-0'>Carmen Steffens Internacional 🇺🇸</a>
                </div>
            </div>
            <p className='text-center text-[0.8rem] text-gray-600 mb-3'>Clone page developed by <a className='font-bold hover:underline' href="https://github.com/willypedroso" target="_blank" rel="noreferrer noopener">Will Pedroso</a>. All rights reserved to Carmen Steffens. &copy;2022</p>
        </div>
    );
};

export default Footer;