import { Box, Container, Typography } from "@mui/material";
import BasicBreadcrumbs from "./components/BasicBreadcrumbs";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexFlow: "column",
        alignContent: "center",
        justifyContent: "space-between",
        gap: "50px",
      }}
    >
      <Container sx={{ display: "inline-flex", justifyContent: "center" }}>
        <Typography color="white" fontSize={30}>
          {/* Shaun David Goulds */}
        </Typography>
      </Container>
      <Container sx={{ display: "inline-flex", justifyContent: "center" }}>
        <img
          src="/IMG_5460.jpg"
          style={{ maxWidth: "50%", height: "auto" }}
        ></img>
      </Container>

      <BasicBreadcrumbs />
    </Box>
  );
}
