import { Box, Container, styled } from "@mui/material";

const Modal = ({ children, onClose }) => {
  return (
    <StyledBackground maxWidth>
      <StyledContent>{children}</StyledContent>
    </StyledBackground>
  );
};

export default Modal;

const StyledBackground = styled(Container)({
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.386)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const StyledContent = styled(Box)({
  backgroundColor: "white",
});
