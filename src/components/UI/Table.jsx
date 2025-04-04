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
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { useState } from "react";

const UITable = () => {
  const [row, setRow] = useState([]);
  const rows = [
    {
      title: "FrontEnd and BackEnd",
      startDate: "20.11.2023",
      endDate: "20.12.2024",
      id: 1,
    },
  ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                width: "20px",
              }}
            >
              {" "}
            </TableCell>
            <TableCell
              sx={{
                width: "20px",
              }}
              align="center"
            >
              №
            </TableCell>
            <TableCell
              sx={{
                width: "700px",
              }}
              align="left"
            >
              Название
            </TableCell>
            <TableCell
              sx={{
                width: "110px",
              }}
              align="left"
            >
              Дата создания
            </TableCell>
            <TableCell
              sx={{
                width: "110px",
              }}
              align="left"
            >
              Дата окончания
            </TableCell>
            <TableCell
              sx={{
                width: "70px",
              }}
              align="right"
            >
              Действия
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Checkbox />
              </TableCell>
              <TableCell>{row.id}</TableCell>
              <TableCell align="left">{row.title}</TableCell>
              <TableCell align="left">{row.startDate}</TableCell>
              <TableCell align="left">{row.endDate}</TableCell>
              <TableCell align="center"
                sx={{
                  display: "flex",
                  justifyContent:"center",
                  gap:"25px",
                  alignItems: "center",
                }}
              >
                <StyledEditAndDelete>✎</StyledEditAndDelete>
                <StyledEditAndDelete>🗑</StyledEditAndDelete>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UITable;

const StyledEditAndDelete = styled(Typography)({
  cursor: "pointer",
});
