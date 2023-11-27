import { Link } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { NavLink } from "react-router-dom";

type CustomLinkProps = {to: string, display: string}

function CustomLink(props: CustomLinkProps) {
  return <Link
    color={'secondary.dark'}
    component={NavLink}
    to={props.to}
    underline="hover"
    sx={{ "&:hover": { "&:active": { color: deepOrange[600] } } }}
  >
    {props.display}
  </Link>;
}

export default CustomLink
