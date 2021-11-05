import styled from 'styled-components';


export const BoxImg = styled.div`
    position: absolute;
    width: 40px;
    height: 40px;
    top: -20px;
    left: 20px;

    img{
        width: 100%;
    }

    @media screen and (min-width: 1024px){
        position: relative;
        top: 0;
        left: 0;
        width: auto;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 20px;
    }

`;

export const BoxDetails = styled.div`
    padding: 30px 20px;
    padding-bottom: 0;

    @media screen and (min-width: 1024px){
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
`;

export const Company = styled.div`
    border-bottom: 1px solid var(--DarkGrayishCyan);
    margin-bottom: 10px;

    .flex-company{
        display: flex;
        align-items: center;

        p{
            margin-bottom: 10px;
            font-size: .65rem;
            font-weight: 800;
            margin-right: 10px;
            padding: 5px 10px;
            border-radius: 10px;
            color: var(--LightGrayishCyan)
        }

        .new{
            background: var(--DesaturatedDarkCyan);
        }

        .featured{
            background: var(--VeryDarkGrayishCyan);
        }

    }

    h2,h3,p{
        margin-bottom: 10px;
        font-size: .85rem;
    }

    h2{
        color: var(--DesaturatedDarkCyan);
        margin-right: 10px;
        padding: 5px 0;
    }

    h3{
        color: var(--VeryDarkGrayishCyan)
    }

    p{
        color: var(--DarkGrayishCyan);
        margin-bottom: 15px;
    }

    @media screen and (min-width: 1024px){
        border: none;
    }

`;


export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 20px;
`;

export const Button = styled.button`
    border: none;
    border-radius: 5px;
    background: var(--LightGrayishCyanBg);
    color: var(--DesaturatedDarkCyan);
    cursor: pointer;
    font-weight: 700;
    margin-right: 15px;
    padding: 10px;
    margin-bottom: 20px;
`;