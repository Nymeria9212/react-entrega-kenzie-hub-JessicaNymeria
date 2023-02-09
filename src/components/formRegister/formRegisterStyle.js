import styled from "styled-components";

export const RegisterStyle = styled.form`
display: flex;
flex-direction: column;
justify-content: space-around;
width: 90%;
height: 52rem;
padding-top: 2rem;
background-color:var(--grey-3);
border-radius: var(--radius-1);
margin-bottom: 3rem;
h1,p{
    text-align: center;
}
h1{
    font-size: var(--title-1-3);
    font-weight: var(--text-bold);
}
p{
    font-size: var(--text-regular);
}
label{
    width: 90%;
    align-self: center;
}
input, select{
    width: 90%;
    align-self: center;
    height: 3rem;
    border: none;
    border-radius: var(--radius-1);
    font-family: var(--font-family);
    
}

.btnRegister{
    background-color: var(--color-primary-negative);
    height: 3rem;
    width: 90%;
    color: var(--grey-1);
    align-self:center;
    border-radius: var(--radius-1);
    margin-bottom: 2rem;
    margin-top: 1rem;
    border: none;
    font-family: var(--font-family);
}
@media(min-width:700px){
    width: 23.063rem;
}
`