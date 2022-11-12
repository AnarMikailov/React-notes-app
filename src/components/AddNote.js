import React from 'react';
import { useState } from 'react';
function AddNote({ handleNote }) {
  const [noteText, setNoteText] = useState('');
  const characterLimit = 200;
  const changeHandler = e => {
    if (characterLimit - e.target.value.length < 0) return;
    setNoteText(e.target.value);
  };
  const clickHandler = e => {
    if (noteText.trim().length === 0) return;
    handleNote(noteText);
    setNoteText('');
  };
  return (
    <div className="note new">
      <textarea
        value={noteText}
        onChange={changeHandler}
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button onClick={clickHandler} className="save">
          Save
        </button>
      </div>
    </div>
  );
}

export default AddNote;
