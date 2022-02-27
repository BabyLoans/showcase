import React from 'react';
import { Component } from "react";

import usdtLogo from '../assets/usdt_logo.png';
import usdcLogo from '../assets/usdc_logo.png';
import daiLogo from '../assets/dai_logo.png';
import bblLogo from '../assets/bbl_logo.png';

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
        fetch('https://babyloans-apiv2.herokuapp.com/rate/tokens', {mode:'cors'})
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                this.setState({tokens: result.data.tokens})
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
                                <td className="markets-table-td-1"><img src={usdcLogo} alt="usdc logo" className="markets-logo-assets"/></td>
                                <td className="markets-table-td-1">{result.name}</td>
                                <td className="markets-table-td-1">{result.name}</td>
                                <td className="markets-table-td-1">{result.name}</td>
                                <td> 
                                    <Badge pill bg="success">
                                        Available
                                    </Badge>
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