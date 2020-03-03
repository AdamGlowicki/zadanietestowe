import React, {Component} from "react";
import styled from "styled-components";
import TableHead from "../../molecules/TableHead/TableHead";
import TableBody from "../../molecules/TableBody/TableBody";
import {fetchItems} from "../../../action";
import {connect} from 'react-redux'
import FinancialTable from "../FinancialTable/FinancialTable";
import PropTypes from 'prop-types'
import TableSearch from "../../molecules/TableSearch/TableSearch";
import {filter, filterAction, filterObject} from "./filterAction";


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

    state = {
        id: '',
        concern: '',
        city: '',
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
        let page = 1;

        const filterData = {
            ...this.state,
            onChange: this.handleChange,
            onClick: this.handleClick,
        }
        const filtered = filter(data, this.state)

        return (
            <>
                {isOpen && <FinancialTable/>}
                <StyledWrapper>
                <StyledTable>
                    <TableHead isNumber column2='Concern' column3='City' column4='Income'/>
                    <TableSearch {...filterData}/>
                    {filtered.map(({id, name, city}) => (
                        <TableBody isNumber number={page++} column1={id} column2={name} column3={city} key={id}/>
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


