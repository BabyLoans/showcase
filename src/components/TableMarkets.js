import React from 'react';
import { Component } from "react";

import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';

class TableMarkets extends Component {

    constructor(props) {
        super(props)
          this.state = {
            tokens: []
        }
    }

    componentDidMount() {
        fetch('https://babyloans-api.herokuapp.com/api/tokens', {mode:'cors'})
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                this.setState({tokens: result['hydra:member']})
        })

    }

    render() {
        return (
            <Table id="markets-table-rate-tokens" striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th></th>
                    <th>ASSETS</th>
                    <th>TOTAL SUPPLY</th>
                    <th>TOTAL BORROW</th>
                    <th>STATUS</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.tokens.map((result) => {
                        return (
                            <tr>
                                <td className="markets-table-td-1"><img src={ process.env.PUBLIC_URL + "/tokens/" + result.logoUrl } className="markets-logo-assets"/></td>
                                <td className="markets-table-td-1"><b>{result.symbol}</b></td>
                                <td className="markets-table-td-1"></td>
                                <td className="markets-table-td-1"></td>
                                <td> 
                                    { result.isActive 
                                        ? <Badge pill bg="success">Available</Badge>
                                        : <Badge pill bg="danger">Unavailable</Badge>
                                    }
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </Table>     
        );
    }
}

export default TableMarkets;