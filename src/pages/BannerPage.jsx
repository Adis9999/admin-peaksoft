import { Box, Container, Typography } from "@mui/material";
import UIButton from "../components/UI/Button";
import UITable from "../components/UI/Table";

const BannerPage = () => {
    
  return (
    <Container maxWidth>
      <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",height:"100px"}}>
        <Typography variant="h5">Баннер</Typography>
        <Box>
        <UIButton variant="contained">СОЗДАТЬ БАННЕР</UIButton>
        </Box>
      </Box>
      <Box>
        <UITable variant="banner" />
      </Box>
    </Container>
  );
};

export default BannerPage;
