import styled from "styled-components";


export const StyledLogin = styled.div`
width: 100vw;
height: 100vh;
background-color: #FFFFFF;
display: flex;
margin-top: 98px;
@media(max-width: 700px) {
   width: 320px;
   height: 568px;
}
`

export const StyledLoginContainer = styled.div`
width: 939px;
height: 461px;
margin: 0 auto;
display: flex;
`

export const StyledLoginForm = styled.form`
width: 500px;
height: 461px;
border: solid 2px #F5F5F5;
border-radius: 5px;
box-shadow: 0px 0px 30px -20px rgba(0, 0, 00 0.25);
position: relative;
padding-left: 24px;
padding-top: 26px;
`

export const StyledLoginTitle = styled.p`
font-size: 18px;
font-weight: 700;
color: #333333;
text-align: left;
margin-bottom: 22px;
`

export const StyledLoginLabelName = styled.label`
font-size: 12px;
font-weight: 400;
color: #999999;
position: absolute;
bottom: 380px;
left: 35px;
background-color: #FFFFFF;
padding: 0px 4px;
`

export const StyledLoginLabelPassword = styled.label`
font-size: 12px;
font-weight: 400;
color: #999999;
position: absolute;
bottom: 294px;
left: 35px;
background-color: #FFFFFF;
padding: 0px 4px;
`

export const StyledLoginInputName = styled.input`
width: 452px;
height: 60px;
border: solid 2px #333333;
border-radius: 8px;
margin-bottom: 25px;
padding-left: 15px;
`

export const StyledLoginInputPassword = styled.input`
width: 452px;
height: 60px;
border: solid 2px #333333;
border-radius: 8px;
margin-bottom: 19px;
padding-left: 15px;
`

export const StyledLoginButton = styled.button`
width: 450px;
height: 60px;
border: solid 1px #219653;
background-color: #219653;
border-radius: 8px;
color: #FFFFFF;
font-size: 16px;
font-weight: 600;
cursor: pointer;
`

export const StyledLoginMessage = styled.p`
font-size: 14px;
font-weight: 400;
text-align: center;
width: 415px;
color: #999999;
padding-left: 100px;
margin-top: 19px;
`

export const StyledLoginRegister = styled.button`
width: 452px;
height: 60px;
border: transparent;
color: #999999;
font-size: 16px;
font-weight: 600;
border-radius: 8px;
margin-top: 10px;
background-color: #f5f5f5;
cursor: pointer;
`

export const StyledLoginSide = styled.div`
width: 439px;
height: 461px;
`

export const StyledLoginSideLogo = styled.div`
width: 243.43px;
height: 56.4px;
margin-top: 84px;
margin-left: 53.09px;
margin-bottom: 21.95px;
`

export const StyledLoginSideInfo = styled.div`
width: 377px;
height: 95px;
border: solid 1px #E0E0E0;
box-shadow: 0px 4px 40px -20px rgba(0, 0, 00 0.25);
border: 1px solid #E0E0E0;
border-radius: 5px;
display: flex;
margin-left: 53.09px;
`

export const StyledLoginSideInfoSpan = styled.div`
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

export const StyledLoginSideInfoMessage = styled.p`
font-size: 14px;
font-weight: 400;
width: 260px;
margin-left: 19px;
line-height: 22px;
color: #828282;
padding-top: 13px;
`

export const StyledLoginSideInfoMessageSpan = styled.span`
font-size: 14px;
font-weight: 600;
`