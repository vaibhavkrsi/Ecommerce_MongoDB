import React from 'react'
import styles from '../../styles/Order.module.css'
import Image from 'next/image';


const Order = () => {
    const status = 0;
    const statusClass = (index)=>{
        if(index-status < 1) return styles.done
        if(index-status == 1 ) return styles.inProgress
        if(index-status > 1) return styles.undone

    };
     
return(

    <div>
        <div className={styles.container}> 
        <div className=  {styles.left}>
            <div className=  {styles.row}>
            <table className={styles.table}>
                <tbody>
                    <tr className={styles.trTitle}>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Address</th> 
                        <th>Total</th>
                    </tr>
                    <tr> 
                        <td>
                            <span className={styles.id}>
                                178326918
                            </span>
                        </td>
                        <td className={styles.name}>
                            John Doe
                        </td>
                        <td>
                            <span className={styles.address}>Delhi, India , west delhi hari nagar</span>
                        </td> 
                        <td>
                            <span className={styles.total}>$39.80</span>
                        </td>
                    </tr> 
                </tbody>
            </table>
            </div>
            <div className=  {styles.row}>
                <div className= {statusClass(0)}>
                         <Image src= "https://raw.githubusercontent.com/safak/youtube/next-pizza-ui/public/img/paid.png" width={30} height={30} alt='' />
                         <span>Payment</span>
                         <div className= {styles.checkIcon}>
                         <Image className= {styles.checkedIcon} src= "https://raw.githubusercontent.com/safak/youtube/next-pizza-ui/public/img/checked.png" width={20} height={20} alt='' />
                         </div>
                </div>   
                <div className= {statusClass(1)}>
                         <Image src= "https://raw.githubusercontent.com/safak/youtube/next-pizza-ui/public/img/bake.png" width={30} height={30} alt='' />
                         <span>Preparing</span>
                         <div className= {styles.checkIcon}>
                         <Image className= {styles.checkedIcon} src= "https://raw.githubusercontent.com/safak/youtube/next-pizza-ui/public/img/checked.png" width={20} height={20} alt='' />
                         </div>
                </div>  
                <div className= {statusClass(2)}>
                         <Image src= "https://raw.githubusercontent.com/safak/youtube/next-pizza-ui/public/img/bike.png" width={30} height={30} alt='' />
                         <span>On the way</span>
                         <div className= {styles.checkIcon}>
                         <Image className= {styles.checkedIcon} src= "https://raw.githubusercontent.com/safak/youtube/next-pizza-ui/public/img/checked.png" width={20} height={20} alt='' />
                         </div>
                </div>  
                <div className= {statusClass(3)}>
                         <Image src= "https://raw.githubusercontent.com/safak/youtube/next-pizza-ui/public/img/delivered.png" width={30} height={30} alt='' />
                         <span>Devlivered</span>
                         <div className= {styles.checkIcon}>
                         <Image  className= {styles.checkedIcon} src= "https://raw.githubusercontent.com/safak/youtube/next-pizza-ui/public/img/checked.png" width={20} height={20} alt='' />
                         </div>
                </div>   
            </div> 
        </div>
        <div className={styles.right}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Cart Total</h2>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Discount:</b>$0.00
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Total:</b>$79.60
                </div>
                <button disabled className={styles.button}>Paid</button>
            </div>
        </div>
        </div>
    </div>
     
);
};

export default Order
