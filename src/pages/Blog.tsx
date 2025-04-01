import Link from "@mui/material/Link";
import { NavLink } from "react-router-dom";
import blogConstants from "../constants/blogConstants";

export default function Blog() {
  return (
    <div>
      {blogConstants.map((e)=>{
        return (
          <Link
        color="info.main"
        component={NavLink}
        to={e.to}
        underline="hover"
      >
        {e.display} 
      </Link>
        )
      })}
    </div>
  );
}