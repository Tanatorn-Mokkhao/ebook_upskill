import './App.css';
import Signin from './container/signin/signin';
import { Route, Routes } from "react-router-dom"; 

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<Signin  />}/>
    </Routes>
  );
}

export default App;
