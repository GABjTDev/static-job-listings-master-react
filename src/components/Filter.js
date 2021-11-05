import styled, { keyframes } from 'styled-components';
import BoxBtn from './BoxBtn';

const opacity = keyframes`
  from {
      opacity: 0;
    transform: translateY(-100px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Filt = styled.div`
    position: absolute;
    width: 90%;
    max-width: 1024px;
    left: 0;
    right: 0;
    bottom: -40px;
    margin: 0 auto;
    min-height: 80px;
    background: var(--LightGrayishCyan);
    border-radius: 5px;
    box-shadow: 0 10px 15px rgba(0,0,0,.22);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 20px;
    animation: ${opacity} 1s ease forwards;

    .box-flex{
        display: flex;
        flex-wrap: wrap;
    }

    .box-btn{
        display: flex;
        margin-bottom: 10px;
        margin-right: 10px;
    }

    .close{
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--DesaturatedDarkCyan);
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        width: 30px;
    }

`;

const ButtonClear = styled.button`
    background: none;
    border: none;
    color: hsl(180, 8%, 52%);
    font-weight: 800;
    font-family: 'Spartan';
    font-size: '.75rem';
    cursor: pointer;
`;

const Filter = ({ tags, resetTags, deleteTags }) => {
    return (
        <Filt>
            <div className="box-flex">
                {
                    tags.map((el, id) => <BoxBtn tag={el} key={`key-filter-${id}`} deleteTags={deleteTags} />)
                }
            </div>
            <ButtonClear onClick={resetTags}>Clear</ButtonClear>
        </Filt>
    )
}

export default Filter
