import "bootstrap/dist/css/bootstrap.min.css"
import React, { useEffect } from 'react';
import './App.css';
import Logged from "./routes/Logged.routes";
import Unlogged from "./routes/Unlogged.routes";
import { useSelector } from 'react-redux';

function App() {

  const { value } = useSelector((state) => state.Auth);

  useEffect(() => {
  }, [value])
  return (
    <div className="App">
      
      {value ? 
      (
        <Logged/>
      ) :
      (
        <Unlogged/>
      )
    }


    </div>
  );
}

export default App;
