import { Container, Box, AppBar, Typography, Toolbar, Divider } from '@mui/material'
import { Outlet } from 'react-router-dom'
import CustomLink from './components/CustomLink'
import navConstants from './constants/navConstants'

function App() {

  return (
    <Container>
    <AppBar enableColorOnDark color='primary' position='fixed' sx={{bgcolor:'secondary'}}>
    <Container maxWidth="xl" sx={{flexFlow:'row'}}>
      <Toolbar>
      <Box>
      <Typography>
      Shaun David Gould
      </Typography>
      </Box>
      <Divider/>
      <Box color='secondary' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, flexDirection:'row-reverse', gap:'10px'  }}>
        {Object.entries(navConstants).reverse().map((e) => {
          return CustomLink(e[1])
        })
        }
      </Box>
      </Toolbar>
      </Container>
    </AppBar>
    <Toolbar />

    
    <Box sx={{ my: 4, display: "flex", justifyContent:"center" }}>
    <Outlet/>
    
    </Box>
  </Container>
  )
}

export default App
