import styled from "styled-components";

export const DashboardStyle = styled.div`
background-color: var(--grey-4);

display: flex;
flex-direction: column;
color:var(--grey-0);


nav{
    display: flex;
    flex-direction: row;
    min-height: 6rem;
    align-items: center;
    justify-content: space-around;
    border-bottom: 2px solid var(--grey-3);

}
header{
   
    height: 7.375rem;
    border-bottom: 2px solid var(--grey-3);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    padding: 0 1rem;
    justify-content: space-around;
    gap: 1rem;
}
main{
   
    display: flex;
    flex-direction: column;
   align-items: center;
   height: 100vh;
   
}
.div-center{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 4rem;
    width: 90%;
    height:100%;
}
.div_btn-add-tech{
    display: flex;
    justify-content: space-between;
}
.addButton{
    background-color: var(--grey-3);
    color:var(--grey-0);
    font-weight: var(--title-bold);
    border: none;
    font-size: var(--title);
    height: 2rem;
    width: 2rem;
    border-radius: 4px;
}
.addButton:hover{
    background-color: var(--grey-2);
}

ul{
    background-color: var(--grey-3);
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;
    border-radius: var(--radius-1);
}
.logout{
    height: 2rem;
    width: 3.469rem;
    border: none;
    background-color: var(--grey-2);
    color: var(--grey-0);
    border-radius: var(--radius-1);
    font-family: var(--font-family);
}
.logout:hover{
    background-color: var(--grey-1);
}
@media(min-width:700px){
    h2{
        font-size: var(--title);
    }
    .div-center{
        width: 50%;
    }
}

`