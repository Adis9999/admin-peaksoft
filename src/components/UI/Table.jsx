import { useState } from "react";
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
  TextField,
} from "@mui/material";
import UIButton from "./Button";
import Form from "./Form";

const StyledEditAndDelete = styled(Typography)({
  cursor: "pointer",
  "&:hover": {
    color: "#1976d2",
  },
});

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

// Ваши оригинальные данные
const courseRows = [
  {
    id: 1,
    name: "Шарангат",
    surname: "Шарангат",
    phone: "+996 707 123 456",
    birthDate: "12.12.1990",
    email: "shangshan@gmail.com",
    position: "Front-end",
  },
  {
    id: 2,
    name: "Шарангат",
    surname: "Шарангат",
    phone: "+996 707 123 456",
    birthDate: "12.12.1990",
    email: "shangshan@gmail.com",
    position: "Back-end",
  },
];

const rowForBids = [
  {
    id: 1,
    name: "Гльчапчап",
    number: "+996 707 123 456",
  },
  {
    id: 2,
    name: "Астанбек",
    number: "+996 777 999 666",
  },
];

const rows = [
  {
    id: 1,
    title: "FrontEnd and BackEnd",
    startDate: "20.11.2023",
    endDate: "20.12.2024",
  },
];
const UITable = ({ variant }) => {
  const [course, setCourse] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentRow, setCurrentRow] = useState(null);

  const handleEdit = (row) => {
    setCurrentRow(row);
    setModalOpen(true);
  };

  const handleDelete = (row) => {
    console.log("Удалить:", row);
  };

  const handleSubmit = (formData) => {
    console.log("Сохранить:", formData);
    setModalOpen(false);
  };

  const showcourse = () => {
    setCourse(true);
  };

  return (
    <>
      <TableContainer component={Paper}>
        {course ? (
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: "20px" }}></TableCell>
                <TableCell sx={{ width: "20px" }} align="center">
                  №
                </TableCell>
                <TableCell sx={{ minWidth: "120px" }} align="left">
                  Имя
                </TableCell>
                <TableCell sx={{ minWidth: "120px" }} align="left">
                  Фамилия
                </TableCell>
                <TableCell sx={{ minWidth: "150px" }} align="left">
                  Телефон
                </TableCell>
                <TableCell sx={{ minWidth: "120px" }} align="left">
                  Дата рождения
                </TableCell>
                <TableCell sx={{ minWidth: "180px" }} align="left">
                  Email
                </TableCell>
                <TableCell sx={{ minWidth: "100px" }} align="left">
                  Позиция
                </TableCell>
                <TableCell sx={{ width: "120px" }} align="center">
                  Действия
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {courseRows.map((row) => (
                <TableRow key={row.id} hover>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell align="center">{row.id}</TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.surname}</TableCell>
                  <TableCell align="left">{row.phone}</TableCell>
                  <TableCell align="left">{row.birthDate}</TableCell>
                  <TableCell align="left">{row.email}</TableCell>
                  <TableCell align="left">{row.position}</TableCell>
                  <TableCell
                    align="center"
                    sx={{ display: "flex", gap: "8px" }}
                  >
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
          </Table>
        ) : (
          <>
            {variant === "banner" && (
              <Table sx={{ minWidth: 650 }}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ width: "20px" }}></TableCell>
                    <TableCell sx={{ width: "20px" }} align="center">
                      №
                    </TableCell>
                    <TableCell sx={{ width: "700px" }} align="left">
                      Название
                    </TableCell>
                    <TableCell sx={{ width: "110px" }} align="left">
                      Дата создания
                    </TableCell>
                    <TableCell sx={{ width: "110px" }} align="left">
                      Дата окончания
                    </TableCell>
                    <TableCell sx={{ width: "70px" }} align="right">
                      Действия
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id} hover>
                      <TableCell>
                        <Checkbox />
                      </TableCell>
                      <TableCell align="center">{row.id}</TableCell>
                      <TableCell align="left" onClick={showcourse}>
                        {row.title}
                      </TableCell>
                      <TableCell align="left">{row.startDate}</TableCell>
                      <TableCell align="left">{row.endDate}</TableCell>
                      <TableCell
                        align="center"
                        sx={{ display: "flex", gap: "8px" }}
                      >
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
              </Table>
            )}
            {variant === "bids" && (
              <Table sx={{ minWidth: 650 }}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ width: "20px" }}></TableCell>
                    <TableCell sx={{ width: "20px" }} align="center">
                      №
                    </TableCell>
                    <TableCell sx={{ width: "100px" }} align="left">
                      Имя
                    </TableCell>
                    <TableCell sx={{ width: "950px" }} align="center">
                      Номер телефона
                    </TableCell>
                    <TableCell sx={{ width: "70px" }} align="right">
                      Действия
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rowForBids.map((row) => (
                    <TableRow key={row.id} hover>
                      <TableCell>
                        <Checkbox />
                      </TableCell>
                      <TableCell align="center">{row.id}</TableCell>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="center">{row.number}</TableCell>
                      <TableCell
                        align="center"
                        sx={{ display: "flex", gap: "8px" }}
                      >
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
              </Table>
            )}
          </>
        )}
      </TableContainer>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        
          <Form
            initialData={
              currentRow || { title: "", startDate: "", endDate: "" }
            }
            onCancel={() => setModalOpen(false)}
            onSubmit={handleSubmit}
          />
      </Modal>
    </>
  );
};

export default UITable;
