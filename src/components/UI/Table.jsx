import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Checkbox,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Modal,
  Box,
  Container,
} from "@mui/material";
import UIButton from "./Button";
import Form from "./Form";
import { deleteBanner } from "../../store/slices/bannersSlice";
import { deleteBid } from "../../store/slices/bidsSlice";

const StyledEditAndDelete = styled(Typography)({
  cursor: "pointer",
  margin: "0 6px",
  "&:hover": {
    color: "#1976d2",
  },
});

const BoxForButtons = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
});

const UITable = ({ variant, rows, rowForBids }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentRow, setCurrentRow] = useState(null);
  const [checkedIds, setCheckedIds] = useState({});
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteItem, setDeleteItem] = useState(null);

  const dispatch = useDispatch();

  const handleEdit = (row) => {
    setCurrentRow(row);
    setModalOpen(true);
  };

  const handleDelete = (row) => {
    if (!checkedIds[row.id]) return;
    setDeleteItem(row);
    setDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    try {
      if (variant === "banner") {
        await dispatch(deleteBanner(deleteItem.id));
      } else if (variant === "bids") {
        await dispatch(deleteBid(deleteItem.id));
      }
      setCheckedIds((prev) => {
        const updated = { ...prev };
        delete updated[deleteItem.id];
        return updated;
      });
      setDeleteModalOpen(false);
    } catch (err) {
      console.error("Ошибка при удалении:", err);
    }
  };

  const handleCheckboxChange = (id) => {
    setCheckedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const data = variant === "banner" ? rows : rowForBids;

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="center">№</TableCell>
              {variant === "banner" ? (
                <>
                  <TableCell align="left">Название</TableCell>
                  <TableCell align="left">Дата создания</TableCell>
                  <TableCell align="left">Дата окончания</TableCell>
                </>
              ) : (
                <>
                  <TableCell align="left">Имя</TableCell>
                  <TableCell align="center">Номер телефона</TableCell>
                </>
              )}
              <TableCell align="center">Действия</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id} hover>
                <TableCell>
                  <Checkbox
                    checked={!!checkedIds[row.id]}
                    onChange={() => handleCheckboxChange(row.id)}
                  />
                </TableCell>
                <TableCell align="center">{row.id}</TableCell>
                {variant === "banner" ? (
                  <>
                    <TableCell align="left">{row.title}</TableCell>
                    <TableCell align="left">{row.startDate}</TableCell>
                    <TableCell align="left">{row.endDate}</TableCell>
                  </>
                ) : (
                  <>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="center">{row.number}</TableCell>
                  </>
                )}
                <TableCell align="center">
                  {variant === "banner" && (
                    <StyledEditAndDelete onClick={() => handleEdit(row)}>
                      ✎
                    </StyledEditAndDelete>
                  )}
                  <StyledEditAndDelete onClick={() => handleDelete(row)}>
                    🗑
                  </StyledEditAndDelete>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Modal for Edit */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Form
          initialData={currentRow || { title: "", startDate: "", endDate: "" }}
          onCancel={() => setModalOpen(false)}
        />
      </Modal>

      <Modal open={isDeleteModalOpen} onClose={() => setDeleteModalOpen(false)}>
        <Container
          sx={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            maxWidth: "400px",
          }}
        >
          <Typography variant="h5" mb={2}>
            Вы уверены, что хотите удалить?
          </Typography>
          <StyledBoxForDelete>
            <UIButton
              type="button"
              color="secondary"
              onClick={() => setDeleteModalOpen(false)}
            >
              ОТМЕНИТЬ
            </UIButton>
            <UIButton type="submit" variant="contained" onClick={confirmDelete}>
              УДАЛИТЬ
            </UIButton>
          </StyledBoxForDelete>
        </Container>
      </Modal>
    </>
  );
};

export default UITable;

const StyledBoxForDelete = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  gap: "16px",
  marginTop: "20px",
});
