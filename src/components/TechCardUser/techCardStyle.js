import styled from "styled-components";

export const CardTech = styled.li`
color: var(--grey-0);
width: 80%;
background-color: var(--grey-4);
height: 50px;
display: flex;
justify-content: space-between;
align-items: center;
border-radius:var(--radius-1);
padding: 0 1rem;
cursor: pointer;

:hover{
    background-color: var(--grey-2);
}
h4{
    font-weight: var(--text-bold);
}
span{
    color: var(--grey-1);
}
@media(min-width:700px){
    width: 90%;
}
`