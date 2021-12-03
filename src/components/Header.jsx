import React from 'react';

const Header = ({nombre, edad}) => {
    return (
        <div>
            <h1>Buenos días {nombre}</h1>
            <h3>Su edad actual es de {edad}</h3>                
            <h6>(header)</h6>
            <hr></hr>
        </div>
    );
};

export default Header;
