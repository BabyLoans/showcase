import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Button,
  Table, 
  Badge
} from "reactstrap";

export default function TableRate() {
  const [tokens, setTokens] = React.useState([]);
  const [rates, setRates] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if (isLoading) {
        fetch("https://babyloans-api.herokuapp.com/api/tokens", {
            mode: "cors",
        }).then(async (tokenResponse) => {
            setTokens((await tokenResponse.json())['hydra:member']);
            
        fetch("https://babyloans-api.herokuapp.com/api/rates?isCurrent="+true, {
          mode: "cors",
        }).then(async (rateResponse) => {
            setRates((await rateResponse.json())['hydra:member']);
        });
      });
    }
  }, [isLoading]);

  return (
    <Container>
      <Row>
        <h2><i className="fas fa-dollar-sign" /> Market</h2>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>ASSETS</th>
              <th>RATE</th>
              <th>TOTAL SUPPLY</th>
              <th>TOTAL BORROW</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {tokens.map((token) => {
              return (
                <tr>
                    <td className="markets-table-td-1">
                        <img
                            src={token.logoUrl}
                            className="markets-logo-assets"
                        />
                    </td>
                    <td className="markets-table-td-1">
                      <Badge className="badge badge-neutral">
                        {token.symbol}
                      </Badge>
                    </td>
                    <td>
                        {rates.map((rate) => {
                            if (rate.token === token['@id']) {
                                return <Badge className="badge badge-success">{rate.value} %</Badge>;
                            }
                        })}
                    </td>
                    <td className="markets-table-td-1"></td>
                    <td className="markets-table-td-1"></td>
                    <td>
                        {token.isActive ? (
                            <Badge className="badge badge-success">
                            Available
                            </Badge>
                        ) : (
                            <Badge className="badge badge-danger">
                            Unavailable
                            </Badge>
                        )}
                    </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Row>
    </Container>
     
    

  );
}