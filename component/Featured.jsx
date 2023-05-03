import styles from '../src/styles/Featured.module.css'
import Image from 'next/legacy/image';
import React, { useState } from 'react'



const Featured = () => {
    const [index,setIndex] = useState(0)
    const images=[
        "https://images.unsplash.com/photo-1576458088443-04a19bb13da6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1528830984461-4d5c3cc1abf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
        "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
    ];  

    const handleArrow = (direction) => {
        if(direction=="l"){
            setIndex(index !==0 ? index-1 : 2)
        }
        if(direction=="r"){
            setIndex(index !==2 ? index+1 : 0)
        }
    }
    console.log(index)
  return (
    <div className= {styles.container}>  
        <div className= {styles.wrapper} style={{transform: `translateX(${-100*index}vw)`}} >  
                {images.map((img,i)=>( 
                    <div className= {styles.imgContainer}>  
                        <Image src= {img} layout="fill" key={i}   alt=''/>
                    </div>
                ))}  
        </div> 
                <img src='https://raw.githubusercontent.com/safak/youtube/next-pizza-ui/public/img/arrowl.png' className= {styles.arrow} onClick={()=>handleArrow("l")}   style={{left:0}} layout="fill"   alt=''/> 
                <img src='https://raw.githubusercontent.com/safak/youtube/next-pizza-ui/public/img/arrowr.png' className= {styles.arrow} onClick={()=>handleArrow("r")}   style={{right:0}} layout="fill"   alt=''/>
       
           
      
    </div>
  )
}

export default Featured