import React from 'react'
import LogoPink from "/chefify.png"
import Check from "/check.png"
import { IoSearch } from "react-icons/io5";
import Avatar from "/avatar.png"
function Header() {
  return (
    <header className='flex items-center justify-center gap-20 p-2 shadow-md'>
    <div className='flex items-center gap-4'>
        <img src={LogoPink} alt="logo" />
        <div className='relative'>
            <IoSearch size={24} className='absolute -translate-y-1/2 top-1/2 left-2' ></IoSearch>
            <input type="text" className=' p-2 px-10 rounded-2xl min-w-[300px] !bg-gray-200' placeholder='Search....' />
        </div>
    </div>
    {/* f84c84 */}
    <ul className='flex gap-2 text-sm text-[#585c6c] '>
        <li>
            <a href="#">What to cook</a>
        </li>
        <li>
            <a href="#">Recipes</a>
        </li>
        <li>
            <a href="#">Recipes</a>
        </li>
        <li>
            <a href="#">Occasions</a>
        </li>
            <li>
                <a href="#">About Us</a>
            </li>
    </ul>
    <div className='flex gap-3'>
        <div className='flex gap-2 items-center bg-[#f84c84]/30 rounded-md p-2'>
            <img src={Check} alt="HaManhCuong" />
            <p className='text-[#f84c84]'>Your Recipe Box</p>
        </div>
        <img src={Avatar} alt="HaManhCuong" />
    </div>
</header>
  )
}

export default Header
