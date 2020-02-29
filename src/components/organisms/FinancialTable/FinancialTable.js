import styled from "styled-components";
import React from 'react';
import TableHead from "../../molecules/TableHead/TableHead";
import TableBody from "../../molecules/TableBody/TableBody";

const StyledWrapper = styled.div`
position:fixed;
min-width: 500px;
min-height: 700px;
background-color:red;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`



const FinancialTable = () => {
    return (
        <StyledWrapper>
            <TableHead/>
            <TableBody/>
        </StyledWrapper>
    );
};

export default FinancialTable;
