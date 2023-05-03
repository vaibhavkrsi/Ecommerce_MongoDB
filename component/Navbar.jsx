import React from 'react' ;
import styles from '../src/styles/Navbar.module.css';
import Image from 'next/image';

const Navbar = () => {
  
  return ( 
    <div className= {styles.container}>
      <div className= {styles.item}>
        <div className= {styles.callButton}>  
          <Image src='https://raw.githubusercontent.com/safak/youtube/next-pizza-ui/public/img/telephone.png' width= {32} height= {32} alt=""/>
        </div> 
        <div className= {styles.texts}>
          <div className= {styles.text}>Order Now</div>
          <div className= {styles.text}>+918917498178</div>
        </div>
      </div>
          <div className= {styles.item}> 
            <ul className= {styles.list}>
              <li className= {styles.listItem}>Homepage</li>
              <li className= {styles.listItem}>Products</li>
              <li className= {styles.listItem}>Menu</li>
              <Image src='https://raw.githubusercontent.com/safak/youtube/next-pizza-ui/public/img/logo.png'alt="" width= {160} height= {69}  />
              <li className= {styles.listItem}>Events</li>
              <li className= {styles.listItem}>Contact</li>
            </ul>
          </div>
          <div className= {styles.item}> 
            <div className= {styles.cart}> 
              <Image src='https://raw.githubusercontent.com/safak/youtube/next-pizza-ui/public/img/cart.png' width= {30} height= {30} alt="" />
              <div className= {styles.counter}>2</div>
            </div>
          </div>
    </div>
  );
};

export default Navbar