import { createRoot } from 'react-dom/client'
import{ App }from './App.jsx'
import { globalData } from './db/db.js'

createRoot(document.getElementById('root')).render(
    <App globalData={globalData}/>
)
