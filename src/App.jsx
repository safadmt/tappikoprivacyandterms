import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import TermsAndConditions from './pages/TermsandConditions'
import TappikoHomepage from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<TappikoHomepage/>}/>
        <Route path='/termsandconditions' element={<TermsAndConditions/>}/>
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>

      </Routes>
    </>
  )
}

export default App
