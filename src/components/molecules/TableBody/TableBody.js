import React, {Component} from 'react';
import styled, {css} from "styled-components";
import Th from "../../atom/Th/Th";
import Td from "../../atom/Td/Td";
import {connect} from 'react-redux'
import {getSpecifyIncome} from "../../../action";
import PropTypes from "prop-types";

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
min-width: 70px;
justify-content: flex-end;
padding: 0 20px 0 0 ;

:nth-child(1) {
padding-right: 40px;
}

${({secondary}) => (
    secondary && css`
min-width: 200px;
justify-content: flex-start;
padding-left: 10px;
font-weight: normal;
`)}
`;

const StyleTd = styled(Td)`
min-width: 200px;
:nth-of-type(1) {
min-width: 300px;
}
:nth-last-of-type(1) {
justify-content: flex-end;
min-width: 100px;
}
${({secondary}) => (
    secondary && css`
:nth-of-type(1) {
min-width: 200px;
justify-content: flex-start;
padding-left: 10px;
}

:nth-last-of-type(1) {
min-width: 200px;
justify-content: flex-start;
padding-left: 10px;
}
`)}
`;

const StyleNumbers = styled.div`
display: flex;
align-items: flex-start;
`


class TableBody extends Component {
    render() {
        const {isNumber, number, column1, column2, column3, financial} = this.props
        return (
            <>
                <StyledTableBody>
                    <StyleTr>
                        {isNumber && <StyleTh><StyleNumbers>{number}</StyleNumbers></StyleTh>}
                        {financial ? <StyleTh secondary>{column1}</StyleTh> : <StyleTh>{column1}</StyleTh>}
                        {financial ? <StyleTd secondary>{column2}</StyleTd> : <StyleTd>{column2}</StyleTd>}
                        {financial ? <StyleTd secondary>{column3}</StyleTd> : <StyleTd>{column3}</StyleTd>}
                        {financial ||
                        <StyleTd><StyleButton onClick={() => this.props.income(column1)}>Income</StyleButton></StyleTd>}
                    </StyleTr>
                </StyledTableBody>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    income: (id) => dispatch(getSpecifyIncome(id))
})

export default connect(null, mapDispatchToProps)(TableBody);

TableBody.propTypes = {
    financial: PropTypes.bool,
    secondary: PropTypes.bool,
}

TableBody.defaultProps = {
    financial: false,
    secondary: false,
}