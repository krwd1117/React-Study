import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Signin from "./Pages/Signin";
import Add from "./Pages/Add";
import Detail from "./Pages/Detail";
import Edit from "./Pages/Edit";
import Error from "./Pages/Error";

function App() {
    return (
        <ErrorBoundary FallbackComponent={Error}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/edit/:id" element={<Edit />} />
                    <Route path="/book/:id" element={<Detail />} />
                    <Route path="/add" element={<Add />} />
                    <Route element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </ErrorBoundary>
    );
}

export default App;
