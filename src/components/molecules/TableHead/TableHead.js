import React, {Component} from 'react';
import styled, {css} from "styled-components";
import Th from "../../atom/Th/Th";
import {connect} from "react-redux";
import {sort} from '../../../action'
import PropTypes from 'prop-types'
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
display: flex;
justify-content: flex-start;
:nth-child(1) {
min-width: 70px;
justify-content: center;
}

:nth-child(2) {
min-width: 300px;
}

:nth-child(3) {
min-width: 200px;
}

:nth-child(4) {
min-width: 100px;
justify-content: flex-end;
}

 ${({ secondary }) =>
    secondary &&
    css`
      :nth-child(1) {
min-width: 200px;
justify-content: flex-start;
padding-left: 10px;
}

:nth-child(2) {
min-width: 200px;
justify-content: flex-start;
padding-left: 10px;
}

:nth-child(3) {
min-width: 200px;
justify-content: flex-start;
padding-left: 10px;
}
    `}
`


class TableHead extends Component {
    state = {
        isOrder: true
    }

    handleClick = () => {
        this.setState(prevState => ({
            isOrder: !prevState.isOrder
        }));
        this.props.order(this.state.isOrder)
    }

    render() {
        const { column2, column3, column4, financial} = this.props
        return (
            <StyledTableHead>
                <StyleTr>
                    {financial || <StyledTh><StyledButton onClick={this.handleClick}>#</StyledButton></StyledTh>}
                    {financial ? <StyledTh secondary>{column2}</StyledTh> : <StyledTh >{column2}</StyledTh>}
                    {financial ? <StyledTh secondary>{column3}</StyledTh> : <StyledTh >{column3}</StyledTh>}
                    {financial ? <StyledTh secondary>{column4}</StyledTh> : <StyledTh >{column4}</StyledTh>}
                </StyleTr>
            </StyledTableHead>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    order: (order) => dispatch(sort(order))
})

export default connect(null, mapDispatchToProps)(TableHead);

TableHead.propTypes = {
    column2: PropTypes.s
}