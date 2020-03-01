import styled from "styled-components";
import React, {Component} from 'react';
import TableHead from "../../molecules/TableHead/TableHead";
import TableBody from "../../molecules/TableBody/TableBody";
import {connect} from 'react-redux'
import {closeWindow} from '../../../action'

const StyledWrapper = styled.div`
padding-top: 30px;;
position:fixed;
background-color:#999999;
border: 2px solid black;
min-height: 300px;
top: 100px;
left: 50%;
transform: translate(-50%);
`

const StyledTable = styled.table`

`

const StyledButton = styled.button`
background-color: white;
border: 1px solid red;
position: fixed;
bottom: 30px;
right: 30px;
color: red;
font-size: 20px;
`

class FinancialTable extends Component {
    render() {
        const {incomes} = this.props
        return (
            <StyledWrapper>
                <StyledTable>
                    <TableHead column2='Income' column3='Average Income' column4='Last Month Income' financial/>
                    <TableBody column1={sunIncome(incomes)} column2={averageIncome(incomes)}
                               column3={sumByLastMonth(incomes)} financial/>
                </StyledTable>
                <StyledButton onClick={this.props.close}>X</StyledButton>
            </StyledWrapper>
        );
    }
}

const mapStateToProps = ({incomes}) => {
    return {incomes}
}

const mapDispatchToProps = dispatch => (
    {close: () => dispatch(closeWindow())}
)

export default connect(mapStateToProps, mapDispatchToProps)(FinancialTable);

function getIncome(incomes) {
    return incomes.map(item => parseInt(item.value));
}

function sunIncome(incomes) {
    return getIncome(incomes).reduce((a, b) => a + b, 0)
}

function averageIncome(incomes) {
    return sunIncome(incomes) / incomes.length;
}

function getByMonth(incomes) {
    return incomes.filter(item => lastMonthInGivenYear(item.date))
}

function lastMonthInGivenYear(item) {
    return (new Date(item).getMonth() + 2 === new Date().getMonth()) && (new Date(item).getFullYear() === new Date().getFullYear());
}

function sumByLastMonth(incomes) {
    return sunIncome(getByMonth(incomes));
}
