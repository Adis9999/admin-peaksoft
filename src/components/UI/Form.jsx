import { Box, Container, styled, Typography } from "@mui/material";
import Input from "./Input";
import UIButton from "./Button";

const Form = () => {
  return (
    <Container sx={{ width: "400px", height: "350px", padding: "30px" }}>
      <Typography paddingBottom={"30px "} variant="h6">
        Открыть регистрацию
      </Typography>
      <Box paddingBottom={"20px"}>
        <Typography paddingBottom={"14px"}>
          Название открытия регистрации
        </Typography>
        <Input placeholder="Напишите название" />
      </Box>
      <BoxFor2Inputs>
        <Box>
          <Typography paddingBottom={"14px"}>От</Typography>
          <Input type="date" />
        </Box>
        <Box>
          <Typography paddingBottom={"14px"}>До</Typography>
          <Input type="date" />
        </Box>
      </BoxFor2Inputs>
      <BoxForButtons sx={{ textAlign: "end" }}>
        <UIButton color="secondary">
          Отмена
        </UIButton>
        <UIButton  variant="contained">
          опубликовать
        </UIButton>
      </BoxForButtons>
    </Container>
  );
};

export default Form;

const BoxFor2Inputs = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  paddingBottom: "30px",
});

const BoxForButtons = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
});
