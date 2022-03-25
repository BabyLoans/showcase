import React from "react";

// reactstrap components
import { Container } from "reactstrap";

export default function PageHeader() {
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center brand">
          <h1 className="h1-seo">BABYLOANS FINANCE</h1>
          <br /><br />
          <h2>
            THE LIQUIDITY PROTOCOL <br />
            <span className="text-info">$ 14 785 874, 58</span>
          </h2>
        </div>
      </Container>
    </div>
  );
}
