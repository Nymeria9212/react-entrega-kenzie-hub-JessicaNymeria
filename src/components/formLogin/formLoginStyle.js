import styled from "styled-components";

export const FormStyle = styled.form`
display: flex;
flex-direction: column;
height:24.75rem;
width: 90%;
border: solid 2px var(--grey-3);
background-color: var(--grey-3);
border-radius: var(--radius-2);
justify-content: space-evenly;
margin-bottom: 3rem;
label{
    padding: 0 1rem;
}
h1{
    text-align: center;
}
.form-inputs{
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 90%;
    justify-content: space-evenly;
input{
    width: 90%;
    align-self: center;
    height: 3rem;
    border-radius: var(--radius-1);
    background-color: var(--grey-2);
    border: none;
    
}
.input-password{
    width: 90%;
    align-self: center;
    background-color: var(--grey-2);
    border-radius: var(--radius-1);
}
.input-password>input{
    width: 85%;
}
.link{
    text-align: center;
    text-decoration: none;
    color: var(--grey-0);
    font-size: var(--text-regular);
}
.link-register{
    height: 3rem;
    background-color: var(--grey-1);
    width: 90%;
    color: var(--grey-0);
    text-align: center;
    align-self: center;
    border-radius: var(--radius-1);
    text-decoration: none;
    padding-top: 1rem;
    box-sizing: border-box;
    
}
button{
    width: 90%;
    height: 3rem;
    align-self: center;
    background-color: var(--color-primary);
    border-radius: var(--radius-1);
    border: none;
    color: var(--grey-0);
    font-size: var(--title-1-3);
    font-weight: var(--text-bold);
    
}
.input-password>button{
    width: 10%;
    background-color: var(--grey-2);
    border: none;
   color:var(--grey-1);
}

}

@media(min-width:700px){
    width:23.063rem;
    height: 31.375rem;
}

`

