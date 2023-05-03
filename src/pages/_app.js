import '@/styles/globals.css';
import Layout from '../../component/Layout';

//- Now navbar and footer will be in every page 
function App({ Component, pageProps }) {
  return ( 
  <Layout>
    <Component {...pageProps} />
  </Layout> 
  );
}
export default App;