import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#7264b6" : "#fff")};
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 140px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16.5px;
  padding: ${({ big }) => (big ? "8px" : "5px 0 7px")};
  color: ${({ primary }) => (primary ? "#fff" : "#7264b6")};
  font-size: ${({ big }) => (big ? "18px" : "15px")};

  &:hover {
    transform: translateY(-2px);
  }
`;
