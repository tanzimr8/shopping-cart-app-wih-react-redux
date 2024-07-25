import React, { useEffect, useState } from 'react'
import Product from '../components/Product'
const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading,setLoading] = useState([]);
  const fetchProcuctData = async ()=>{
    try{
      setLoading(true);
      const resp = await fetch('https://fakestoreapi.com/products');
      const data = await resp.json();
      if(data && data.length){
        setProducts(data);
        setLoading(false);
        console.log(products);
      }  
    }
    catch(error){
      console.log(error);
    }
    
  }
  useEffect(()=>{
    fetchProcuctData();
  },[])
  return (
    <div className='max-auto py-12 px-24 flex flex-wrap gap-12 items-center justify-center'>
      {products && products.length ? (products.map((product)=>{
        return <Product key={product.id} product={product}/>
      })) : null}
      
    </div>
  )
}

export default Home