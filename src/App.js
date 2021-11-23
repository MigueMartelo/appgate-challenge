import { Routes, Route } from 'react-router-dom';
import './App.scss';
import ApplianceStatus from './components/ApplianceStatus/ApplianceStatus';
import LoginForm from './components/LoginForm/LoginForm';

function App() {
  return (
    <div className="App">
      <h1>appgate SDP</h1>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/appliance-status" element={<ApplianceStatus />} />
      </Routes>
    </div>
  );
}

export default App;
