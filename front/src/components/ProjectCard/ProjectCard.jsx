import s from "./ProjectCard.module.css"
const ProjectCard = (img) =>{
    return(
        <div className={s.card}>
            <div className={s.card_inner}>
                <div className={s.card_front}>
                    <img className={s.img} src={img} alt={img} />
                </div>
                <div className={s.card_back}>
                    <h3>Hola</h3>
                </div>

            </div>

        </div>
    )
}
export default ProjectCard