import React from 'react';
import AddNote from './AddNote';
import Note from './Note';
function Notelist({ notes, handleNote, deleteHandler }) {
  return (
    <div className="notes-list">
      {notes.map(note => (
        <Note
          deleteHandler={deleteHandler}
          text={note.text}
          date={note.date}
          id={note.id}
          key={note.id}
        />
      ))}
      <AddNote handleNote={handleNote} />
    </div>
  );
}

export default Notelist;
