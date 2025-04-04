import { Box, Container, Typography } from "@mui/material";
import UIButton from "../components/UI/Button";
import UITable from "../components/UI/Table";
import { useState } from "react";
import Modal from "../components/UI/Modal";
import Form from "../components/UI/Form";

const BannerPage = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const onClose = () => {
    setModal(false);
  };

  return (
    <Container maxWidth>
      {modal && (
        <Modal onClose={onClose}>
          <Form />
        </Modal>
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100px",
        }}
      >
        <Typography variant="h5">Баннер</Typography>
        <Box>
          <UIButton variant="contained" onClick={openModal}>
            СОЗДАТЬ БАННЕР
          </UIButton>
        </Box>
      </Box>
      <Box sx={{ position: "relative", zIndex: 1100 }}>
        <UITable variant="banner" />
      </Box>
    </Container>
  );
};

export default BannerPage;
