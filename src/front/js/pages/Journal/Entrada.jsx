import React, { useState } from 'react';
import '../../../styles/entrada.css';

function FullScreenTextEditor() {
  const [note, setNote] = useState('');

  return (
    <div className="journal-component full-screen-editor">
      <textarea 
        className="editor-textarea"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button 
        className="save-button"
        onClick={() => {
          // Aquí puedes agregar la lógica para guardar la nota
          console.log(note);
        }}
      >
        Guardar
      </button>
    </div>
  );
}

export default FullScreenTextEditor;
