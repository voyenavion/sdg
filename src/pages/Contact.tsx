import Link from "@mui/material/Link";
import { NavLink } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      <Link
        color="info.main"
        component={NavLink}
        to={"mailto: sgould3@gmail.com"}
        underline="hover"
      >
        {"sgould3@gmail.com"}
      </Link>
    </div>
  );
}
