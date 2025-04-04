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
    title: "FrontEnd and BackEnd",
    startDate: "20.11.2023",
    endDate: "20.12.2024",
    id: 1,
  },
];
const UITable = ({ variant }) => {
  const [row, setRow] = useState([]);
  const [course, setCourse] = useState(false);

  const showcourse = () => {
    setCourse(true);
  };

  return course ? (
    <TableContainer component={Paper}>
      <Table
        sx={{
          minWidth: 650,
          "& .MuiTableCell-root": {
            padding: "12px 16px",
            borderBottom: "1px solid rgba(224, 224, 224, 1)",
          },
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox" sx={{ width: 48 }}></TableCell>
            <TableCell align="center" sx={{ width: 60 }}>
              №
            </TableCell>
            <TableCell align="left" sx={{ minWidth: 120 }}>
              Имя
            </TableCell>
            <TableCell align="left" sx={{ minWidth: 120 }}>
              Фамилия
            </TableCell>
            <TableCell align="left" sx={{ minWidth: 150 }}>
              Телефон
            </TableCell>
            <TableCell align="left" sx={{ minWidth: 120 }}>
              Дата рождения
            </TableCell>
            <TableCell align="left" sx={{ minWidth: 180 }}>
              Email
            </TableCell>
            <TableCell align="left" sx={{ minWidth: 100 }}>
              Позиция
            </TableCell>
            <TableCell align="center" sx={{ width: 120 }}>
              Действия
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courseRows.map((row) => (
            <TableRow key={row.id} hover>
              <TableCell padding="checkbox">
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
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "68px",
                  gap: 2,
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
  ) : (
    <TableContainer component={Paper}>
      {variant === "banner" && (
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
                <TableCell align="left" onClick={() => showcourse()}>
                  {row.title}
                </TableCell>
                <TableCell align="left">{row.startDate}</TableCell>
                <TableCell align="left">{row.endDate}</TableCell>
                <TableCell
                  align="center"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "25px",
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
      )}
      {variant === "bids" && (
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
                  width: "100px",
                }}
                align="left"
              >
                Имя
              </TableCell>
              <TableCell
                sx={{
                  width: "950px",
                }}
                align="center"
              >
                Номер телефона
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
            {rowForBids.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Checkbox />
                </TableCell>
                <TableCell>{row.id}</TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="center">{row.number}</TableCell>
                <TableCell
                  align="center"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "68px",
                    gap: 2,
                  }}
                >
                  <StyledEditAndDelete>✎</StyledEditAndDelete>
                  <StyledEditAndDelete>🗑</StyledEditAndDelete>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
};

export default UITable;

const StyledEditAndDelete = styled(Typography)({
  cursor: "pointer",
});
