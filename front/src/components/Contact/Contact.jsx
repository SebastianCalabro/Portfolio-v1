import s from "./Contact.module.css"
import emailjs from "@emailjs/browser"
import Swal from 'sweetalert2'
import { FaArrowDown } from "react-icons/fa"

const Contact = () =>{
    // const sendEmail = (e)=>{
    //     e.preventDefault()
    //     emailjs.sendForm("service_gu1zyiq","template_foe24bk",e.target, "oIeXxu1_SwGzfkz4K")
    //     .then(res=>console.log(res))
    //     .catch(e=>console.log(e))
    // }
    const handleSubmit = (e)=>{
        e.preventDefault(e)
        const nameInput = document.getElementById("name")
        const mailInput = document.getElementById("mail")
        const textarea = document.getElementById("textarea")
        const nameVali = document.getElementById("name_validate")
        const mailVali = document.getElementById("mail_validate")
        const textareaVali = document.getElementById("textarea_validate")
        if(nameInput.value ===""){
            nameVali.textContent = "You must complete this field!"
        }else{
            nameVali.textContent = ""
        }
        if(mailInput.value===""){
            mailVali.textContent = "You must complete this field!"
        }else{
            mailVali.textContent = ""
        }
        if(textarea.value===""){
            textareaVali.textContent = "You must complete this field!" 
        }else{
            textareaVali.textContent = ""
        }
        if(nameInput.value ===""||mailInput.value===""||textarea.value===""){
            return
        }
        emailjs.sendForm("service_gu1zyiq","template_foe24bk",e.target, "oIeXxu1_SwGzfkz4K")

        Swal.fire({
            title: 'Congratulations!',
            text: 'The mail was sent successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
          nameInput.value = ""
          mailInput.value = ""
          textarea.value = ""
          
    }
    return(
        <div id={s.section} className="section">
            <div className={s.box}>
                <h1 className={s.contact_title}>CONTACT</h1>
                <form onSubmit={(e)=>handleSubmit(e)} className={s.form}>
                    <div className={s.name_and_email}>
                        <div className={s.name_container}>
                            <input id="name" name="user_name" placeholder="Name" className={s.input} type="text" />
                            <span id="name_validate" className={s.validate}></span>
                        </div>
                        <div className={s.email_container}>
                            <input id="mail" name="user_email" placeholder="your@email.com" className={s.input} type="text" />
                            <span id="mail_validate" className={s.validate}></span>
                        </div>
                    </div>
                    <div className={s.textarea_container}>
                        <textarea placeholder="Your message..." className={s.textarea} name="user_message" id="textarea" cols="30" rows="10"></textarea>
                        <span id="textarea_validate" className={s.validate}></span>
                    </div>
                    <button className={s.submit_button} type="submit">SEND</button>
                </form>
                <a /* onClick={()=>dispatch(changePage())} */ href="#Home">
                <FaArrowDown className={s.icon_arrow}/>
            </a>
            </div>
        </div>
    )
}
export default Contact