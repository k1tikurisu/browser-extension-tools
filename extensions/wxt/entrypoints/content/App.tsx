import { useState } from 'react';

import './App.css';

const App = () => {
  const [count, setCount] = useState(1);

  return (
    <div>
      <p>カウント数 {count}</p>
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        カウント
      </button>
      <button
        type="button"
        onClick={() => {
          chrome.runtime.sendMessage({
            type: 'count',
            id: count,
          });
        }}
      >
        取得する
      </button>
    </div>
  );
};

export default App;
