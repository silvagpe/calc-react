import * as React from 'react';
import "./Display.css"
function Display(props:any) {
    return ( <div className='display'>{props.value}</div> );
}

export default Display;