import { Container, styled } from "@mui/material";
import image from "../assets/image.png";
import { NavLink, Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <>
      <StyledHeader maxWidth>
        <img style={{ width: "52px", height: "60px" }} src={image} />
        <div style={{ display: "flex", gap: "87px" }}>
          <StyledLink to="banner">Баннеры</StyledLink>
          <StyledLink to="bids">Заявки</StyledLink>
        </div>
        <p style={{ display: "flex", gap: "11px", alignItems: "center" }}>
          Администратор
        </p>
      </StyledHeader>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default AdminLayout;

const StyledHeader = styled(Container)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  height: "80px",
});

const StyledLink = styled(NavLink)({
  "&.active": {
    borderBottom: "1px solid rgb(112, 112, 112)",
    color: "rgb(0, 0, 0)",
  },
  textDecoration: "none ",
  padding: "30px 0px",
  color: "rgb(112, 112, 112)",
});
