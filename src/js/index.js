import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

import '../scss/_variables.scss';
import '../scss/main.scss';
const App = () => {
    return (
       <h1>Hello!</h1>
    )
}
root.render(<App/>);
