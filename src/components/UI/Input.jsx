import { styled, TextField } from "@mui/material";

const Input = ({ ...rest }) => {
  return <StyledInput fullWidth {...rest} />;
};

export default Input;

const StyledInput = styled(TextField)({
  input: {
    padding: "8px 16px",
  },
});
