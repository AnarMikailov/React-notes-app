import React from 'react';
function Note({ text, date, id, deleteHandler }) {
  // console.log(props);

  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <ion-icon
          onClick={() => deleteHandler(id)}
          name="trash-sharp"
        ></ion-icon>
      </div>
    </div>
  );
}

export default Note;
