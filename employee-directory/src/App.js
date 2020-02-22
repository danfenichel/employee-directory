import React from 'react';
// import logo from './logo.svg';
import Header from "./components/Header";
import EnhancedTable from "./components/Table";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <EnhancedTable />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
