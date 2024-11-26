
import './App.css'
import Header from './components/Header'
import QuestForm from './views/questForm'
import { Routes, Route } from 'react-router-dom'
import IndexPage from './views/IndexPage'
// life quest app thats a to do list that gives you upgrades.
// features -  you make a new character. 
//you add life tasks as quests or side quests depending on priority.
//you complete tasks to get currency for upgrades and to survive. 
// if you dont comeplete a quest each day your character will lose lives and will eventually die and you have to remake a charcter.
//

// maybe learn next?

//log in registration.
//user crud
//create a character 
// create the quest form 


function App() {
  

  return (
    <>
    <Routes>
      
      <Route index element={<IndexPage/>}/>
      
    </Routes>
    </>
  )
}

export default App
