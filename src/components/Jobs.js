import styled, { keyframes } from 'styled-components';

import { BoxImg, BoxDetails, Company, Tags, Button } from './BoxBtnElements';

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

const Job = styled.div`
    background: var(--LightGrayishCyan);
    border-radius: 5px;
    box-shadow: 0 10px 15px rgba(0,0,0,.22);
    width: 90%;
    margin: 0 auto;
    max-width: 1024px;
    position: relative;
    margin-bottom: 40px;
    animation: ${opacity} 1s ease forwards; 

    &.border-featured{
        border-left: 6px solid var(--DesaturatedDarkCyan);
    }

    @media screen and (min-width: 1024px){
        display: flex;
    }

`;

const Jobs = ({ info, addTags }) => {

    const {
        logo,
        company,
        position,
        postedAt,
        contract,
        location,
        languages,
        tools,
        level,
        role,
        featured,
        new: newStatus
    } = info;

    return (
        <Job className={featured ? 'border-featured' : ''}>
            <BoxImg>
                <img src={logo} alt={company} />
            </BoxImg>
            <BoxDetails>
                <Company>
                    <div className="flex-company">
                        <h2>{company}</h2>
                        {newStatus && <p className="new">NEW!</p>}
                        {featured && <p className="featured">FEATURED</p>}
                    </div>

                    <h3>{position}</h3>
                    <p>{postedAt} - {contract} - {location}</p>
                </Company>
                <Tags>
                    <Button onClick={addTags}>{role}</Button>
                    <Button onClick={addTags}>{level}</Button>
                    {
                        languages.map((el, id) => {
                            return <Button onClick={addTags} key={`lang-${el}-${id}`} >{el}</Button>
                        })
                    }

                    {
                        tools.map((el, id) => {
                            return <Button onClick={addTags} key={`tool-${el}-${id}`} >{el}</Button>
                        })
                    }
                </Tags>
            </BoxDetails>
        </Job>
    )
}

export default Jobs
