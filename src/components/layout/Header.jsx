import logo from '../../images/carmen-steffens-logo.jpg';
import { RiArrowDropDownFill } from "react-icons/ri";
import { HiOutlineUser, HiOutlineShoppingBag, HiSearch } from "react-icons/hi";

function Header() {
    return (
        <div className='flex justify-center'>
            <div className='flex flex-col justify-center items-center h-[170px] w-[600px]'>
                <div><img src={logo} alt="Carmen Steffens Logo" /></div>
                <div className='flex justify-around w-full text-[0.7rem] mt-4'>
                    <ul className='cursor-pointer'>SAPATOS <RiArrowDropDownFill className='inline'/></ul>
                    <ul className='cursor-pointer'>BOLSAS <RiArrowDropDownFill className='inline'/></ul>
                    <ul className='cursor-pointer'>ROUPAS <RiArrowDropDownFill className='inline'/></ul>
                    <ul className='cursor-pointer'>CS YOUNG <RiArrowDropDownFill className='inline'/></ul>
                    <ul className='cursor-pointer'>ACESSÓTIOS <RiArrowDropDownFill className='inline'/></ul>
                    <ul className='cursor-pointer'>OUTLET <RiArrowDropDownFill className='inline'/></ul>
                </div>
            </div>
            <div className='flex flex-col justify-around p-6'>
                <div className='flex justify-between w-[190px] text-[0.88rem]'>
                    <a href="#">Meu Perfil <HiOutlineUser className='inline pb-[2px]'/></a><a href="#">Sacola <HiOutlineShoppingBag className='inline pb-[2px]'/></a>
                </div>
                <span className='border-2 border-gray-300 rounded-md'><input className='w-[180px] rounded-md p-1 text-[0.8rem]' type="text" placeholder='Faça sua busca aqui' /><HiSearch className='inline'/></span>
            </div>
        </div>
    );
}

export default Header;