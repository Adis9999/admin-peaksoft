import { Box, Container, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import UIButton from "../components/UI/Button";
import UITable from "../components/UI/Table";
import searchImg from "../assets/search.png";
import Input from "../components/UI/Input";

import { fetchBids } from "../store/slices/bidsSlice";

const BinPage = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const [searchValue, setSearchValue] = useState("");

  const { items: bids, loading } = useSelector((state) => state.bids);

  useEffect(() => {
    dispatch(fetchBids());
  }, [dispatch]);

  const handleSearchClick = () => {
    inputRef.current.focus();
  };

  const filteredBids = bids.filter((bid) => {
    const value = searchValue.toLowerCase();
    return (
      bid.name.toLowerCase().includes(value) ||
      bid.number.toLowerCase().includes(value)
    );
  });

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
            inputRef={inputRef}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
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
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
            <span className="loader" />
          </Box>
        ) : (
          <UITable variant="bids" rowForBids={filteredBids} />
        )}
      </Box>
    </Container>
  );
};

export default BinPage;
