import React from 'react'
import styles from '../src/styles/PizzaCard.module.css'


const PizzaCard = () => {
  return (
    <div className= {styles.container}>  
        <img src='https://raw.githubusercontent.com/safak/youtube/next-pizza-ui/public/img/pizza.png' height= "300" width= "300" /> 
        <h1 className= {styles.title}>Firori di zucca</h1>
        <span className= {styles.price}>$19.80</span>
        <p className= {styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </p>
    </div>
  )
}

export default PizzaCard