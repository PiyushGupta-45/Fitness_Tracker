import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Website/Home'
import About from './Website/About'
import Contact from './Website/Contact'
import Tracking from './Website/Track_Workout/tracking'
import Posture from './Website/check_Posture/Posture'
import Goals from './Website/Goals/Goals'
import Running from './Website/Track_Workout/Cardio/running'
import Back from './Website/Track_Workout/Back/Back'
import Chest from './Website/Track_Workout/Chest/Chest'
import Biceps from './Website/Track_Workout/Arms/Biceps'
import Legs from './Website/Track_Workout/Legs/Legs'
import BMR from './Website/BMR'
import CaloriesCalculator from './Website/CaloriesCalculator'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/tracking' element={<Tracking/>}/>
        <Route path='/posture' element={<Posture/>}/>
        <Route path='/goals' element={<Goals/>}/>
        <Route path='/running' element={<Running/>}/>
        <Route path='/back' element={<Back/>}/>
        <Route path='/chest' element={<Chest/>}/>
        <Route path='/arms' element={<Biceps/>}/>
        <Route path='/legs' element={<Legs/>}/>
        <Route path='/bmr' element={<BMR/>}/>
        <Route path='/calories-calculator' element={<CaloriesCalculator/>}/>
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
