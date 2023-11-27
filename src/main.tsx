import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from './Home.tsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Work from './pages/Work.tsx'
import About from './pages/About.tsx'
import theme from './theme.tsx'
import navConstants from './constants/navConstants.tsx';
import Contact from './pages/Contact.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <ThemeProvider theme={theme}>
    <CssBaseline />
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path={navConstants.work.to} element={<Work />} />
        <Route path={navConstants.about.to} element={<About />} />
        <Route path={navConstants.contact.to} element={<Contact />} />
      </Route>
    </Routes>
   </BrowserRouter>   
    </ThemeProvider>
  </React.StrictMode>
)
