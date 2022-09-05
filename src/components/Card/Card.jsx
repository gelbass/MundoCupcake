import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

const Card = ({stock,initial}) => {
    const [countAdd, setCountAdd] = useState(initial);
    
    const Add = ()=>{
        let valor= countAdd;
        if(countAdd < stock){
            ++valor;
        };
        setCountAdd(valor);
    }

    const Delete = ()=>{
        let valor= countAdd;
        if(countAdd >=1){
            --valor;
        }
        setCountAdd(valor);
    }
    return (
        <div className="card">
            <img className="img img-producto" src="./CupCake_OREO.jpg" alt="producto" />
            <div className="detalle">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
            </div>
            <div className="compra">
                <input type="button" className="btn btn-verde" value="-" onClick={Delete}/>
                <input type="text" className="cantidadCompra" value={countAdd} disabled />
                <input type="button" className="btn btn-verde" value="+" onClick={Add}/>
                <ItemCount onAdd={countAdd} />
            </div>
        </div>
    );
}
export default Card;