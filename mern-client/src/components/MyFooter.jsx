

import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

import { RiAdminFill } from "react-icons/ri";

const MyFooter = () => {
  return (
   
<Footer>
  <div className="w-full mt-2">
    <div className="w-full mt-14 bg-gray-700 px-4 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col sm:flex-row sm:items-center ">
       
        <p style={{ color: 'rgb(125 136 155 / var(--tw-bg-opacity))' }}>
        © {new Date().getFullYear()} Shri Krishna International School | <a href="#">Privacy Policy</a>
      </p >
      </div>
      <div className="mt-4 sm:mt-0 flex space-x-6">
        <Footer.Icon href="#" icon={BsFacebook} />
        <Footer.Icon href="#" icon={BsInstagram} />
        <Footer.Icon href="/admin/dashboard" icon={RiAdminFill} />
      </div>
    </div>
  </div>
</Footer>



  )
}

export default MyFooter
