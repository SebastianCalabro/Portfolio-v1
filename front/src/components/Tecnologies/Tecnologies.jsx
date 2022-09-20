import s from "./Tecnologies.module.css"
import { FaArrowDown } from "react-icons/fa"

const Tecnologies = () => {
    // const techContainer = document.querySelector(".tech_container")
    // const mostX = 10;
    // const mostY = 10;

    // techContainer.addEventListener("mousemove", (e)=>{
    //     techContainer.getElementsByClassName.transition = "none";
    //     const x = e.offsetX;
    //     const y = e.offsetY;
    //     const { width, height } = techContainer.getBoundingClientRect()
    //     const halfWidth = width / 2;
    //     const halfHeight = height / 2;
    //     const rotationY = ((x - halfWidth) / halfWidth) * mostX;
    //     const rotationX = ((y - halfHeight) / halfHeight) * mostY;
    //     techContainer.style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`
    // })

    return(
        <div id={s.section} className="section">
            <div className={s.box}>
                <div className={s.tech_container}>

                </div>
            </div>
            <a href="#thirdPage">
            <FaArrowDown className={s.icon_arrow}/>
            </a>
        </div>
    )
}
export default Tecnologies