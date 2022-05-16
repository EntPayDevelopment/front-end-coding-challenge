import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useQuery, useMutation } from "@apollo/client";

import { GET_SNACKBAR_STATUS, CLOSE_SNACKBAR } from "../../operations";

export const Snackbar = () => {
  const getSnackbarStatusResult = useQuery(GET_SNACKBAR_STATUS);

  const [closeSnackbar] = useMutation(CLOSE_SNACKBAR);

  const [open, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!getSnackbarStatusResult.loading) {
      setMessage(getSnackbarStatusResult.data.snackbarMessage);
      setIsOpen(getSnackbarStatusResult.data.isSnackbarOpen);
    }
  }, [getSnackbarStatusResult]);

  let TIMER;
  const handleTimeout = () => {
    TIMER = setTimeout(() => {
      closeSnackbar();
    }, 3000);
  };

  const handleClose = () => {
    clearTimeout(TIMER);
    closeSnackbar();
  };

  useEffect(() => {
    if (open) {
      handleTimeout();
    }
    return () => {
      clearTimeout(TIMER);
    };
  }, [open]);

  return (
    open && (
      <Container open={open}>
        <p>{message}</p>
        <Button onClick={handleClose}>X</Button>
      </Container>
    )
  );
};

const fadein = keyframes`
    from {
      transform: translateX(-200%);
    }
    to {
      transform: translateX(0);
    }
`;

const fadeout = keyframes`
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-200%);
    }
`;

const Container = styled.div`
  position: fixed;
  z-index: 1000;
  bottom: 1rem;
  left: 2vw;
  transform: translateX(0);
  height: auto;
  width: 20rem;
  padding: 0.625rem 1rem;
  border-radius: 0.75rem;
  border: transparent;
  font-weight: 600;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  display: flex;
  justify-content: center;
  align-items: center;

  // Totla duration has to be longer than timeout to avoid flickering
  // ex) 0.3s + 2.75s = 3.05s > 3000ms (timeout)
  animation: ${fadein} 0.3s, ${fadeout} 0.3s 2.75s;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.875rem;
  padding: 0;
  margin-left: 1rem;
  height: 1.75rem;
  width: 1.75rem;
  text-align: center;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  font-weight: 600;
  color: ${(props) => props.theme.colors.black};
  cursor: pointer;
`;
