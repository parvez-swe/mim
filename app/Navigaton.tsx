import React from 'react'
import Link from 'next/link';
const Navigaton = () => {
  return (
    <div className="bg-slate-600 h-16 flex justify-between items-center px-16">
      <h1 className="text-white text-3xl font-bold">Imran</h1>
      <ul className="flex text-slate-300  ">
        <li className="mx-2 text-xl cursor-pointer hover:text-white transform duration-500 ">
          <Link href="">Home</Link>
        </li>
        <li className="mx-2 text-xl cursor-pointer hover:text-white transform duration-500 ">
          <Link href="">Services</Link>
        </li>
        <li className="mx-2 text-xl cursor-pointer hover:text-white transform duration-500 ">
          <Link href="">Blog</Link>
        </li>
        <li className="mx-2 text-xl cursor-pointer hover:text-white transform duration-500 ">
          <Link href="">Pages</Link>
        </li>
        <li className="mx-2 text-xl cursor-pointer hover:text-white transform duration-500 ">
          <Link href="">Contact</Link>
        </li>
      </ul>
      <div className='text-white border px-4 py-2 border-slate-500 rounded-3xl cursor-pointer hover:bg-slate-700 transform duration-700'>Hire Me</div>
    </div>
  );
}

export default Navigaton