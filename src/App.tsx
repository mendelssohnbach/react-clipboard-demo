import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

import { CopyToClipboard } from 'react-copy-to-clipboard';

function App() {
  const [text, setText] = useState('Sample Text');

  const updateText = (text: string) => {
    setText(text);
  };

  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => updateText(e.target.value)}
        value={text}
      />
      <div className="App-copy-area">
        <CopyToClipboard
          text={text}
          onCopy={() => alert(`クリップボードに「${text}」をコピーしました`)}
        >
          <button>クリップボードにコピーする</button>
        </CopyToClipboard>
      </div>
    </div>
  );
}

export default App;
