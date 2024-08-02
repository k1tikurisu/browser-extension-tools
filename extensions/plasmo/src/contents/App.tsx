import { sendToBackground } from '@plasmohq/messaging';
import { useState } from 'react';

export const App = () => {
  const [count, setCount] = useState(1);

  return (
    <div>
      <p>カウント数 {count}</p>
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        カウント
      </button>
      <button
        type="button"
        onClick={async () => {
          await sendToBackground({
            name: 'count',
            body: {
              id: count,
            },
          });
        }}
      >
        取得する
      </button>
    </div>
  );
};
