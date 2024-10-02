"use client"
import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import Drop from './component/Drop/page';
export default function Home() {
  return(
  <div className="max-w-screen-2xl h-max bg-gradient-to-tl from-indigo-600 to-white mx-5  border border-x-8 border-indigo-300 md:w-1080px">
  <div className="w-fit h-20  border-none ml-32  flex items-center flex-col relative p-2 ">
    <div className="w-full max-w-7xl h-20 flex items-center gap-5 ml-auto mr-auto ">
      <Link href="www.google.com">
        <Image
          src="https://agency.demo.nextjstemplates.com/images/logo/logo.svg"
          width="44"
          height="44"
          className="size-44 cursor-pointer mr-8"
          alt="logo"
        />
      </Link>
      <button className="text-gray-800 w-20 h-10 flex justify-center items-center rounded-full transition-colors duration-100 hover:text-white hover:bg-indigo-500">
        <Link href="#">About</Link>
      </button>
      <button className="text-gray-800 w-20 h-10 flex justify-center items-center rounded-full transition-colors duration-100 hover:text-white hover:bg-indigo-500">
        <Link href="#">Services</Link>
      </button>
      <button className="text-gray-800 w-20 h-10 flex justify-center items-center rounded-full transition-colors duration-100 hover:text-white hover:bg-indigo-500">
        <Link href="#">Portfolio</Link>
      </button>
      <button className="text-gray-800 w-20 h-10 flex justify-center items-center rounded-full transition-colors duration-100 hover:text-white hover:bg-indigo-500">
        <Link href="#">Pricing</Link>
      </button>
      <Drop />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current text-black opacity-60 ml-72 cursor-pointer hover:fill-blue-700"
      >
        <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
      </svg>
      <button className="w-36 h-1/2 rounded-full border-2 border-transparent bg-blue-600 text-white transition-colors duration-500 hover:bg-white hover:border-blue-600 hover:text-blue-900  font-bold">
        Get a Quote
      </button>
    </div>
  </div>
  <h1 className=" text-gray-900 mt-14  ml-24 text-5xl">
    Next.js Site Template For
    <br />
    Agency and Portfolio
  </h1>
  <p className="text-gray-500 ml-24 translate-y-6">
    Elevate your online presence and impress clients effortlessly!
    <br /> — featuring essential integrations, pre-built pages, and
    <br />
    customizable components. Modern, responsive design with
    <br />
    fast loading and SEO optimization.
  </p>
  <div className="w-1/2 h-fit flex flex-col justify-center items-center  translate-x-full -translate-y-32">
  <img src="https://agency.demo.nextjstemplates.com/_next/image?url=%2Fimages%2Fhero%2Fhero-image-01.png&w=1920&q=75" className="size-4/5 shadow-2xl"/>
  <div className="w-fit h-fit relative top-96 translate-y-36 text-black sm:pb- lg:pb-14">
  <h1 className="text-3xl font-mono">Connect with Us</h1>
  <p className="mt-5 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque<br />dui ligula, malesuada vel convallis in, tincidunt ut mi. Vestibulum sit<br />amet urna placerat, tempor soloa demanium testi lor Aliq lorem<br />vitae semper tempor.</p>
  </div>
  </div>
  <div className="w-fit h-fit ml-24 flex flex-col -translate-y-full relative ">
  <div className="w-96 h-56 bg-white p-10 text-black rounded-3xl shadow-2xl hover:transition-colors hover:duration-700 hover:bg-gray-700 hover:text-white ">
      <h2 className=" text-2xl font-bold mb-6">
        Discover Your Potential
      </h2>
      <p className="mb-8">
        Create a professional, high-quality website for your agency
      </p>
    </div>
    <div className="w-96 h-56 bg-white p-10 rounded-3xl shadow-2xl text-black mt-20 hover:transition-colors hover:duration-700 hover:bg-gray-700 hover:text-white  ">
      <h2 className=" text-2xl font-bold mb-6 ">
      Unlock New Opportunities
      </h2>
      <p>
      Build a stunning, professional website that elevates your agencys brand.
      </p>
    </div>
    <button className="w-52 h-14 bg-blue-600 text-white mt-10 text-lg rounded-md flex justify-center items-center transition-colors duration-300 ease-in-out hover:bg-white hover:text-blue-800 hover:border-2 hover:border-blue-600 hover:animate-pulse">
      Export Portfolio
    </button>
    <button className="w-52 h-14 text-lg text-gray-600 translate-x-60 -translate-y-14 flex justify-center items-center flex-row gap-3 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="-4 0 32 24"
        className="fill-white bg-blue-700 rounded-full transition-colors duration-300 -hue-rotate-60">
        <path d="M19 9h-4V3H9v6H5l7 8zM4 19h16v2H4z"></path>
      </svg>
      Download Brochure
    </button>
  </div>
  <p className="text-gray-500 w-fit relative -top-5 left-24 text-sm  -translate-y-96 -mt-64  ">Trusted by the best --------------</p>
  <div className="w-fit h-3/5 flex flex-row gap-6 relative left-24 -translate-y-full -mt-64 ">
    <Image src="https://agency.demo.nextjstemplates.com/_next/static/media/lineicons.5463f950.svg" width="64" height="32" className="size-48" alt="lineicons"></Image>
    <Image src="https://agency.demo.nextjstemplates.com/_next/static/media/formbold.69a2ffb6.svg" width="64" height="32" className="size-48" alt=""></Image>
    <Image src="https://agency.demo.nextjstemplates.com/_next/static/media/uideck.7c3bffe9.svg" width="64" height="32" className="size-48" alt=""></Image>
  </div>
  <div className="w-fit h-fit flex flex-col justify-center items-start ml-24 -mt-24">
    <h2 className="font-normal text-3xl text-black">About Us</h2>
    <h3 className="text-blue-800 text-5xl font-bold font-sans ml-1">Better design,<br />better experience</h3>
    <p className="text-gray-600 mt-8 ml-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui ligula,<br /> malesuada vel convallis in, tincidunt ut mi Vestibulum sit amet.</p>
  </div>
  <div className="max-w-screen-2xl h-fit bg-blue-950 mt-10 ">
    <p className="pt-20 ml-32 text-lg pb-3">What We Do ?</p>
    <h4 className="ml-32 text-blue-500 text-5xl">We help to build clients their <br /> dream projects <br /><Link href="#" className="w-52 text-xl relative left-3/4 text-white underline  hover:text-blue-800 cursor-pointer " href=' '>EXPLORE SERVICES</Link></h4>
    <div className="max-w-screen h-fit mt-20 grid grid-cols-3 text-black ml-20 pb-32">

  <div className=" w-fit h-fit bg-white flex flex-col  transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer ">
    <img src="https://agency.demo.nextjstemplates.com/_next/image?url=%2Fimages%2Fservices%2Fservice-01.jpg&w=1920&q=75" className="size-full" alt="Web Developemnt"/>
    <h3 className="ml-10 text-lg font-cursive mt-10">Website Development</h3>
    <p className="text-gray-600 mt-5 ml-10">Lorem ipsum is simply dummy text of<br />the printing typesetting lorem ipsum been<br />dummy text.</p>
    <Link href="#" className=" w-fit ml-10 mt-10 pb-4 font-cursive text-xl transition-all duration-500 hover:text-violet-600 hover:underline">View details -></Link>
  </div>

  <div className=" w-fit h-fit bg-white flex flex-col transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
    <img src="https://agency.demo.nextjstemplates.com/_next/image?url=%2Fimages%2Fservices%2Fservice-02.jpg&w=1920&q=75" className="size-full" alt="Graphic design"/>
    <h4 className="ml-10 text-lg font-cursive mt-10">Graphic Design</h4>
    <p className=" text-gray-600 mt-5 ml-10">Lorem ipsum is simply dummy text of<br />the printing typesetting lorem ipsum been<br />dummy text.</p>
    <Link href="#" className=" w-fit ml-10 mt-10 pb-4 font-cursive text-xl transition-all duration-500 hover:text-violet-600 hover:underline">View details -></Link>
  </div>
  <div className=" w-fit h-fit bg-white flex flex-col  transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer ">
    <img src="https://agency.demo.nextjstemplates.com/_next/image?url=%2Fimages%2Fservices%2Fservice-03.jpg&w=1920&q=75" className="size-full"  alt="App development"/>
    <h5 className="ml-10 text-lg font-cursive mt-10">App Development</h5>
    <p className="text-gray-600 mt-5 ml-10">Lorem ipsum is simply dummy text of<br />the printing typesetting lorem ipsum been<br />dummy text.</p>
    <Link href="#" className=" w-fit ml-10 mt-10 pb-4 font-cursive text-xl transition-all duration-500 hover:text-violet-600 hover:underline">View details -></Link>
  </div>
</div>
</div>
  <div className="max-screen-2xl flex flex-col justify-center items-center pt-28">
    <p className="text-xl pb-5">Creative Portfolio</p>
    <h6 className="font-bold text-5xl pb-5">Recent Works</h6>
    <p className="text-center text-lg pb-10">There are many variations of passages of Lorem Ipsum available but<br />the majority have suffered alteration in some form</p>
    <div className="bg-white w-2/3 h-12 rounded-full flex flex-row justify-center items-center gap-3 px-3">
    <Link href="#" className="border-none w-1/4 h-10 text-black rounded-full bg-transparent flex justify-center items-center transition-color hover:bg-gradient-to-tl from-indigo-600 via-white to-indigo-600">All</Link>
    <Link href="#" className="border-none w-1/4 h-10 text-black rounded-full bg-transparent flex justify-center items-center transition-color hover:bg-gradient-to-tl from-indigo-600 via-white to-indigo-600">Web</Link>
    <Link href="#" className="border-none w-1/4 h-10 text-black rounded-full bg-transparent flex justify-center items-center transition-color hover:bg-gradient-to-tl from-indigo-600 via-white to-indigo-600">App</Link>
    <Link href="#" className="border-none w-1/4 h-10 text-black rounded-full bg-transparent flex justify-center items-center transition-color hover:bg-gradient-to-tl from-indigo-600 via-white to-indigo-600">Graphic</Link>
    <Link href="#" className="border-none w-1/4 h-10 text-black rounded-full bg-transparent flex justify-center items-center transition-color hover:bg-gradient-to-tl from-indigo-600 via-white to-indigo-600">Web Design</Link>
    </div>
  </div>
  <div className="max-w-screen-2xl h-fit bg-blue-950 mt-10 pb-44">
    <h6 className="text-center pt-16 text-5xl font-bold">Some of Our Happy Clients</h6>
    <p className='text-center text-gray-400 pt-5'>There are many variations of passages of Lorem Ipsum available but<br />the majority have suffered alteration in some form</p>
    <div className="max-w-screen-2xl h-fit pt-10 flex flex-row gap-20 justify-center items-center">
      <Link href="#" className=""><img src="https://agency.demo.nextjstemplates.com/_next/static/media/lineicons-2.36d02cde.svg" alt="" className="size-36 cursor-pointer h-fit grayscale hover:grayscale-0"/></Link>
      <Link href="#" className=""><img src="https://agency.demo.nextjstemplates.com/_next/static/media/formbold-2.8ffdccb3.svg" alt="" className="size-36 cursor-pointer h-fit grayscale hover:grayscale-0"/></Link>
      <Link href="#" className=""><img src="https://agency.demo.nextjstemplates.com/_next/static/media/tailadmin-2.ffc1bf85.svg" alt="" className="size-36 cursor-pointer h-fit grayscale hover:grayscale-0"/></Link>
      <Link href="#" className=""><img src="https://agency.demo.nextjstemplates.com/_next/static/media/uideck-2.6b8ba64f.svg" alt="" className="size-36 cursor-pointer h-fit grayscale hover:grayscale-0"/></Link>
      <Link href="#" className=""><img src="https://agency.demo.nextjstemplates.com/_next/static/media/graygrids-2.432f9e06.svg" alt="" className="size-36 cursor-pointer h-fit grayscale hover:grayscale-0"/></Link>
    </div>
  </div>
  <div className="w-3/4 h-fit bg-yellow-600 ml-48 -mt-24 pb-28 ">
  <h4 className="text-center pt-8 text-4xl font-bold">Subscribe our newsletter to receive<br />future updates</h4>
  <form target="/blank" className="w-1/3 flex justify-center items-center mt-10 h-12 text-white rounded-full border-2 border-white  ml-96">
  <input type="email" className="bg-yellow-600 border-transparent active:border-none focus:border-none h-10 w-72  px-2 rounded-l-full"/>
  <button className="rounded-r-full w-24 border-2 border-white h-10 flex items-center justify-center bg-white text-black hover:bg-gradient-to-r from-white via-yellow-400 to-white">Submit</button>
  </form>
  </div>

  </div>
  );
}
