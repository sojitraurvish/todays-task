import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import Rating from '../components/Rating';

const Product = () => {

    const [product,setProducts]=useState({});
    const {id}=useParams(); 

    useEffect(()=>{
      // console.log("fello");
      async function getData(){
        let {data}=await axios.get(`https://fakestoreapi.com/products/${id}`)
  
        setProducts(data)
        // console.log(product);
      }
      getData()
    },[id])


  return (

    
    Object.keys(product).length === 0 && product.constructor === Object ? 
        <>
            <div>Loading...</div>
        </>
    :(
        <Container>
        <Content>
            {/* <div>{product.title}</div> */}
            <ProductImg>
                <img src={product.image} alt="" />
            </ProductImg>

            <Discription>
                <div>{product.title}</div>
                <div><span>Category:- </span>{product.category}</div>
                <Rating 
                    value={product.rating?.rate} 
                    text={`(${product.rating?.count}) reviews`} 
                    color="red"    
                    />
                <div>&#8377;{product.price}</div>
                <div><span>Description:- </span>{product.description}</div>
            </Discription>
        </Content>
    </Container>
    )
    
    
  )
}

export default Product


const Container=styled.div`
    width:100%;
    height: 100%;
    /* border: 1px solid black; */
`
const Content=styled.div`
/* border: 1px solid red; */
max-width:100%;
max-height: 40%;
display: flex;
margin:20px;
/* margin-top:100px; */

`
const ProductImg=styled.div`
width:100%;
height: 100%;
border: 1px solid #9d9b9b;
padding-top: 30px;
padding-bottom: 20px;
/* margin-top: 10px; */
img{
    margin: auto;
    display: block;
    width: 60%;
    height: 100%;
}

`
const Discription=styled.div`
height: 100%;
width:100%;
margin-top: 10px;
margin-left: 10px;
/* border: 1px solid red; */

div{
    padding: 10px;
    padding-top: 10px;
    padding-bottom: 4px;
    /* padding: 10px; */
    &:nth-child(1){
        font-size: 18px;
        font-weight: bold;
    }
    &:nth-child(2){
        span{
            font-weight: bold;
        }
    }
    &:nth-child(4){

            font-weight: bold;
        
    }
    &:nth-child(5){
        span{
            font-weight: bold;
        }
        
    }
}

`
