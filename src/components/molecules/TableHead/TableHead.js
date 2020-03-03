import React, {Component} from 'react';
import styled, {css} from "styled-components";
import Th from "../../atom/Th/Th";
import {connect} from "react-redux";
import {sort, SORT_CITY, SORT_CONCERN, SORT_ID} from '../../../action'
import PropTypes from 'prop-types'

const StyledTableHead = styled.tbody`
display: flex;
flex-direction: column;
`;

const StyleTr = styled.tr`
display: flex;
min-height: 40px;
`;

const StyledButton = styled.button`
`;

const StyledTh = styled(Th)`
display: flex;
justify-content: flex-start;

:first-child{
min-width: 70px;
}
:nth-child(2) {
min-width: 70px;
justify-content: center;
}

:nth-child(3) {
min-width: 300px;
}

:nth-child(4) {
min-width: 200px;
}

:nth-child(5) {
min-width: 100px;
justify-content: flex-end;
}

 ${({secondary}) =>
    secondary &&
    css`
:nth-last-child(3) {
min-width: 200px;
justify-content: flex-start;
padding-left: 10px;
}

:nth-last-child(2) {
min-width: 200px;
justify-content: flex-start;
padding-left: 10px;
}

:nth-last-child(1) {
min-width: 200px;
justify-content: flex-start;
padding-left: 10px;
}
`}
`;

class TableHead extends Component {
    state = {
        isOrderId: true,
        isOrderConcern: true,
        isOrderCity: true
    }

    handleClickId = () => {
        this.setState(prevState => ({
            isOrderId: !prevState.isOrderId
        }));
        this.props.orderId(this.state.isOrderId, SORT_ID)
    }
    handleClickConcern = () => {
        this.setState(prevState => ({
            isOrderId: !prevState.isOrderId
        }));
        this.props.orderConcern(this.state.isOrderId, SORT_CONCERN)
    }
    handleClickCity = () => {
        this.setState(prevState => ({
            isOrderId: !prevState.isOrderId
        }));
        this.props.orderCity(this.state.isOrderId, SORT_CITY)
    }

    render() {
        const {isNumber, column2, column3, column4, financial} = this.props
        return (
            <StyledTableHead>
                <StyleTr>
                    {isNumber && <StyledTh>Number</StyledTh>}
                    {financial || <StyledTh><StyledButton onClick={this.handleClickId}>#</StyledButton></StyledTh>}
                    {financial ? <StyledTh secondary>{column2}</StyledTh> : <StyledTh><StyledButton onClick={this.handleClickConcern}>{column2}</StyledButton></StyledTh>}
                    {financial ? <StyledTh secondary>{column3}</StyledTh> : <StyledTh><StyledButton onClick={this.handleClickCity}>{column3}</StyledButton></StyledTh>}
                    {financial ? <StyledTh secondary>{column4}</StyledTh> : <StyledTh>{column4}</StyledTh>}
                </StyleTr>
            </StyledTableHead>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    orderId: (order, type) => dispatch(sort(order, type)),
    orderConcern: (order, type) => dispatch(sort(order, type)),
    orderCity: (order, type) => dispatch(sort(order, type)),
})

export default connect(null, mapDispatchToProps)(TableHead);

TableHead.propTypes = {
    column2: PropTypes.string.isRequired,
    column3: PropTypes.string.isRequired,
    column4: PropTypes.string.isRequired,
    financial: PropTypes.bool,
    secondary: PropTypes.bool,
}

TableHead.defaultProps = {
    financial: false,
    secondary: false,
}