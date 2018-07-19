import React from 'react';
import '../../css/nombres.styl';

function Nombre (props){
    return(
        <li className="Nombre">
            {props.name}
            {props.mail}
        </li>
    )
}

export default Nombre;