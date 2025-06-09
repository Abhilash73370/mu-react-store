
import { createRoot } from 'react-dom/client' // virtual createroot is created 
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(<App/>); 



// pointing to physical div elemts and making a copy of it and in that it is rendering app components.