import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;

  &:hover > .tooltip,
  &:active > .tooltip {
    display: block;
  }
`;
const Content = styled.div`
  display: none;
  position: absolute;
  z-index: 200;
`;

interface TooltipProps {
  children: ReactNode;
  message: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, message }) => {
  return (
    <Container>
      {children}
      <Content className="tooltip">{message}</Content>
    </Container>
  );
};

export default Tooltip;
