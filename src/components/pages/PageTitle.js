import React from "react";
import styled from "styled-components";

const AnchorTag = styled.a`
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 2.4rem;
`;

function PageTitle({ id }) {
  return (
    <AnchorTag id={id} href={`#${id}`}>
      #{id}
    </AnchorTag>
  );
}

export default PageTitle;
