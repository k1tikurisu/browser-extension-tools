import type { PlasmoMessaging } from '@plasmohq/messaging';

const handler: PlasmoMessaging.MessageHandler<{ id: string }> = async (req, _res) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${req.body.id}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    chrome.runtime.sendMessage({
      type: 'poke',
      image: data.sprites.front_default,
      name: data.name,
    });
  } catch (error) {
    console.error('Error fetching poke:', error);
  }
};

export default handler;
