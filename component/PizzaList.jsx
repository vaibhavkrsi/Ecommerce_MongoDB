import React from 'react';
import styles from '../src/styles/PizzaList.module.css'; 
import PizzaCard from './PizzaCard';

const PizzaList = ({pizzaList}) => {
  return (
    <div className= {styles.container}> 
        <h1 className= {styles.title}>The Best Pizza In Town</h1>
        <p className= {styles.desc}> 
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis laborum,
             qui possimus laudantium rem soluta nulla praesentium amet recusandae quos voluptatem eius iure vero, 
             error numquam quidem tempora sit! Aliquid.
        </p>
        <div className= {styles.wrapper}>
          {pizzaList.map((pizza)=>(

            <PizzaCard key={pizza._id} pizza ={pizza}  /> 
          ))}
        </div>
    </div>
  )
}

export default PizzaList