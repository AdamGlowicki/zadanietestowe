import React, {Component} from "react";
import styled from "styled-components";
import TableHead from "../../molecules/TableHead/TableHead";
import TableBody from "../../molecules/TableBody/TableBody";
import {fetchItems} from "../../../action";
import {connect} from 'react-redux'
import FinancialTable from "../FinancialTable/FinancialTable";
import PropTypes from 'prop-types'
import TableSearch from "../../molecules/TableSearch/TableSearch";
import {filter, splitToArrays} from "./filterAction";

const StyledButton = styled.button`
`;

const StyledPage = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
padding-top: 40px;
`;

const StyledWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;

const StyledTable = styled.table`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

class Table extends Component {
    state = {
        id: '',
        concern: '',
        city: '',
        page: 0,
    }

    setPage = (page) => {
        this.setState({
            page
        })
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleClick = () => {
        this.setState({
            id: '',
            concern: '',
            city: '',
        })
    }

    componentDidMount() {
        this.props.fetch();
    }

    render() {
        const {data, isOpen} = this.props;

        const filterData = {
            ...this.state,
            onChange: this.handleChange,
            onClick: this.handleClick,
        }

        let rowNumber = 1;
        let page = 1;
        const filtered = filter(data, this.state)
        const arrays = splitToArrays(filtered, 10)
        const single = arrays[this.state.page]
        return (
            <>
                {isOpen && <FinancialTable/>}
                <StyledWrapper>
                    <StyledTable>
                        <TableHead isNumber column2='Concern' column3='City' column4='Income'/>
                        <TableSearch {...filterData}/>
                        {arrays.length && single.map(({id, name, city}) => (
                            <TableBody isNumber number={rowNumber++} column1={id} column2={name} column3={city}
                                       key={id}/>
                        ))}
                    </StyledTable>
                    <StyledPage>
                        {arrays.length && arrays.map((item, index) => <StyledButton
                            onClick={() => this.setPage(index)}>{page++}</StyledButton>)}
                    </StyledPage>
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

Table.propTypes = {
    isOpen: PropTypes.bool,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            city: PropTypes.string.isRequired,
        })
    )
}