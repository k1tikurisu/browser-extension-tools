import { useEffect, useState } from 'react';
import './App.css';

interface PokeMessage {
  type: string;
  image: string;
  name: string;
}

const Popup = () => {
  const [pokeData, setPokeData] = useState<{ image: string; name: string }>({
    image: '',
    name: '',
  });

  useEffect(() => {
    const handleMessage = (message: PokeMessage) => {
      if (message.type === 'poke') {
        setPokeData({ image: message.image, name: message.name });
      }
    };

    if (!chrome.runtime.onMessage.hasListener(handleMessage)) {
      chrome.runtime.onMessage.addListener(handleMessage);
    }

    return () => {
      chrome.runtime.onMessage.removeListener(handleMessage);
    };
  }, []);

  return (
    <div className="container">
      <img alt={pokeData.name} src={pokeData.image} className="image" />
      <span className="name">{pokeData.name}</span>
    </div>
  );
};

export default Popup;
