import styled from "styled-components";

export const ModalDeleteStyle = styled.div`
background-color: rgba(00,00,00,0.5);
    height: 100vh;
    position: fixed;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    .container{
        background-color: var(--grey-3);
        width: 23.063rem;
        max-width: 90%;
        height: 21.375rem;
        border-radius: var(--radius-1);
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        box-sizing: border-box;
        font-family: var(--font-family);
    }
    .header-close{
        display: flex;
        width: 100%;
        height: 50px;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        padding: 0 1rem;
        background-color: var(--grey-2);
        border-radius: var(--radius-1) var(--radius-1) 0 0;
    }
    .header-close>button{
        background-color: transparent;
        border: none;
        font-weight: var(--text-bold);
        color: var(--grey-1);
    }
    form{
        display: flex;
        flex-direction: column;
        height: 85%;
        justify-content: space-evenly;
        width: 90%;
    }
    select, input{
        height: 3rem;
        border-radius: var(--radius-1);
        background-color: var(--grey-2);
        border: 1px solid var(--grey-1);
        color: var(--grey-0);
    }
.btns_save-and_delete{
    display: flex;
    justify-content: space-between;
}
    .save{
        background-color: var(--color-primary-negative);
        color: var(--grey-0);
        height: 3rem;
        width: 60%;
        border: none;
        border-radius: var(--radius-1);
    }
    .delete{
        height: 3rem;
        width: 25%;
        border: none;
        background-color: var(--grey-1);
        color: var(--grey-0);
        border-radius: var(--radius-1);
    }
`