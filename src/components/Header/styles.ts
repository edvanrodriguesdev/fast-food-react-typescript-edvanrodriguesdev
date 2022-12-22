import styled from "styled-components";


export const StyledHeader = styled.div`
background-color: #F5F5F5;
width: 100vw;
height: 80px;
@media(max-width: 700px) {
   width:141px;
   height: 139px;
}
`
export const StyledHeaderContainer = styled.div`
width: 1375px;
height: 80px;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;
@media(max-width: 700px) {
   display: flex;
   flex-direction: column;
   width: 414px;
   height: 139px;
   justify-content: center;
}
`
export const StyledHeaderDiv = styled.div`
width: 482px;
height: 60px;
display: flex;
gap: 23px;
`

export const StyledHeaderIcons = styled.div`
width: 94px;
height: 60px;
display: flex;
gap: 38px;
align-items: center;
margin-right: 8px;
position: relative;
img{
   max-width: 28px;
   max-height: 32px;
}
`

export const StyledHeaderIconCount = styled.div`
width: 20px;
height: 24px;
border: 1px solid #27AE60;
background-color: #27AE60;
color: #FFFFFF;
font-size: 14px;
font-weight: 700;
position: absolute;
border-radius: 7px;
left: 16px;
bottom: 34px;
display: flex;
align-items: center;
justify-content: center;
`

export const StyledHeaderLogout = styled.button`
width: 28px;
height: 32px;
border: transparent;
background-color: transparent;
cursor: pointer;
`