import { Box, Grid, Paper, Typography } from "@mui/material";
const projects = [{text: "EON Explorer", 
                    summary: "I spearheaded the substantial customization of an existing explorer for Horizen Labs' Ethereum-style blockchain. An explorer allows a user to find all the transactions and data that are important to them and navigate to other relevant accounts and smart-contracts."

}, {text: "Text Subscription App", summary: "I developed this prototype to manage large numbers of customer text subscriptions using the Twilio API, Java, Spring Boot, React, and AWS"}]

export default function Work () {
    return (
       <Box sx={{display: 'flex', flexFlow: 'column', flexGrow:1 ,justifyContent:'safe-space-evenly'}}>
       
            {projects.map((e)=>{
                return <Paper elevation={10} sx={{flexFlow:'row' ,m:2, p:2, flexGrow:'1', color:'primary.dark'}}>
                
                <Grid container spacing={2} >
                            
                        <Grid item lg={4} component='img' src="/eon-explorer.png"/>
                        
                        <Grid item lg={8}>
                        <Grid container spacing={2}>
                        <Grid item lg={12}>
                        <Typography align='center' variant='h5'>
                            {e.text}
                        </Typography>
                        </Grid>
                        <Grid item>
                        <Typography>
                            {e.summary}
                        </Typography>
                        </Grid>
                        </Grid>
                        </Grid>
                        

                </Grid>
                </Paper>
            })}
            
  
       </Box>
    )
}