import React from "react";
import styled from 'styled-components';

const Header = styled.header`
    h1{
        font-size: 4rem;
        font-weight: 600;
        span{
            color: #FF5C00;
        }
    }
    h2{
        font-size: 2.4rem;
        font-weight: 300;
    }
`;

function Title() {
  return (
    <Header>
      <h1>
        rodpa<span>dev</span>
      </h1>
      <h2>software developer</h2>
    </Header>
  );
}

export default Title;
