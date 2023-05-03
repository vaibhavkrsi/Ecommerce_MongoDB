import styles from '../styles/Cart.module.css';
import Image from 'next/legacy/image'; 
import React from 'react'


const Cart = () => (
    <div className={styles.container}>
        <div className={styles.left}>
            <table className={styles.table}>
                <tbody>
                    <tr className={styles.trTitle}>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Extra</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.imgContainer}>
                                <Image src='https://raw.githubusercontent.com/safak/youtube/next-pizza-ui/public/img/pizza.png' layout='fill' objectFit='cover' alt='' />
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>
                                Coralzo
                            </span>
                        </td>
                        <td className={styles.extras}>
                            Double ingredient spicy sauce
                        </td>
                        <td>
                            <span className={styles.price}>$19.90</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>$39.80</span>
                        </td>
                    </tr> 
                    <tr>
                        <td>
                            <div className={styles.imgContainer}>
                                <Image src='https://raw.githubusercontent.com/safak/youtube/next-pizza-ui/public/img/pizza.png' layout='fill' objectFit='cover' alt='' />
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>
                                Coralzo
                            </span>
                        </td>
                        <td className={styles.extras}>
                            Double ingredient spicy sauce
                        </td>
                        <td>
                            <span className={styles.price}>$19.90</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>$39.80</span>
                        </td>
                    </tr>
                </tbody>
            </table>
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
                <button className={styles.button}>Checkout Now</button>
            </div>
        </div>
    </div>
)

export default Cart