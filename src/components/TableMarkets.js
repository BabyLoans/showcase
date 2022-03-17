import React from "react";

import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";

function TableMarkets(props) {
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
    <Table id="markets-table-rate-tokens" striped bordered hover variant="dark">
      <thead>
        <tr>
          <th></th>
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
                    <b>{token.symbol}</b>
                </td>
                <td>
                    {rates.map((rate) => {
                        if (rate.token === token['@id']) {
                            return <Badge bg="success">{rate.value} $</Badge>;
                        }
                    })}
                </td>
                <td className="markets-table-td-1"></td>
                <td className="markets-table-td-1"></td>
                <td>
                    {token.isActive ? (
                        <Badge pill bg="success">
                        Available
                        </Badge>
                    ) : (
                        <Badge pill bg="danger">
                        Unavailable
                        </Badge>
                    )}
                </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default TableMarkets;
