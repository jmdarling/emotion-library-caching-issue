import { Button } from "@jmd/emotion-library-caching-issue-library";
import { css } from "@emotion/react";

const emotionalDivStyles = css`
  width: 100px;
  height: 100px;
  background-color: hotpink;
`;

function App() {
  return (
    <>
      <Button>Hello</Button>
      <div css={emotionalDivStyles}></div>
    </>
  );
}

export default App;
