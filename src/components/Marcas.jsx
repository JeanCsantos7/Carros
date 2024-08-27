

import styleMarcas from "../styles/Marcas.module.css"
import LogoChevrolet from "../assets/Chevrolet-Logo.png"
import LogoFiat from "../assets/fiat-logo.png" 
import LogoBMW from "../assets/Logotipo Bmw.webp"
import LogoHonda from "../assets/Honda- Logo.png"
import LogoVW from "../assets/Volkswagen_Logo_till_1995.svg.png"

export default function Marcas()
{

    return(
        <>
        <div className={styleMarcas.ContainerTitulo}>
        <h1 className={styleMarcas.Titulo}>Qual Veículo está buscando?</h1>
        <button className={styleMarcas.btnEstoque}>Ver Todo Estoque</button>
        </div>
        
        <div className={styleMarcas.Container}>
          <div className={styleMarcas.MarcaEspecifica}>
            <img className={styleMarcas.imagemMarca} src={LogoFiat} alt="" />
          </div>

          <div className={styleMarcas.MarcaEspecifica}>
            <img className={styleMarcas.imagemMarca} src={LogoChevrolet} alt="" />
          </div>

          <div className={styleMarcas.MarcaEspecifica}>
            <img className={styleMarcas.imagemMarca} src={LogoHonda} alt="" />
          </div>

          <div className={styleMarcas.MarcaEspecifica}>
            <img className={styleMarcas.imagemMarca} src={LogoVW} alt="" />
          </div>

          <div className={styleMarcas.MarcaEspecifica}>
            <img className={styleMarcas.imagemMarca} src={LogoBMW} alt="" />
          </div>
        </div>
        </>
    )
}