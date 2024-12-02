import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";
import CustomLink from "../components/CustomLink";

type Project = {
  text: string;
  summary: string;
  image: string;
  links: Array<LinkInfo>;
};
type LinkInfo = { display: string; to: string };

const projects: Array<Project> = [
  {
    text: "EON Explorer",
    summary:
      "I spearheaded the substantial customization of an existing explorer for Horizen Labs' Ethereum-style blockchain. An explorer allows a user to find all the transactions and data that are important to them and navigate to other relevant accounts and smart-contracts.",
    image: "/favicon_128x128.png",
    links: [
      { display: "Site", to: "https://eon-explorer.horizenlabs.io/" },
      { display: "Code", to: "https://github.com/HorizenLabs/eon-explorer" },
    ],
  },
  {
    text: "Tic Tac Toe",
    summary:
      "Simple tic tac toe game but with a larger grid. I host it using Cloudflare pages, a very cool tool that will redeploy the code whenever there are changes to the main branch of the github repo.",
    image: "/tic-tac-toe.jpg",
    links: [
      { display: "Site", to: "https://tic-tac-toe-49o.pages.dev/" },
      { display: "Code", to: "https://github.com/voyenavion/tic-tac-toe" },
    ],
  },
  {
    text: "Text Subscription App",
    summary:
      "I developed this prototype to manage large numbers of customer text subscriptions using the Twilio API, Java, Spring Boot, React, and AWS.",
    image: "/megaphone-with-sound-waves.svg",
    links: [
      {
        display: "Front-end Code",
        to: "https://github.com/voyenavion/text-messenger",
      },
      {
        display: "Back-end Code",
        to: "https://github.com/voyenavion/textMessager",
      },
    ],
  },
  
];

export default function Work() {
  return (
    <Box
      sx={{
        display: "flex",
        flexFlow: "column",
        flexGrow: 1,
        justifyContent: "safe-space-evenly",
      }}
    >
      {projects.map((e, index) => {
        return (
          <Paper
            key={index}
            elevation={24}
            sx={{
              flexFlow: "row",
              m: 2,
              p: 2,
              flexGrow: "1",
              background: "grey.200",
            }}
          >
            <Grid container spacing={2}>
              <Grid item lg={4}>
                <Avatar sx={{width: "15rem", height: "15rem"}} src={e.image}/>
              </Grid>

              <Grid item lg={8}>
                <Grid container spacing={2}>
                  <Grid item lg={12}>
                    <Typography align="center" variant="h5">
                      {e.text}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography>{e.summary}</Typography>
                  </Grid>
                  <Grid item>
                    {e.links.map((link, index) => {
                      return (
                        <div key={index}>
                          {CustomLink({
                            link,
                            index,
                            color: "secondary",
                            newTab: true,
                          })}
                        </div>
                      );
                    })}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        );
      })}
    </Box>
  );
}
