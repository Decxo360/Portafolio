import { useRef, useState } from "react";
import emailjs from "@emailjs/browser"

const inputStyle = "w-[98%] h-10 pl-3 text-black rounded-lg focus:border-double bg-slate-100"
const labelStyle="mb-5 text-xl"
const spinner = "animate-spin rounded-full h-10 w-10 border-t-4 border-white"


export const ContactUs = () => {
  const [sending, setSending] = useState(false)
  const [message, setMessage] = useState("Enviar correo")
  const form = useRef();
  const sendEmail = (e) => {
    setSending(true)
    e.preventDefault();
    emailjs.sendForm('service_rkkpsrv', 'template_xopaore', form.current, 'qMuO7MSIvRhqblta7')
      .then((result) => {
          if (result.text == "OK") {
            setMessage("Tu correo ha sido enviado")
            setSending(false)
            setTimeout(() => {
              setMessage("Enviar correo")
            }, 5000);
          }
      }, (error) => {
          console.log(error.text);
      });


  };
  return (
    <form className="flex flex-col justify-center items-center content-center text-center w-[60%]" ref={form} onSubmit={sendEmail}>
      <div className="flex flex-row justify-around w-[100%] mb-5 mt-20">
        <div className="flex flex-col w-[48%]">
        <label className={labelStyle}>Ingrese su nombre</label>
        <input className={inputStyle} type="text" name="user_name" placeholder="Ejemplo: Diego Lundstedt"/>
        </div>
        <div className="flex flex-col w-[48%]">
        <label className={labelStyle}> Ingrese el correo de contacto</label>
        <input className={inputStyle} type="email" name="user_email" placeholder="Ejemplo: diego.lundstedt@gmail.com"/>
        </div>
      </div>
      <div className="w-[100%] mt-10 flex flex-col">
        <label className={labelStyle}> Ingrese por lo que desea contactarse conmigo</label>
        <textarea className="pl-3 w-[98%] pt-5 rounded-lg h-[300px] bg-slate-100 "  name="message" placeholder="Ingrese el mensaje que desea enviar" />
      </div>
      <button className="mt-10 mb-10 bg-indigo-800 text-white flex justify-center items-center rounded-md h-[50px] w-[50%] hover:scale-125 ease-in-out duration-100 delay-150 hover:bg-indigo-500" type="submit">
        {
          sending == true ? <div className={spinner}/> : message
        }
      </button>
    </form>
  )
}

