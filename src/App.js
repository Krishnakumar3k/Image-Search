import React, { useState } from 'react';
import SearchImg from './components/SearchImg';
import CanvasImg from './components/CanvasImg';
import './App.css';


function App() {
  const [selectedImage, setSelectedImage] = useState('');

  return (
    <>

      <nav className="navbar bg-gray-800 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
        
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-bold">Image Search App</h1>
          </div>
         
        <ul className="hidden md:flex space-x-4"> 
            <li><a href="https://sdekrishna.netlify.app/" className="hover:text-blue-400">Krishna Kumar</a></li>
           </ul>
          
          <div className="md:hidden">
            <button className="text-white">☰</button> 
          </div>
        </div>
      </nav>

     
      <div className="container justify-center mx-auto p-4">
        {selectedImage ? (
          <CanvasImg imageUrl={selectedImage} onReset={() => setSelectedImage('')} />
        ) : (
          <SearchImg onSelect={setSelectedImage} />
        )}
      </div>
    </>
  );
}

export default App;
