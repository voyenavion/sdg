import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import './components/BasicBreadcrumbs.css'
import Home from './Home.tsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Github from './pages/Github.tsx'
import About from './pages/About.tsx'
import Music from './pages/Music.tsx'
import theme from './theme.tsx'
import navConstants from './constants/navConstants.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <ThemeProvider theme={theme}>
    <CssBaseline />
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path={navConstants.work.to} element={<Github />} />
        <Route path={navConstants.about.to} element={<About />} />
        <Route path="my-music" element={<Music />} />
      </Route>
    </Routes>
   </BrowserRouter>   
    </ThemeProvider>
  </React.StrictMode>
)
