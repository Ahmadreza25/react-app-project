import styled from "styled-components";



export const Div = styled.div`
width: 500px;
height:${(props) => props.height};
background-color: #ffffff;
box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
border-radius: 15px;
margin-bottom: ${(props) => props.marginbot};
`;


export const DivBackground = styled.div
`
width: 100%;
height: 600px;
display: flex;
align-items: center;
justify-content: space-around;
background-color: ${(props) => props.Background}
`;