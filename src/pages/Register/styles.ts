import styled from "styled-components";


export const StyledRegister = styled.div`
width: 100vw;
height: 100vh;
background-color: #FFFFFF;
display: flex;
@media(max-width: 700px) {
   width: 320px;
   height: 568px;
}
`

export const StyledRegisterContainer = styled.div`
width: 1023px;
height: 527px;
margin: 0 auto;
display: flex;
margin-top: 91px;
`

export const StyledRegisterSide = styled.div`
width: 523px;
height: 527px;
margin-top: 107.64px;
`

export const StyledRegisterSideLogo = styled.div`
width: 243.43px;
height: 56.4px;
margin-bottom: 10px;
`

export const StyledRegisterSideInfo = styled.div`
width: 377px;
height: 95px;
border: solid 1px #E0E0E0;
box-shadow: 0px 4px 40px -20px rgba(0, 0, 00 0.25);
border: 1px solid #E0E0E0;
border-radius: 5px;
display: flex;

`

export const StyledRegisterSideInfoSpan = styled.div`
width: 60px;
height: 60px;
background-color: rgba(39, 174, 96, 0.1);
border: 1px solid rgba(39, 174, 96, 0.1);
border-radius: 5px;
margin-top: 17px;
margin-left: 14px;
display: flex;
align-items: center;
justify-content: center;
img{
   width: 24px;
   height: 24px;
}
`

export const StyledRegisterSideInfoMessage = styled.p`
font-size: 14px;
font-weight: 400;
width: 260px;
margin-left: 19px;
line-height: 22px;
color: #828282;
padding-top: 13px;
`

export const StyledRegisterSideInfoMessageSpan = styled.span`
font-size: 14px;
font-weight: 600;
`

export const StyledRegisterForm = styled.form`
width: 500px;
height: 527px;
border: solid 2px #F5F5F5;
border-radius: 5px;
box-shadow: 0px 0px 30px -20px rgba(0, 0, 00 0.25);
position: relative;
padding-left: 24px;
display: flex;
flex-direction: column;
`

export const StyledRegisterTop = styled.div`
display: flex;
justify-content: space-between;
`

export const StyledRegisterTitle = styled.p`
font-size: 18px;
font-weight: 700;
color: #333333;
margin-bottom: 30px;
padding-top: 33px;
`

export const StyledRegisterLoginButton = styled.button`
font-size: 14px;
font-weight: 500;
color: #828282;
margin-bottom: 22px;
background-color: #FFFFFF;
border: transparent;
cursor: pointer;
width: 170px;
height: 22px;
padding-right: 24px;
padding-top: 32px;
text-decoration: underline;
`

export const StyledRegisterLabelName = styled.label`
font-size: 12px;
font-weight: 400;
color: #999999;
position: absolute;
bottom: 432px;
left: 35px;
background-color: #FFFFFF;
padding: 0px 4px;
`

export const StyledRegisterLabelEmail = styled.label`
font-size: 12px;
font-weight: 400;
color: #999999;
position: absolute;
bottom: 346px;
left: 35px;
background-color: #FFFFFF;
padding: 0px 4px;
`

export const StyledRegisterInputName = styled.input`
width: 452px;
height: 60px;
border: solid 2px #168821;
border-radius: 8px;
margin-bottom: 25px;
padding-left: 15px;
`

export const StyledRegisterInputEmail = styled.input`
width: 452px;
height: 60px;
border: solid 2px #E60000;
border-radius: 8px;
margin-bottom: 36px;
padding-left: 15px;
`

export const StyledRegisterInputPassword = styled.input`
width: 452px;
height: 60px;
border: solid 2px #F5F5F5;
border-radius: 8px;
margin-bottom: 19px;
background-color: #F5F5F5;
padding-left: 15px;
`

export const StyledRegisterInputRptPassword = styled.input`
width: 452px;
height: 60px;
border: solid 2px #F5F5F5;
border-radius: 8px;
margin-bottom: 19px;
background-color: #F5F5F5;
padding-left: 15px;
`

export const StyledRegisterButton = styled.button`
width: 452px;
height: 60px;
border: transparent;
color: #999999;
font-size: 16px;
font-weight: 600;
border-radius: 8px;
margin-top: 0px;
background-color: #f5f5f5;
cursor: pointer;
`