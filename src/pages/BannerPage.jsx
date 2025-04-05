import { Box, Container, Typography } from "@mui/material";
import UIButton from "../components/UI/Button";
import UITable from "../components/UI/Table";
import { useState, useEffect } from "react";
import Modal from "../components/UI/Modal";
import Form from "../components/UI/Form";
import { useDispatch, useSelector } from "react-redux";
import { fetchBanners } from "../store/slices/bannersSlice";

const BannerPage = () => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  const { items: banners, loading } = useSelector((state) => state.banners);

  useEffect(() => {
    dispatch(fetchBanners());
  }, [dispatch]);

  const openModal = () => setModal(true);
  const onClose = () => setModal(false);

  return (
    <Container maxWidth="md">
      {modal && (
        <Modal onClose={onClose}>
          <Form onCancel={onClose} />
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
        <Box sx={{ width: "170px" }}>
          <UIButton variant="contained" onClick={openModal}>
            СОЗДАТЬ БАННЕР
          </UIButton>
        </Box>
      </Box>

      <Box sx={{ position: "relative", zIndex: 1100 }}>
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
            <span className="loader" />
          </Box>
        ) : (
          <UITable variant="banner" rows={banners} />
        )}
      </Box>
    </Container>
  );
};

export default BannerPage;
