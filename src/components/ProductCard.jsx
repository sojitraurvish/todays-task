import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const ProductCard = ({item}) => {

  return (
    <Card to={`/product/${item.id}`} >
        <MainImg>
            <img src={item.image} alt="" />
        </MainImg>

        <Discription>
            <div>{item.title.substring(0,17)}...</div>
            <Rating
                value={item.rating.rate} 
                text={`(${item.rating.count}) reviews`} 
                color="red"    
            />
            <div>&#8377;{item.price}</div>
        </Discription>
    
    </Card>
  )
}

export default ProductCard


const Card=styled(Link)`
  margin:10px;
  border: 1px solid black;
  max-width: 400px;
  height: 262px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;

    cursor:pointer;
    transition:all 1s ease 0s;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    border:2px solid rgba(249,249,249,0.1);
    border-radius:10px;
    /* border:1px solid red; */

    &:hover{
    border-color:black;
        transform:scale(1.05);
    }
`

const MainImg=styled.div`
  /* border: 2px solid red; */
  width:99%;
  height: 78%;
  height:78%;
width: 100%;
overflow:hidden;
position :relative ;
  img{
    /* border: 2px solid blue; */
    inset:0px;
    display:block;
    width:100%;
    height:100%;
    object-fit:contain;
    position:absolute;
  }
  `

const Discription=styled.div`
  height: 25%;
  /* border: 2px solid black; */
  overflow: hidden;
  text-overflow: ellipsis;
  width: 94%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
    font-size: 13px;
    
  div{
    /* margin-left: 10px; */
    /* margin-right: 10px; */
    width: 100%;
    height: 100%;
    &:nth-child(1){
      /* border:2px solid red; */
      /* overflow: hidden; */
    }
    &:nth-child(2){
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        span{
            /* border:2px solid red; */

            &:nth-child(1){
            /* width:10% */
            }
            &:nth-child(2){
            /* width:10% */
            
            }
        }
    }
    &:nth-child(3){
        font-weight: bold;
    }
  }
`
