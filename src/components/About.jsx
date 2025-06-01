import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";

const About = () => {
  const {contact} = useContext(AppContext);
  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [message,setMessage] = useState();

  const submitContactForm = (e) =>{
    e.preventDefault();
    contact(name,email,message);
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <>
      <div className="container bg-[#000] h-full  max-w-screen-2xl flex flex-col  px-3 md:px-10 mx-auto pt-16  mt-10 md:mt-16 pb-10">
        <h1 className="uppercase text-2xl font-thin   flex-wrap lg:whitespace-nowrap">
          Welcome To{" "}
          <span className="text-[#ce8080] font-mono text-[34px] border-b border-[#ce8080]">
            Luxify
          </span>{" "}
          your ultimate destination for trendy and premium footwear!{" "}
        </h1>
        <div className="contact mt-20  flex flex-col gap-10">
          <h2 className="uppercase text-lg text-center">
            <span className="text-[#ce8080] border-b border-[#ce8080] font-mono text-[34px]">
              Contact
            </span>{" "}
            Us
          </h2>
          <div className="flex lg:flex-row flex-col-reverse gap-5 justify-center">
            <div className="map border w-full lg:w-1/2 p-4 rounded-lg ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.1429370120213!2d72.36457357512064!3d23.91999207855507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395cf4fc7300f9ed%3A0xe08464602d5a339a!2z4Kqy4Kq_4Kqs4Kqw4KuN4Kqf4KuAIOCqq-CrguCqn-CqteCrh-CqsCBMaWJlcnR5IEZvb3R3ZWFy!5e0!3m2!1sen!2sin!4v1719465625300!5m2!1sen!2sin"
                
                height={450}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className=" w-full lg:w-[600px]"
              />
            </div>
            <div className="contactForm w-full lg:w-1/2 border p-4 rounded-lg flex gap-4 justify-center  flex-col ">
                <h2 className="text-center text-3xl text-[#ce8080]">get in touch</h2>
                <form onSubmit={submitContactForm} className="flex flex-col gap-4 justify-center items-center">
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="your name" className="w-[70%] p-2 rounded-sm text-xl" name="" id="" required />
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  className="w-[70%] p-2 rounded-sm text-xl" placeholder="your email" name="" id="" required />
                    <textarea name="" rows={4} value={message} onChange={(e)=>setMessage(e.target.value)}  cols={10} id="" className="w-[70%] p-2 rounded-sm text-xl resize-none" placeholder="your message" required ></textarea>
                    <button type="submit" className="bg-[#ce8080] text-lg px-7 py-2 rounded-lg text-black font-semibold">send message</button>

                </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
