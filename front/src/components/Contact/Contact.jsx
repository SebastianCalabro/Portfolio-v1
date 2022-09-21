import s from "./Contact.module.css"
const Contact = () =>{
    return(
        <div id={s.section} className="section">
            <div className={s.box}>
                <h1 className={s.contact_title}>CONTACT</h1>
                <form className={s.form}>
                    <div className={s.name_and_email}>
                        <input placeholder="Name" className={s.input} type="text" />
                        <input placeholder="your@email.com" className={s.input} type="text" />
                    </div>
                    <textarea placeholder="Your message..." className={s.textarea} name="message" id="" cols="30" rows="10"></textarea>
                    <button className={s.submit_button} type="submit">SEND</button>
                </form>
            </div>
        </div>
    )
}
export default Contact