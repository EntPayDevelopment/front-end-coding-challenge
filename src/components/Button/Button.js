import styled from "styled-components";
import PropTypes from "prop-types";

import { Processing } from "../Processing";

export const Button = ({ text, onClick, isProcessing }) => {
  return (
    <Container onClick={onClick}>
      {isProcessing ? <Processing on={isProcessing} /> : text}
    </Container>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isProcessing: PropTypes.bool.isRequired,
};

const Container = styled.button`
  width: 100%;
  border: 0;
  border-radius: ${(props) => props.theme.borderRadius};
  font-weight: 600;
  color: ${(props) => props.theme.colors.blue};
  background-color: ${(props) => props.theme.colors.white};
  text-align: center;
  padding: 7px 0px;
  font-size: 1rem;
  cursor: pointer;
  font-family: ${(props) => props.theme.fonts};

  &:hover {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.blue};
  }
`;
