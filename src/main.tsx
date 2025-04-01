import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home.tsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Work from "./pages/Work.tsx";
import About from "./pages/About.tsx";
import theme from "./theme.tsx";
import navConstants from "./constants/navConstants.tsx";
import Contact from "./pages/Contact.tsx";
import Blog from "./pages/Blog.tsx";
import blogConstants from "./constants/blogConstants.tsx";
import AnimationChOne from "./blog/AnimationChOne.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
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
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
