// import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import TvPage from "./pages/TvPage";
import MovieDetail from "./pages/MovieDetail";
import TvDetail from "./pages/TvDetail";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/tv" element={<TvPage/>}/>
                <Route path="/mobie/:id" element={<MovieDetail/>}/>
                <Route path="/Tv/:id" element={<TvDetail/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
