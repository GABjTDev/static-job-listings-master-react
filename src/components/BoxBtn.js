import styled from 'styled-components';
import CloseImg from '../images/icon-remove.svg';

const Paragraph = styled.p`
    font-size: .70rem;
    border: none;
    border-radius: 5px;
    background: var(--LightGrayishCyanBg);
    color: var(--DesaturatedDarkCyan);
    font-weight: 700;
    padding: 10px;
`;

const BoxBtn = ({ tag, deleteTags }) => {

    return (
        <div className="box-btn">
            <Paragraph>{tag}</Paragraph>
            <div className="close" onClick={() => { deleteTags(tag) }}>
                <img src={CloseImg} alt="close" />
            </div>
        </div>
    )
}

export default BoxBtn
