import React, {Component} from 'react';
import styled from "styled-components";
import Th from "../../atom/Th/Th";
import Td from "../../atom/Td/Td";
import {connect} from 'react-redux'
import {getSpecifyIncome} from "../../../action";

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
`

const StyleTd = styled(Td)`
min-width: 200px;
:nth-of-type(1) {
min-width: 300px;
}
:nth-last-of-type(1) {
justify-content: flex-end;
min-width: 100px;
}
`

class TableBody extends Component {

    handleClick = (id, ) => {
    this.props.income()
    }

    render() {
        const {column1, column2, column3, column4, financial, income} = this.props
        return (
            <>
                <StyledTableBody>
                    <StyleTr>
                        <StyleTh>{column1}</StyleTh>
                        <StyleTd>{column2}</StyleTd>
                        <StyleTd>{column3}</StyleTd>
                        <StyleTd>{financial ? column4 : <StyleButton onClick={() => income(column1, true)}>Income</StyleButton>}</StyleTd>
                    </StyleTr>
                </StyledTableBody>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    income: (id, isOpen) => dispatch(getSpecifyIncome(id, isOpen))
})

const mapStateToProps = ({incoems}) => ({

})

export default connect(null, mapDispatchToProps)(TableBody);