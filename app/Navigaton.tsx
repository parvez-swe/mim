import React from 'react'
import Link from 'next/link';
const Navigaton = () => {
  return (
    <div className=" bg-slate-800 h-16 flex justify-between items-center px-5 lg:px-16">
      <h1 className="text-white text-3xl font-bold">Imran</h1>
      <div className="list-group">
        <ul className=" flex text-slate-300 text-lg lg:text-xl">
          <li className="mx-2  cursor-pointer hover:text-white transform duration-500 ">
            <Link href="">Home</Link>
          </li>
          <li className="mx-2  cursor-pointer hover:text-white transform duration-500 ">
            <Link href="">Blog</Link>
          </li>
          <li className="mx-2  cursor-pointer hover:text-white transform duration-500 ">
            <Link href="">Contact</Link>
          </li>
        </ul>
      </div>
      {/* <div className='text-white border px-4 py-2 border-slate-500 rounded-3xl cursor-pointer hover:bg-slate-700 transform duration-700'>Hire Me</div> */}
    </div>
  );
}

export default Navigaton