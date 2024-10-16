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

