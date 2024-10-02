import React, {useState} from "react";
import "./App.css";

import {Header} from "./layout/header/Header";


export type FilterValuesType = "all" | "active" | "completed";

function App() {
    console.log(crypto.randomUUID());

    return (
        <div className="App">
            <Header/>
        </div>
    );
}

export default App;


