import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types"

const Rating=({value,text,color})=>{
    return (
        <Container className="rating">
            <span>
                <i style={{color}} className={value >= 1 ? "fa-solid fa-star" : value >= 0.5 ? "fa-regular fa-star-half-stroke" : "fa-regular fa-star"}></i>
            </span>
            <span>
                <i style={{color}} className={value >= 2 ? "fa-solid fa-star" : value >= 1.5 ? "fa-regular fa-star-half-stroke" : "fa-regular fa-star"}></i>
            </span>
            <span>
                <i style={{color}} className={value >= 3 ? "fa-solid fa-star" : value >= 2.5 ? "fa-regular fa-star-half-stroke" : "fa-regular fa-star"}></i>
            </span>
            <span>
                <i style={{color}} className={value >= 4 ? "fa-solid fa-star" : value >= 3.5 ? "fa-regular fa-star-half-stroke" : "fa-regular fa-star"}></i>
            </span>
            <span>
                <i style={{color}} className={value >= 5 ? "fa-solid fa-star" : value >= 4.5 ? "fa-regular fa-star-half-stroke" : "fa-regular fa-star"}></i>
            </span>
            <span>{text && text}</span>
        </Container>
    );
}

Rating.defaultProps={
    color:"#f8e825",
}

Rating.propTypes={
    value:PropTypes.number.isRequired,
    text:PropTypes.string.isRequired,
    color:PropTypes.string,
}

export default Rating

const Container=styled.div`
    /* border: 2px solid red; */
    width: 100%;
    span{
        &:nth-child(6){
            /* border: 2px solid red; */
            font-size: 12px;
        }
    }
`