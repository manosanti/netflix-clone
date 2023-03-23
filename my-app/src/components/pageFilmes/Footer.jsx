import React from 'react';
import './Footer.css';
import { FaGithub } from "react-icons/fa";


function Footer(){
    return(
        <footer>
            <p>Developed by <span> <FaGithub /> <a href='https://github.com/manosanti'>Lucas Santiago.</a></span></p> <br/>
            Direitos de imagem para Netflix <br/>
            Dados pegos do site Themoviedb.org

            
        </footer>
    )
}

export default Footer