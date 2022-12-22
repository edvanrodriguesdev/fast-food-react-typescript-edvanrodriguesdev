import styled from "styled-components";


export const StyledProductsList = styled.ul`
width: 940px;
height: 704px;
display: flex;
flex-wrap: wrap;
margin-top: 32px;
gap: 12px 20px;
@media(max-width: 700px) {
   flex-wrap: wrap;
   display: flex;
   flex-direction: column;
   width: 414px;
   height: 346px;
}
`