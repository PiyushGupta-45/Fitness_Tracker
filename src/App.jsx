import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import Layout from './Layout'

import Home from './Website/Home'
import About from './Website/About'
import Goals from './Website/Goals/Goals'
import Contact from './Website/Contact'
import CaloriesCalculator from './Website/CaloriesCalculator'
import BMR from './Website/BMR'

import Tracking from './Website/Track_Workout/Tracking'
import Posture from './Website/check_Posture/Posture'

import Running from './Website/Track_Workout/Cardio/running'
import Back from './Website/Track_Workout/Back/Back'
import Chest from './Website/Track_Workout/Chest/Chest'
import Biceps from './Website/Track_Workout/Arms/Biceps'
import Legs from './Website/Track_Workout/Legs/Legs'
import Shoulder from './Website/Track_Workout/Shoulder/Shoulder'

import Posture_Running from './Website/check_Posture/Posture-Cardio/running'
import Posture_Back from './Website/check_Posture/Posture-Back/Back'
import Posture_Chest from './Website/check_Posture/Posture-Chest/Chest'
import Posture_Biceps from './Website/check_Posture/Posture-Arms/Biceps'
import Posture_Legs from './Website/check_Posture/Posture-Legs/Legs'
import Posture_Shoulder from './Website/check_Posture/Posture-Shoulder/Shoulder'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/goals' element={<Goals/>}/>
        <Route path='/bmr' element={<BMR/>}/>
        <Route path='/calories-calculator' element={<CaloriesCalculator/>}/>

        <Route path='/tracking' element={<Tracking/>}/>
        <Route path='/posture' element={<Posture/>}/>
        
        <Route path='/Track-running' element={<Running/>}/>
        <Route path='/Track-back' element={<Back/>}/>
        <Route path='/Track-chest' element={<Chest/>}/>
        <Route path='/Track-arms' element={<Biceps/>}/>
        <Route path='/Track-legs' element={<Legs/>}/>
        <Route path='/Track-shoulder' element={<Shoulder/>}/>
        
        <Route path='/running' element={<Posture_Running/>}/>
        <Route path='/back' element={<Posture_Back/>}/>
        <Route path='/chest' element={<Posture_Chest/>}/>
        <Route path='/arms' element={<Posture_Biceps/>}/>
        <Route path='/legs' element={<Posture_Legs/>}/>
        <Route path='/shoulder' element={<Posture_Shoulder/>}/>


      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
