import { Box, Container } from "@mui/material";
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
        <img
          src="/shaun-cropped.svg"
          style={{ maxWidth: "100%", height: "auto" }}
        ></img>
      </Container>

      <BasicBreadcrumbs />
    </Box>
  );
}
