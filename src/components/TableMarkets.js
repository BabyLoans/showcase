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
      }).then((tokenResponse) => {
        setTokens(tokenResponse.json());

        fetch("https://babyloans-api.herokuapp.com/api/rates", {
          mode: "cors",
        }).then((rateResponse) => {
          setRates(rateResponse.json());
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
          <th>TOTAL SUPPLY</th>
          <th>TOTAL BORROW</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        {tokens.map((result) => {
          return (
            <tr>
              <td className="markets-table-td-1">
                <img
                  src={process.env.PUBLIC_URL + "/tokens/" + result.logoUrl}
                  className="markets-logo-assets"
                />
              </td>
              <td className="markets-table-td-1">
                <b>{result.symbol}</b>
              </td>
              <td className="markets-table-td-1"></td>
              <td className="markets-table-td-1"></td>
              <td>
                {rates.map((rate) => {
                  if (rate.tokenId === result.id) {
                    return <Badge variant="success">{rate.rate}</Badge>;
                  }
                })}
              </td>
              <td>
                {result.isActive ? (
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
