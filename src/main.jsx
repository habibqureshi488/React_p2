
import {createRoot} from 'react-dom/client'
import App from './App';
const container = document.getElementById("root");

const root = createRoot(container);
root.render(
    // React.createElement("h1" , {} , "hello React")
   <App />
)