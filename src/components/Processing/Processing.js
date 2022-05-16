import styled from "styled-components";
import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";
import PropTypes from "prop-types";

export const Processing = ({ on, size = 10, color = "#003778" }) => {
  return (
    <Container className="sweet-loading">
      <BeatLoader color={color} loading={on} css={override} size={size} />
    </Container>
  );
};

Processing.propTypes = {
  on: PropTypes.bool.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #0366a4;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
