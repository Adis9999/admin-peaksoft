import { Button, styled } from "@mui/material";

const UIButton = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default UIButton;

const StyledButton = styled(Button)({
  borderRadius: "10px",
  fontWeight: "600",
  padding: "14px",
  fontSize: "12px",
  width: "100%",
});
