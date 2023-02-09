import styled from "styled-components";

export const PageRegister = styled.div`

background-color: var(--grey-4);

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: var(--grey-0);
header{
    width: 90%;
    min-height: 8rem;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
}
header>div{
    width: 90%;
    display: flex;
    justify-content: space-around;

}
.backPage{
    box-sizing: border-box;
    background-color: var(--grey-2);
    color: var(--grey-0);
    height: 2.5rem;
    width:3.75rem;
    text-align: center;
    padding-top: 0.60rem;
    border-radius: var(--radius-1);
    text-decoration: none;
}
@media(min-width:700px){
    header>div{
        width: 23.063rem;
    }
}
`