import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Contactos from './components/Contactos';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  return (
    <div className={isDarkTheme ? 'App dark-theme' : 'App light-theme'}>
      <Header isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
      <Contactos />
      <Footer />
    </div>
  )
}

export default App
