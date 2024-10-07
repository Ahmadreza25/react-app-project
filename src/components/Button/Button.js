import React from "react";
import styled from "styled-components";



const Button = styled.button`
    display: flex;
    align-items: center;
    color:#000;
    width:${(props) => props.width};
    height:${(props) => props.hit};
    border:none;
    outline:none;
    background-color:#fff ;
    font-size:${(props => props.size)};
    font-weight:700;
    font-style:bold;
    margin:7px
`;

export default Button