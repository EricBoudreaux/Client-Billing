import './App.css';
import { useState } from 'react';



import BlackBar from './Components/BlackBar'
import PageHeading from './Components/PageHeading'
import PopUp from './Components/PopUp';
import ConnectBoxOne from './Components/ConnectBoxOne';
import ConnectBoxTwo from './Components/ConnectBoxTwo';
import Importing from './Components/Importing';
import Dashboard from './Components/Dashboard';
import ConnectedBoxOne from './Components/ConnectedBoxOne'



function App() {

const [showPop, setShowPop] = useState(false)
const [showSubText, setShowSubText] = useState(true)
const [showConnectOne, setShowConnectOne] = useState(true)
const [showConnectTwo, setShowConnectTwo] = useState(false)
const [showDashboard, setShowDashboard] = useState(false)
const [showImporting, setShowImporting] = useState(false)
const [showConnectedBoxOne, setShowConnectedBoxOne] = useState(false)

const handleShowPopup = () => {
  setTimeout(() => {
    setShowPop(true);
  }, 100);
  setShowPop(false);
};

const advanceStep = (e) => {
  e.preventDefault()
  setShowConnectOne(false)
  setShowPop(false)
  setShowConnectTwo(true)
}

const backStep = (e) => {
  e.preventDefault()
  setShowConnectOne(true)
  setShowConnectTwo(false)
  setShowPop(true)
}

const finishSetup =(e) => {
  e.preventDefault()
  setShowSubText(false)
  setShowPop(false)
  setShowConnectTwo(false)
  setShowDashboard(true)
  setShowImporting(true)

  setTimeout(() => {
    setShowDashboard(false)
    setShowImporting(false)
    setShowConnectedBoxOne(true);
  }, 5000);
  ;
}

const plsHireMe = (e) => {
  e.preventDefault()
  alert('Pls hire me :)')
}
  return (
    <div className="App">

      <BlackBar />
      <PageHeading showSubText={showSubText}/>
      {showPop && <PopUp />}
      {showConnectOne && <ConnectBoxOne handleClick={advanceStep} handleMouseOver={handleShowPopup}/>}
      {showConnectTwo && <ConnectBoxTwo handleClick={backStep} handleSubmit={finishSetup}/>}
      {showDashboard && <Dashboard />}
      {showImporting && <Importing />}
      {showConnectedBoxOne && <ConnectedBoxOne handleClick={plsHireMe}/>}
      {}
    </div>
  );
}

export default App;
