
import NavBar from './components/NavBar/NavBar' 
import './App.css'
import { Suspense } from 'react'
import Pricing from './components/pricingOptions/Pricing'

const pricingPromise =fetch('priccingData.JSON').then(res => res.json()) 

function App() {
 

  return (
    <>
    <header>
<NavBar></NavBar>
    </header>
<main>


  <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
<Pricing pricingPromise={pricingPromise}></Pricing>
 
  </Suspense>
</main>
      
     
    </>
  )
}

export default App
