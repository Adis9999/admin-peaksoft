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
  const [course, setCourse] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentRow, setCurrentRow] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteItem, setDeleteItem] = useState(null);

  const dispatch = useDispatch();

  const handleEdit = (row) => {
    setCurrentRow(row);
    setModalOpen(true);
  };

  const handleDelete = (row) => {
    if (!isChecked) {
      alert("Пожалуйста, выберите элемент для удаления");
      return;
    }
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
      setDeleteModalOpen(false);
    } catch (err) {
      console.error("Ошибка при удалении:", err);
    }
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          {variant === "banner" && (
            <>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Checkbox
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                  </TableCell>
                  <TableCell align="center">№</TableCell>
                  <TableCell align="left">Название</TableCell>
                  <TableCell align="left">Дата создания</TableCell>
                  <TableCell align="left">Дата окончания</TableCell>
                  <TableCell align="center">Действия</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id} hover>
                    <TableCell>
                      <Checkbox
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                    </TableCell>
                    <TableCell align="center">{row.id}</TableCell>
                    <TableCell align="left">{row.title}</TableCell>
                    <TableCell align="left">{row.startDate}</TableCell>
                    <TableCell align="left">{row.endDate}</TableCell>
                    <TableCell align="center">
                      <StyledEditAndDelete onClick={() => handleEdit(row)}>
                        ✎
                      </StyledEditAndDelete>
                      <StyledEditAndDelete onClick={() => handleDelete(row)}>
                        🗑
                      </StyledEditAndDelete>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </>
          )}
          {variant === "bids" && (
            <>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Checkbox
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                  </TableCell>
                  <TableCell align="center">№</TableCell>
                  <TableCell align="left">Имя</TableCell>
                  <TableCell align="center">Номер телефона</TableCell>
                  <TableCell align="center">Действия</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rowForBids.map((row) => (
                  <TableRow key={row.id} hover>
                    <TableCell>
                      <Checkbox
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                    </TableCell>
                    <TableCell align="center">{row.id}</TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="center">{row.number}</TableCell>
                    <TableCell align="center">
                      <StyledEditAndDelete onClick={() => handleDelete(row)}>
                        🗑
                      </StyledEditAndDelete>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </>
          )}
        </Table>
      </TableContainer>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Form
          initialData={currentRow || { title: "", startDate: "", endDate: "" }}
          onCancel={() => setModalOpen(false)}
          onSubmit={(formData) => console.log("Сохранить:", formData)}
        />
      </Modal>

      <Modal open={isDeleteModalOpen} onClose={() => setDeleteModalOpen(false)}>
        <Container
          sx={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <Typography variant="h3">Удалить</Typography>
          <Typography variant="h5">Вы уверены?</Typography>
          <StyledBoxForDelete>
            <UIButton
              type="button"
              color="secondary"
              onClick={() => setDeleteModalOpen(false)}
            >
              ОТМЕНИТЬ
            </UIButton>
            <UIButton
              type="submit"
              variant="contained"
              onClick={() => confirmDelete()}
            >
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
});
