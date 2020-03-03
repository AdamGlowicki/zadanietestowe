import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from "styled-components";
import Input from "../../atom/Input/Input";
import Td from "../../atom/Td/Td";


const StyledTableBody = styled.tbody`
display: flex;
`;

const StyleTr = styled.tr`
display: flex;
min-height: 30px;
`;

const StyleTd = styled(Td)`
:first-child{
width: 70px;
}

:nth-child(2) {
width: 70px;
}

:nth-child(5) {
width: 100px;
justify-content: flex-end;
}
`;

const StyledButton = styled.button`

`;

const StyledInput = styled(Input)`
display: flex;
height: 20px;
width: 70px;


${({secondary}) => (
    secondary && css`
width: 300px;
`)}

${({tertiary}) => (
    tertiary && css`
width: 200px;
`)}
`

const TableSearch = ({onClick, id, concern, city, ...props}) => {
    return (
        <StyledTableBody>
            <StyleTr>
                <StyleTd>Filter:</StyleTd>
                <StyleTd>
                    <StyledInput
                        value={id}
                        name='id'
                        placeholder='by id:'
                        {...props}
                    />
                </StyleTd>
                <StyleTd>
                    <StyledInput
                        value={concern}
                        name='concern'
                        secondary
                        placeholder='by concern:'
                        {...props}
                    />
                </StyleTd>
                <StyleTd>
                    <StyledInput
                        value={city}
                        name='city'
                        tertiary
                        placeholder='by city:'
                        {...props}
                    />
                </StyleTd>
                <StyleTd>
                    <StyledButton
                        onClick={onClick}
                    >
                        Clear
                    </StyledButton>
                </StyleTd>
            </StyleTr>
        </StyledTableBody>
    );
}

TableSearch.propTypes = {
    id: PropTypes.number.isRequired,

}

export default TableSearch;