import styled from "styled-components";

export const RegisterStyle = styled.form`
display: flex;
flex-direction: column;
justify-content: space-around;
width: 90%;
height: 50rem;
padding-top: 2rem;
background-color:var(--grey-3);
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
}

@media(min-width:700px){
    width: 23.125rem;
}
`