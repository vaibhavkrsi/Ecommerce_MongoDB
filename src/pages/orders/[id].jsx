import React from 'react'
import styles from '../../styles/Order.module.css'


const Order = () => (
    <div>
        <div className={styles.container}>
        <div className={styles.left}></div>
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
)

export default Order