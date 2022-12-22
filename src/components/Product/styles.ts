import styled from "styled-components";


export const StyledProduct = styled.li`
width: 300px;
height: 346px;
border: solid 2px #E0E0E0;
border-radius: 5px;
overflow: hidden;
@media(max-width: 700px) {
 width: 300px;
 height: 346px;
}
`

export const StyledProductImg = styled.div`
width: 300px;
height: 150px;
display: flex;
justify-content: center;
align-items: flex-end;
overflow: hidden;
background-color: #F5F5F5;
@media(max-width: 700px) {
    display: flex;
}
`

export const StyledProductName = styled.p`
font-size: 18px;
font-weight: 700;
color: #333333;
padding-left: 21px;
padding-top: 28px;
text-align: left;
`

export const StyledProductCategory = styled.p`
font-size: 12px;
font-weight: 400;
color: #828282;
padding-left: 22px;
padding-top: 16px;
text-align: left;
`

export const StyledProductPrice = styled.p`
font-size: 14px;
font-weight: 600;
color: #27AE60;
padding-left: 22px;
padding-top: 18px;
text-align: left;
`

export const StyledProductButton = styled.button`
width: 106px;
height: 40px;
border: solid 2px #27AE60;
border-radius: 8px;
color: #FFFFFF;
font-size: 14px;
font-weight: 600;
background-color: #27AE60;
display: flex;
align-items: center;
justify-content: center;
margin-left: 20px;
margin-top: 18px;
cursor: pointer;
`