export default {
  async fetch(request, env, ctx) {
    try {
      const response = await fetch('https://tryigit.dev/keybox/download.php?id=random_strong');

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const keyboxData = await response.text(); // use .json() if it's JSON

      return new Response(keyboxData, {
        status: 200,
        headers: {
          'Content-Type': 'text/plain', // or application/json if applicable
        },
      });
    } catch (error) {
      return new Response(`Fetch error: ${error.message}`, {
        status: 500,
      });
    }
  },
};
