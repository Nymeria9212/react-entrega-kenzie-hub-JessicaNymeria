import styled from "styled-components";

export const DashboardStyle = styled.div`
background-color: var(--grey-4);
height: 100vh;
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
    justify-content: space-around;
}
main{
    height: 100vh;
    display: flex;
    flex-direction: column;
   align-items: center;
   
}
.div-center{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 4rem;
    width: 90%;
}
.div_btn-add-tech{
    display: flex;
    justify-content: space-between;
}


.logout{
    height: 2rem;
    width: 3.469rem;
    border: none;
    background-color: var(--grey-1);
    color: var(--grey-0);
    border-radius: var(--radius-1);
    font-family: var(--font-family);
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