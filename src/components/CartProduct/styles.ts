import styled from "styled-components";


export const StyledCartProduct = styled.li`
width: 363px;
height: 80px;
display: flex;
padding-left: 10px;
padding-top: 20px;
justify-content: space-between;
`

export const StyledCartProductImg = styled.div`
width: 80px;
height: 80px;
background-color: #E0E0E0;
border-radius: 5px;
border: solid 1px #E0E0E0;
img {
    width: 70px;
    height: 70px;
}
`

export const StyledCartProductDivMid = styled.div`
width: 170px;
height: 80px;
text-align: left;
display: flex;
flex-direction: column;
gap: 10px;
margin-right: 15px;
`

export const StyledCartProductName = styled.p`
font-size: 14px;
text-align: left;
font-weight: 700;
padding-top: 10px;
`

export const StyledCartProductCategory = styled.p`
font-size: 12px;
text-align: left;
font-weight: 400;
`

export const StyledCartProductButton = styled.button`
font-size: 12px;
font-weight: 500;
border: transparent;
width: fit-content;
height: fit-content;
margin-top: 12px;
cursor: pointer;
color: #BDBDBD;
background-color: #F5F5F5;
margin-right: 20px;
`