import React, {Component} from 'react';
import styled from "styled-components";
import Th from "../../atom/Th/Th";
import {connect} from "react-redux";
import {sort} from '../../../action'

const StyledTableHead = styled.tbody`
display: flex;
`;

const StyleTr = styled.tr`
display: flex;
min-height: 40px;
`;

const StyledButton = styled.button`

`

const StyledTh = styled(Th)`
:nth-child(1) {
min-width: 100px;
}

:nth-child(2) {
min-width: 300px;
}

:nth-child(3) {
min-width: 200px;
}

:nth-child(4) {
min-width: 200px;
}
`


class TableHead extends Component {
    state ={

    }


    render() {
        return (
            <StyledTableHead>
                <StyleTr>
                    <StyledTh><StyledButton>#</StyledButton></StyledTh>
                    <StyledTh>Name</StyledTh>
                    <StyledTh>City</StyledTh>
                    <StyledTh>Income</StyledTh>
                </StyleTr>
            </StyledTableHead>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    order: () => dispatch(sort())
})

export default TableHead;