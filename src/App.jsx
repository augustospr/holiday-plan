import './App.css'
import { Home } from './pages/Home'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App() {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Home />
      </LocalizationProvider>
    </>
  )
}

export default App
