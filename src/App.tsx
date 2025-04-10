import {
  AppBar,
  Box,
  Container,
  Divider,
  Link,
  Toolbar,
  Typography
} from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { NavLink, Outlet } from 'react-router-dom';
import CustomLink from "./components/CustomLink";
import navConstants from "./constants/navConstants";

function App() {
  return (
    <Container maxWidth="lg">
      <AppBar enableColorOnDark color="primary" position="fixed">
        <Container maxWidth="xl" sx={{ flexFlow: 'row' }}>
          <Toolbar>
            <Box>
              <Link
                to={navConstants[0].to}
                color={'common.white'}
                component={NavLink}
                underline='none'
                sx={{'&:active': { color: deepOrange[400] }  }}
              >
                <Typography variant="h5">Shaun David Gould</Typography>
              </Link>
            </Box>
            <Divider />
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                flexDirection: 'row-reverse',
                gap: '10px'
              }}
            >
              {navConstants
                .filter((e) => {
                  return e.display !== navConstants[0].display;
                })
                .reverse()
                .map((e, index) => {
                  return CustomLink({ link: e, index: index });
                })}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />

      <Box sx={{ my: 4, display: 'flex', justifyContent: 'center' }}>
        <Outlet />
      </Box>
    </Container>
  );
}

export default App;
