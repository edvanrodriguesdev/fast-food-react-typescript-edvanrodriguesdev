import styled from "styled-components";


export const StyledInputSearch = styled.form`
width: 365px;
height: 60px;
border: solid 2px #E0E0E0;
border-radius: 8px;
background-color: #FFF;
align-items: center;
display: flex;
`
export const StyledInputSearchInput = styled.input`
width: 240px;
height: 40px;
border: transparent;
padding-left: 15px;
font-size: 16px;
font-weight: 400;
:focus {
outline: 0;
}
`

export const StyledInputSearchButton = styled.button`
width: 107px;
height: 40px;
background-color: #27AE60;
border: solid 2px #27AE60;
border-radius: 8px;
color: #ffff;
font-size: 14px;
font-weight: 500;
cursor: pointer;
`