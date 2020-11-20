import React from 'react';
import SearchBar from './SearchBar';
import estilo from '../Estilos/Home.module.css';
import fondo from '../Imagenes/fondo.jpg';

export default function Navbar({funcion}){

    return (
        <div>
            <div className={estilo.img}>
                <img src={fondo} style={{width: "100%", height: "100%"}}/>
            </div>
            <div className={estilo.divOscuro}>
                <div style={{zIndex: "10"}}>
                    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style={{zIndex: "10", borderBottom: " 1px solid white"}}>
                        <div class='row row-cols-3' style={{width:"100%"}}>
                            <div class='col-3' style={{display:"flex", alignItems:"center"}}>
                                <a class="navbar-brand" href="/">Inicio</a>
                                <div class="collapse navbar-collapse" id="navbarColor03">
                                    <ul class="navbar-nav mr-auto">
                                        <li class="nav-item active">
                                            <a class="nav-link" href="/products/catalogo">Catalogo
                                            <span class="sr-only">(current)</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>  
                            </div> 
                            <div class='col-6'>
                                <SearchBar funcion={funcion}/>
                            </div>
                        </div>
                    </nav>
                </div> 
            </div>
        </div>
    )
}