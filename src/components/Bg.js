import styled from 'styled-components';
import backgroundMobile from '../images/bg-header-mobile.svg';
import backgroundDesktop from '../images/bg-header-desktop.svg';

const Background = styled.div`
    background: var(--DesaturatedDarkCyan) ${`url(${backgroundMobile})`} no-repeat;
    background-size: cover;
    width: 100%;
    height: 150px;
    margin-bottom: 100px;
    position: relative;

    @media screen and (min-width: 1024px){
        background: var(--DesaturatedDarkCyan) ${`url(${backgroundDesktop})`} no-repeat;
        background-size: cover;
    }

`;

const Bg = ({ children }) => {
    return (
        <Background>
            {children}
        </Background>
    )
}

export default Bg
