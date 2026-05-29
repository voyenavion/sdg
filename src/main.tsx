import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Work from "./pages/Work";
import About from "./pages/About";
import theme from "./theme";
import navConstants from "./constants/navConstants";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import blogConstants from "./constants/blogConstants";
import AnimationChOne from "./blog/animation/AnimationChOne";
import MortgageCalculator from './blog/mortgage-calculator/MortgageCalculator';
import AnimationChTwo from "./blog/animation/AnimationChTwo";
import StrangeGrace from "./upperfields/StrangeGrace";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path={navConstants[0].to} element={<App />}>
            <Route index element={<Home />} />
            <Route path={navConstants[1].to} element={<Work />} />
            <Route path={navConstants[2].to} element={<About />} />
            <Route path={navConstants[3].to} element={<Contact />} />
            <Route path={navConstants[4].to} element={<Blog />} />
            <Route
              path={`blog/${blogConstants[0].to}`}
              element={<AnimationChOne />}
            />
            <Route
              path={`blog/${blogConstants[1].to}`}
              element={<MortgageCalculator />}
            />
            <Route
              path={`blog/${blogConstants[2].to}`}
              element={<AnimationChTwo />}
            />
          </Route>
          <Route path={"upperfields/strange-grace"} element={<StrangeGrace/>}>

          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
