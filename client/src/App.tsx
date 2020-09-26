import React from 'react';
import './App.css';
import ResizeContextProvider from './contexts/resizeContext';


function App() {
  return (
    <ResizeContextProvider>
      <div className="App"></div>
    </ResizeContextProvider>
  );
}

export default App;
