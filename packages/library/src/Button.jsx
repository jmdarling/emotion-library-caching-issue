import React from "react";
import { css } from "@emotion/react";

export function Button({ children }) {
  const buttonStyles = css`
    color: forestgreen;
  `;

  return <button css={buttonStyles}>{children}</button>;
}
