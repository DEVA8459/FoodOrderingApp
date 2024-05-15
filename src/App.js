import React from "react";
import ReactDOM from 'react-dom/client';

const AppLayout=()=>{
    return(
        <>
        <h1>React Started</h1>
        <h1>MyLord for git</h1>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)