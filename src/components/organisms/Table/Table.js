import React, {Component} from "react";
import styled from "styled-components";
import TableHead from "../../molecules/TableHead/TableHead";
import TableBody from "../../molecules/TableBody/TableBody";
import {fetchItems} from "../../../action";
import {connect} from 'react-redux'


const StyledWrapper = styled.table`
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
        const {data} = this.props;
        return (
            <StyledWrapper>
                <TableHead/>
                {data.map(({id, name, city}) => (
                    <TableBody id={id} name={name} city={city} key={id}/>
                ))}
            </StyledWrapper>
        );
    }
}

const mapStateToProps = state => {
    const {data} = state;
    return {data};
};

const mapDispatchToProps = dispatch => ({
    fetch: () => dispatch(fetchItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);


