
import { Box, useMediaQuery } from '@mui/material'
import './App.css'

import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import FooterMobile from './components/Main/Mobile/FooterMobile'

function App() {
  const isMobile = useMediaQuery('(max-width: 868px)')

  return (
    <Box>
    <Main />
    {isMobile ? <FooterMobile />: <Footer />}
    
    </Box>
  )
}

export default App
