import React from 'react';

const footerStyle = {
    backgroundColor: '#E3DFC8'
}



const Footer = ()=>{
    return(
        <nav style={footerStyle} className="navbar fixed-bottom text-secondary">
            <div className="container-fluid d-flex justify-content-center">
                <small text-muted>&copy;2021 June Hernandez </small>
            </div>
        </nav>
    )
}

export default Footer;