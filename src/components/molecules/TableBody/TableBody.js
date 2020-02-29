import React from "react";
import styled from "styled-components";
import Th from "../../atom/Th/Th";
import Td from "../../atom/Td/Td";

const StyledTableBody = styled.tbody`
display: flex;
border-bottom: 1px solid black;
`;

const StyleTr = styled.tr`
display: flex;
min-height: 30px;
`;

const StyleButton = styled.button`

`;

const StyleTh = styled(Th)`
min-width: 100px;
`

const StyleTd = styled(Td)`
min-width: 200px;
:nth-of-type(1) {
min-width: 300px;
}
`


const TableBody = ({id, name, city}) => (
    <StyledTableBody>
        <StyleTr>
            <StyleTh>{id}</StyleTh>
            <StyleTd>{name}</StyleTd>
            <StyleTd>{city}</StyleTd>
            <StyleTd><StyleButton >Finanse</StyleButton></StyleTd>
        </StyleTr>
    </StyledTableBody>
)

export default TableBody;