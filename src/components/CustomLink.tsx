import { Link } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { NavLink } from "react-router-dom";

type CustomLinkProps = {
  link: { to: string; display: string };
  index: number;
  color?: string;
  newTab?: boolean;
};

function CustomLink(props: CustomLinkProps) {
  let link;
  if (!props.newTab) {
    link = (
      <Link
        key={props.index}
        color={props.color ?? "common.white"}
        component={NavLink}
        to={props.link.to}
        underline="hover"
        sx={{ "&:hover": { "&:active": { color: deepOrange[600] } } }}
      >
        {props.link.display}
      </Link>
    );
  } else {
    link = (
      <Link
        key={props.index}
        color={props.color ?? "common.white"}
        href={props.link.to}
        target="_blank"
        rel="noreferrer"
        underline="hover"
      >
        {props.link.display}
      </Link>
    );
  }
  return link;
}

export default CustomLink;
