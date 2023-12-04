import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
// import Home from './components/pages/Home.jsx'
import About from "./components/pages/About.jsx";
import Projects from "./components/pages/Projects.jsx";
import WebFont from "webfontloader";
import AboutView from "./components/AboutView.jsx";

const Home = React.lazy(() => import("./components/pages/Home"));

function App() {
  useEffect(() => {
    WebFont.load({
      custom: {
        families: "tt_firs_neuelight",
        urls: ["../fonts/typetype_-_tt_firs_neue_light-webfont.woff2"],
      },
    });
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<>...</>}>
              <Home />
            </React.Suspense>
          }
        ></Route>
        <Route path="/about" element={<AboutView />}></Route>
      </Routes>
    </>
  );
}

export default App;
