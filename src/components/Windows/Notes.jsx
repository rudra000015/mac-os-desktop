import MacWindows from './MacWindows'
import './notes.scss'
import { useEffect, useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierDuneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'


function Notes({ onClose }) {
  const [markdown, setMarkdown] = useState(null);

  useEffect(() => {
    fetch('/note.txt')
      .then((response) => {
        if (!response.ok) throw new Error('Could not load /note.txt')
        return response.text()
      })
      .then(setMarkdown)
      .catch((error) => console.error(error))
  }, []);

  return (
    <MacWindows onClose={onClose}>
        <div className="note-window">
          {markdown ? (
            <SyntaxHighlighter language='text' style={atelierDuneLight} wrapLongLines>{markdown}</SyntaxHighlighter>
          ) : (
            <p>Loading....</p>
          )}
        </div>
    </MacWindows>
  );
}

export default Notes;
