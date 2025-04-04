import { Box, Container, InputBase, styled, Typography } from "@mui/material";
import UIButton from "../components/UI/Button";
import UITable from "../components/UI/Table";
import searchImg from "../assets/search.png";
import Input from "../components/UI/Input";
import { useRef } from "react";

const BinPage = () => {
  const inputRef = useRef();

  const handleSearchClick = () => {
    inputRef.current.focus();
  };

  return (
    <Container maxWidth>
      <Box
        sx={{
          height: "150px",
          display: "flex",
          flexDirection: "column",
          padding: "18px",
          gap: "36px",
        }}
      >
        <Typography variant="h5">Заявки</Typography>
        <Box sx={{ width: "668px", display: "flex", alignItems: "center" }}>
          <Input
            inputRef={inputRef} // Передаем ref в ваш Input компонент
            placeholder="Введите имя, фамилию или номер телефона"
            sx={{ width: "100%" }}
          />
          <img
            src={searchImg}
            style={{
              position: "relative",
              width: "19px",
              height: "19px",
              left: "-30px",
              cursor: "pointer",
            }}
            onClick={handleSearchClick}
            alt="Search"
          />
        </Box>
      </Box>
      <Box sx={{ mt: 3 }}>
        <UITable variant="bids" />
      </Box>
    </Container>
  );
};

export default BinPage;
