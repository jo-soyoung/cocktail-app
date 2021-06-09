import axios from 'axios';

class Cocktail {
  constructor() {
    this.client = axios.create({
      baseURL: 'https://www.thecocktaildb.com/api/json/v1/1',
    });
  }

  async searchByName(query) {
    const response = await this.client.get('search.php', {
      params: {
        s: query,
      },
    });
    return response.data.drinks;
  }
}

export default Cocktail;
