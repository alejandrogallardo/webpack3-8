import React, {Component} from 'react';
import Nombre from './nombre.js';

class Nombres extends Component {
    render(){
        return(
            <ul className="Nombres">
                {this.props.data.nombres.map((nombresData)=>{
                    return <Nombre{...nombresData} />
                })
                }
            </ul>    
        )
    }
}

export default Nombres;