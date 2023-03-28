import React from 'react'
import './App.css'
import Covidstates from './components/Covidstates'
import Footer from './components/Footer'
import Home from './components/Home'
import Whatcorona from './components/Whatcorona'

const App = () => {
  return (
    <>
    <div className='App'>
      <Home/>
    {/* <Covidstates/> */}
    <Whatcorona/>
    <Footer/>
  
    </div>
    </>
  )
}

export default App