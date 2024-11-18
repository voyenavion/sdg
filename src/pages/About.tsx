import { Paper, Typography } from "@mui/material";

export default function About() {
  return (
    <Paper
      elevation={24}
      sx={{
        flexFlow: "row",
        m: 2,
        p: 2,
        flexGrow: "1",
        background: "grey.200",
      }}
    >
      <Typography>
        {
          "I'm Shaun Gould, a full stack developer with 8 years of hard-won experience. The three things that fire me up about coding are: constant learning, mentorship, and breaking-through tough problems. I have deep experience in Java, React, and database management. Some skills that set me apart are proficiency with the Elixir language as well as advanced skills with docker tools. When I'm not coding or spending quality time with my family, I enjoy rock climbing and playing my guitar."
        }
      </Typography>
    </Paper>
  );
}
