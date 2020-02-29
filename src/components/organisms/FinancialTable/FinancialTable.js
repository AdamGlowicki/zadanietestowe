import styled from "styled-components";
import React, {Component} from 'react';
import TableHead from "../../molecules/TableHead/TableHead";
import TableBody from "../../molecules/TableBody/TableBody";
import {connect} from 'react-redux'

const StyledWrapper = styled.table`
padding-top: 30px;;
position:fixed;
min-width: 500px;
min-height: 700px;
background-color:red;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`


class FinancialTable extends Component {
    render() {
        return (
            <StyledWrapper>
                <TableHead column1='Income' column2='Average Income' column3='Last Month Income'  financial/>
                <TableBody financial/>
                {console.log(getIncome(this.props.incomes))}
            </StyledWrapper>
        );
    }
}

const mapStateToProps = ({incomes}) => {
    return  {incomes}
}

export default connect(mapStateToProps)(FinancialTable);

function getIncome(incomes) {
    return incomes.map(item => parseInt(item.value));
}

function sunIncome(incomes) {
    return getIncome(incomes).reduce((a, b) => a + b, 0)
}
