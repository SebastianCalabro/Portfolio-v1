import s from "./Contact.module.css"
const Contact = () =>{
    return(
        <div id={s.section} className="section">
            <div className={s.box}>

                <form>
                    <input type="text" />
                    <input type="text" />
                    <textarea name="message" id="" cols="30" rows="10"></textarea>
                </form>
            </div>
        </div>
    )
}
export default Contact