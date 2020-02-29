import React, {Component} from "react";
import styled from "styled-components";
import TableHead from "../../molecules/TableHead/TableHead";
import TableBody from "../../molecules/TableBody/TableBody";
import {fetchItems} from "../../../action";
import {connect} from 'react-redux'
import FinancialTable from "../FinancialTable/FinancialTable";

const StyledWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`

const StyledTable = styled.table`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

class Table extends Component {

    componentDidMount() {
        this.props.fetch();
    }

    render() {
        const {data, isOpen} = this.props;
        return (
            <>
                {isOpen && <FinancialTable/>}
                <StyledWrapper>
                <StyledTable>
                    <TableHead column2='Name' column3='City' column4='Income'/>
                    {data.map(({id, name, city}) => (
                        <TableBody column1={id} column2={name} column3={city} key={id}/>
                    ))}
                </StyledTable>
                    </StyledWrapper>

            </>
        );
    }
}

const mapStateToProps = state => {
    const {data, isOpen} = state;
    return {data, isOpen};
};

const mapDispatchToProps = dispatch => ({
    fetch: () => dispatch(fetchItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);


