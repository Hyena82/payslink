"use client";

import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  console.error(error);

  return (
    <html lang="en">
      <body>
        <Wrapper>
          <h2>Something went wrong!</h2>
        </Wrapper>
      </body>
    </html>
  );
};

export default error;
