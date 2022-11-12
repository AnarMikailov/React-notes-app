import './App.css';
import { useState, useEffect } from 'react';
import React from 'react';
import Notelist from './components/Notelist';
import Search from './components/Search';
import Header from './components/Header';

function App() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState('');
  const [darkMode, setDarkmode] = useState(false);

  useEffect(() => {
    let savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  }, [notes]);
  const addNote = text => {
    const date = new Date();
    const newNote = {
      text: text,
      date: date.toLocaleDateString(),
      id: Math.random(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  const deleteNotes = id => {
    const newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes);
  };
  return (
    <div className={`${darkMode && 'darkmode'}`}>
      <div className="container">
        <Header setDarkMode={setDarkmode} darkMode={darkMode} />
        <Search searchHandle={setSearch} />
        <Notelist
          deleteHandler={deleteNotes}
          handleNote={addNote}
          notes={notes.filter(note => note.text.toLowerCase().includes(search))}
        />
      </div>
    </div>
  );
}

export default App;
