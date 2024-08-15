import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './Components/Header/Nav/Nav.jsx'
import Section1 from './Pages/HomePage/Section1.jsx';
import Section2 from './Pages/HomePage/Section2.jsx';
import Footer from './Components/Footer/Footer.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(

  <>
  <NavBar />
  <Section1 />
  <div id='upSection2'>
  <div className='container p-5'>
  <div className='d-flex justify-content-center gap-3'>
  
  <Section2 aboveDivP1="HATCHLING PLAN" aboveDivPice="$29" aboveDivP2="PER MONTH" bgColor="grediant1">
      <ul>
          <li> Unlimited Support</li>
          <li> 5GB Server Space </li>
          <li> 2 Users per Project</li>
          <li> Email Integration </li>
          <li> Unlimited Download</li>
      </ul>
  </Section2>
  <Section2 aboveDivP1="BABY PLAN" aboveDivPice="$69" aboveDivP2="PER MONTH" bgColor="grediant2">
  <ul>
          <li> Unlimited Support</li>
          <li> 10GB Server Space </li>
          <li> 5 Users per Project</li>
          <li> Email Integration </li>
          <li> Unlimited Download</li>
   </ul>
  </Section2>
  
  <Section2 aboveDivP1="PREMIUM PLAN" aboveDivPice="$99" aboveDivP2="PER MONTH" bgColor="grediant3">
  <ul>
          <li> Unlimited Support</li>
          <li> 25GB Server Space </li>
          <li> 10 Users per Project</li>
          <li> Email Integration </li>
          <li> Unlimited Download</li>
      </ul>
  </Section2>
  
  </div>
  </div>
  </div>
  <Footer />
  </>
)











