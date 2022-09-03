import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Item from "../Item/Item";
import products from "../products/ItemProducts";
import "./ItemContainer.css"

const ItemLIstContainer = () =>  {
    const [Products, Setproducts] = useState([])

    useEffect(() => {
        const getData = new Promise(resolve => {
          setTimeout(() => {
            resolve(products);
          }, 2000);      
        });
        getData.then(res => Setproducts(res));
      }, [])

    return(
        <div className="ItemContainer">
            {Products.map((product) => { 
                return(
                    <Item key={product.id} product={product}/>
                )
            })}
        </div>
    )
}

export default ItemLIstContainer