import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import WebFont from "webfontloader";
import NotFound from "./components/pages/NotFound.jsx";

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
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
