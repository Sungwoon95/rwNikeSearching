import React from "react";
import "./Shoes.css";
import nike1 from "./img/nike1.png";
import nike2 from "./img/nike2.png";
import nike3 from "./img/nike3.png";
import nike4 from "./img/nike4.png";
import nike5 from "./img/nike5.png";
import nike6 from "./img/nike6.png";
import nike7 from "./img/nike7.png";
import nike8 from "./img/nike8.png";

const Shoes = ({imgAdd, brand, name, id}) => {
    
    return(
        <div className="product">
            <div className="productWrap">
                <img src={imgAdd}/>
                <div>
                    <span className="draw">{id}</span>
                    <h2 className="brand">{brand}</h2>
                    <p className="name">{name}</p>
                </div>
            </div>
        </div>
    );
}        

export default Shoes;