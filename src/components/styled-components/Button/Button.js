import styled from "styled-components";



export const Button = styled.button`
    display: flex;
    align-items: center;
    color:${(props) => props.color};
    width:${(props) => props.width};
    height:${(props) => props.hit};
    border:none;
    outline:none;
    background-color:${(props) => props.bag};
    font-size:${(props => props.size)};
    font-weight:700;
    font-style:bold;
    margin:7px;
    margin-top:${(props => props.mtop)};
`;

export const ButtonItem = styled.button`
    width: 300px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #000;
    background-color: #ffffff;
    font-weight: 700;
    margin-left: -80px;
    transition: background-color 0.5s , color 0.5s ;
`

