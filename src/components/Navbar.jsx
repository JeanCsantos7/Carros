
import styleNavBar from "../styles/Navbar.module.css"
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { LuInstagram } from "react-icons/lu";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";





export default function Navbar(){

    return(
        <>
        <div className={styleNavBar.ContainerTopo}>
         <span className={styleNavBar.Container}>
         <FaWhatsapp className={styleNavBar.iconWhats}/>
         <h1 className={styleNavBar.Telefone}>11964699139</h1>
         <MdOutlineEmail className={styleNavBar.iconEmail}/>
         <h1 className={styleNavBar.Email}>GoesVeiculos7@gmail.com</h1>

         


         </span>
         
         <span className={styleNavBar.redesSociais}>
         <LuInstagram  className={styleNavBar.iconInstagram}/>
         <FaFacebookSquare className={styleNavBar.iconFace}/>
         </span>
       
        
      

        </div>

        <div className={styleNavBar.SubContainerTopo}>
        <div>
        <h1 className={styleNavBar.TituloLogotipo}>Goes</h1>
        <h2 className={styleNavBar.subTituloContainer}>Venda de Veículos</h2>
        </div>
       
        <nav>
            <Link className={styleNavBar.Links}>Estoque</Link>
            <Link className={styleNavBar.Links}>Vender</Link>
            <Link className={styleNavBar.Links}>Sobre</Link>
        </nav>
        </div>
        </>
    )
}