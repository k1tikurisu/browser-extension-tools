export default defineBackground({
  async main() {
    handlePokemonRequest();
  },
});

function handlePokemonRequest() {
  chrome.runtime.onMessage.addListener(async (message) => {
    if (message.type === 'count') {
      const url = `https://pokeapi.co/api/v2/pokemon/${message.id}`;

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
  });
};
