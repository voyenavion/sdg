import Link from "@mui/material/Link";
import { NavLink } from "react-router-dom";
import { Container } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import navConstants from "../constants/navConstants";

export default function BasicBreadcrumbs() {
  return (
    <Container
      sx={{
        display: "inline-flex",
        justifyContent: "center",
        alignContent: "space-evenly",
        gap: "30px",
      }}
    >
      {navConstants.map((e, i) => {
        if (i != 0) {
          return (
            <Link
              key={i}
              component={NavLink}
              to={e.to}
              underline="hover"
              sx={{ "&:hover": { "&:active": { color: deepOrange[600] } } }}
            >
              {e.display}
            </Link>
          );
        }
      })}
    </Container>
  );
}
