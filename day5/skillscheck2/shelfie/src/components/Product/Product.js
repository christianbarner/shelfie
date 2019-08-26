import React, { Component } from 'react'

export default function Product(props) {
    let { name, price, img } = props.item
    // img ? null : img = noImg
        return (
            <div>
                <div style={{backgroundImage: `url(${img})`}}> </div>
                <div> 
                    <p>{name}</p>
                    <p>{price}</p>

                </div>
            </div>
        )
}

