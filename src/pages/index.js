import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css' 
import Featured from '../../component/Featured'
import PizzaList from '../../component/PizzaList';
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

export default function Home({pizzaList}) {
  return (
    <div className= {styles.container} > 
      <Head>  
        <title>Pizza Restraunt in Network</title>
        <meta name="description" content="Best Pizza Shop in town" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>  
      <PizzaList pizzaList={pizzaList} />   
     </div>
  );
}

export const getServerSideProps = async () => {
  const res  = await axios.get("http://localhost:3000/api/products");
  return {
      props:{
          pizzaList: res.data,
      },
  } ; 
};
