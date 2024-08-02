chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'count') {
    fetchPoke(message.id);
  }
});

async function fetchPoke(id: number) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
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
}
