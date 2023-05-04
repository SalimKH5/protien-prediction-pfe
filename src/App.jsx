import React from 'react'
import Introduction from './component/Introduction/Introduction'
import Navbar from './component/navbar/Navbar'
import Prediction from './component/Prediction/Prediction'

function App() {
  return (
    <div>
        <Navbar/>
        <Prediction/>
        <Introduction/>
    </div>
  )
}

export default App