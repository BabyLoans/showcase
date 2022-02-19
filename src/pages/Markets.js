import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import showcaseBackgoundImage from '../assets/showcase-background-image.png';
import usdtLogo from '../assets/usdt_logo.png';
import usdcLogo from '../assets/usdc_logo.png';
import daiLogo from '../assets/dai_logo.png';
import bblLogo from '../assets/bbl_logo.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';

import '../style/pages/css/showcase.css';

function Markets() {
    return (
      <div className="background-showcase">
        <Navigation />
        <br /> <br />
        <Container>
          <Row>
            <Col>
            <Table  striped bordered hover variant="dark">
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
                    <tr>
                        <td className="markets-table-td-1"><img src={usdtLogo} alt="usdt logo" className="markets-logo-assets"/></td>
                        <td>
                            USDT <br />
                            <b>$ 1.00</b>
                        </td>
                        <td>
                            $ 5,6M <br />
                            <b>APY : 4,95 %</b>
                        </td>
                        <td>
                            $ 3,5M <br />
                            <b>APY : 6,8 %</b>
                        </td>
                        <td> 
                            <Badge pill bg="success">
                                Available
                            </Badge>
                        </td>
                    </tr>
                    <tr>
                        <td className="markets-table-td-1"><img src={usdcLogo} alt="usdc logo" className="markets-logo-assets"/></td>
                        <td>
                            USDC <br />
                            <b>$ 1.00</b>
                        </td>
                        <td>
                            $ 8,2M <br />
                            <b>APY : 5,5 %</b>
                        </td>
                        <td>
                            $ 7,2M <br />
                            <b>APY : 6,5 %</b>
                        </td>
                        <td> 
                            <Badge pill bg="success">
                                Available
                            </Badge>
                        </td>
                    </tr>
                    <tr>
                        <td className="markets-table-td-1"><img src={daiLogo} alt="dai logo" className="markets-logo-assets"/></td>
                        <td>
                            DAI <br />
                            <b>$ 1.00</b>
                        </td>
                        <td>
                            $ 7,6M <br />
                            <b>APY : 5,1 %</b>
                        </td>
                        <td>
                            $ 5,2M <br />
                            <b>APY : 6,4 %</b>
                        </td>
                        <td> 
                            <Badge pill bg="success">
                                Available
                            </Badge>
                        </td>
                    </tr>
                    <tr>
                        <td className="markets-table-td-1">
                            {/* <img src={bblLogo} alt="bbl logo" className="markets-logo-assets"/> */}
                        </td>
                        <td>
                            BBL <br />
                            <b>$ 17.60</b>
                        </td>
                        <td>
                            $ 4,1M <br />
                            <b>APY : 11,2 %</b>
                        </td>
                        <td>
                            $ 2,6M <br />
                            <b>APY : 13,65 %</b>
                        </td>
                        <td> 
                            <Badge pill bg="success">
                                Available
                            </Badge>
                        </td>
                    </tr>
                </tbody>
                </Table>
            </Col>
          </Row>
          <Row>
          <Col>
          </Col>
          <Col>
            <img src={showcaseBackgoundImage} alt="showcaseBackgoundImage" className="showcase-background-image"/>
          </Col>
        </Row>
        </Container>
        <Footer />
      </div>
    );
}
  
export default Markets;