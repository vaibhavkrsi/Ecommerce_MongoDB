import React from 'react'
import styles from '../src/styles/PizzaCard.module.css'; 
import Link from 'next/link';


const PizzaCard = ({pizza}) => {
  return ( 
    <div className= {styles.container}>  
    <Link href={`/product/${pizza._id}`} passHref>   
        <img src={pizza.img} height= "300" width= "300" /> 
    </Link>
        <h1 className= {styles.title}>{pizza.title}</h1>
        <span className= {styles.price}>${pizza.prices[0]}</span>
        <p className= {styles.desc}>
          {pizza.desc}
        </p>
    </div>
  )
}


export default PizzaCard