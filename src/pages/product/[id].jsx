import React, { useState } from 'react'
import Image from 'next/legacy/image';
import styles from '../../styles/Product.module.css'

const Product = () => {
    //to change the prize according to the user requirement we will use state hook.
    const [size,setSize] = useState(0);
    const pizza = {
        id: 1,
        img: "https://raw.githubusercontent.com/safak/youtube/next-pizza-ui/public/img/pizza.png",
        name: "CAMPAGNOLA",
        price: [19.9, 23.9, 27.9],
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.",
      };
  return (
    <div className= {styles.container }> 
    <div className={styles.left}>
        <div className= {styles.imgContainer}>
            <Image src= {pizza.img}   alt='' layout='fill' objectFit='contain' />
        </div>
    </div>
        <div className={styles.right}>
            <h1 className= {styles.title}>
                {pizza.name}
            </h1>
            <span className= {styles.price} >${pizza.price[size]}</span>
            <p className= {styles.desc}> {pizza.desc} </p>
            <h3 className={styles.choose}>Choose the size</h3>
            <div className= {styles.sizes}>
                <div className= {styles.size} onClick={()=>setSize(0)}> 
                    <Image src= 'https://raw.githubusercontent.com/safak/youtube/next-pizza-ui/public/img/size.png'  layout='fill' alt=''/>
                    <span className= {styles.number}>Small</span>
                </div>
                <div className= {styles.size} onClick={()=>setSize(1)}> 
                    <Image src= 'https://raw.githubusercontent.com/safak/youtube/next-pizza-ui/public/img/size.png'  layout='fill' alt=''/>
                    <span className= {styles.number}>Medium</span>
                </div>
                <div className= {styles.size} onClick={()=>setSize(2)}> 
                    <Image src= 'https://raw.githubusercontent.com/safak/youtube/next-pizza-ui/public/img/size.png'  layout='fill' alt=''/>
                    <span className= {styles.number}>Large</span>
                </div>
            </div>
            <h3 className= {styles.choose}>Choose ingredient </h3>
            <div className= {styles.ingredients}> 
            <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="cheese"
              name="cheese"
            />
            
            <label htmlFor="cheese">Double Ingredient</label> 
            </div>   
            <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="cheese"
              name="cheese"
            />
            
            <label htmlFor="cheese">Extra Cheese</label> 
            </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="spicy"
              name="spicy"
            />
            <label htmlFor="spicy">Spicy Sauce</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="garlic"
              name="garlic"
            />
            <label htmlFor="garlic">Garlic Sauce</label>
            </div> 
          </div> 
          <div className= {styles.add}>
            <input type="number" defaultValue={1} className= {styles.quantity} />
            <button className= {styles.button}>Add to Cart</button>
          </div>
        </div>
    </div>
  )
}

export default Product