import React from 'react';

function Nombre (props){
    return(
        <li className="Nombre">
            {props.name}
            {props.mail}
        </li>
    )
}

export default Nombre;