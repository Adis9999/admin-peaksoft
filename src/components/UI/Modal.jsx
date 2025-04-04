import { Box, Container, styled } from "@mui/material";
import { createPortal } from "react-dom";

const Modal = ({ children, onClose }) => {
  const modalRoot = document.getElementById("modal");

  if (!modalRoot) return null;

  return createPortal(
    <StyledBackground onClick={() => onClose()} maxWidth>
      <StyledContent onClick={(e) => e.stopPropagation()}>
        {children}
      </StyledContent>
    </StyledBackground>,
    modalRoot
  );
};

export default Modal;

const StyledBackground = styled(Container)({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  display: "flex",
  backgroundColor: "rgba(0, 0, 0, 0.386)",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 123456789,
});

const StyledContent = styled(Box)({
  backgroundColor: "white",
  padding: "24px",
  borderRadius: "8px",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
});
