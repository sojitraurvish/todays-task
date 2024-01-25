import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import axios from "axios"
import ProductCard from '../components/ProductCard';

const Products = () => {

  const [products,setProducts]=useState(()=>[]);

  useEffect(()=>{
    // console.log("fello");
    async function getData(){
      let {data}=await axios.get("/products")

      setProducts((pre)=>{
        return data
      })
      console.log(data);

    }
    getData()
  },[])

  return (
    <Container>
      {
        products.map((item)=>(
          <ProductCard key={item.id} item={item}/>
        ))
      }
      
    
      
    </Container>
  )
}

export default Products

const Container=styled.div`
  /* border :1px solid red; */
  max-width:100%;
  max-height:100%;
  /* FR(fr) means hole space give 1fr to first and so on*/
  display:grid;
    grid-gap: 1rem;
    
    grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
    justify-content: flex-start;
    align-items: flex-start;

      /* For Mobile devices: 320px-480px */
  @media only screen and (min-width:320px) and (max-width:1200px) {
    grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
  }
`

