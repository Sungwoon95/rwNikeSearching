import React from 'react';
import Shoes from './Shoes';
import "./Shoes.css";

const ShoeList = ({ShoeInfo}) =>{
    const shoeComponent = ShoeInfo.map((user, i) => {
        return <Shoes id={ShoeInfo[i].id} imgAdd={ShoeInfo[i].imgAdd} brand={ShoeInfo[i].brand} name={ShoeInfo[i].name}/>
    })
    return(
        <div className="flexWrap">
            {shoeComponent}
        </div>
    );
}

export default ShoeList;