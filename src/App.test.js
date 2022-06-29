import axios from 'axios';
import { BASE_URL, popularListEndpoint, topRatedListEndpoint } from './api/endpoint.js';

jest.mock('axios');

describe("Fetch Popular Media", () => {
  it('Popular Movies', async () => {
    const media = [{
      "adult": false,
      "backdrop_path": "/wcKFYIiVDvRURrzglV9kGu7fpfY.jpg",
      "genre_ids": [
        14,
        28,
        12
      ],
      "id": 453395,
      "original_language": "en",
      "original_title": "Doctor Strange in the Multiverse of Madness",
      "overview": "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
      "popularity": 5462.157,
      "poster_path": "/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
      "release_date": "2022-05-04",
      "title": "Doctor Strange in the Multiverse of Madness",
      "video": false,
      "vote_average": 7.5,
      "vote_count": 2698
    }];
    axios.get.mockResolvedValueOnce(media);
    const data = await MockService.fetchPopularMovies();

    expect(axios.get).toHaveBeenCalledWith(popularListEndpoint('streaming'));
    expect(data).toEqual(media);
  });

  it('Popular TV Shows', async () => {
    const media = [{
      "backdrop_path": "/rlCRM7U5g2hcU1O8ylGcqsMYHIP.jpg",
      "first_air_date": "2022-06-08",
      "genre_ids": [
        10765,
        10759,
        35
      ],
      "id": 92782,
      "name": "Ms. Marvel",
      "origin_country": [
        "US"
      ],
      "original_language": "en",
      "original_name": "Ms. Marvel",
      "overview": "A great student, avid gamer, and voracious fan-fic scribe, Kamala Khan has a special affinity for superheroes, particularly Captain Marvel. However, she struggles to fit in at home and at school — that is, until she gets superpowers like the heroes she’s always looked up to. Life is easier with superpowers, right?",
      "popularity": 3278.438,
      "poster_path": "/cdkyMYdu8ao26XOBvilNzLneUg1.jpg",
      "vote_average": 7.8,
      "vote_count": 153
    }];

    axios.get.mockResolvedValueOnce(media);
    const data = await MockService.fetchPopulaTvShows();

    expect(axios.get).toHaveBeenCalledWith(popularListEndpoint('tv'));
    expect(data).toEqual(media);
  });
});

describe("Fetch Top Rated Media", () => {
  it("Top Rated Movies", async () => {
    const media = [{
      "adult": false,
      "backdrop_path": "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
      "genre_ids": [
        18,
        80
      ],
      "id": 278,
      "original_language": "en",
      "original_title": "The Shawshank Redemption",
      "overview": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
      "popularity": 70.574,
      "poster_path": "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      "release_date": "1994-09-23",
      "title": "The Shawshank Redemption",
      "video": false,
      "vote_average": 8.7,
      "vote_count": 21636
    }];

    axios.get.mockResolvedValueOnce(media);
    const data = await MockService.fetchTopRatedMovies();

    expect(axios.get).toHaveBeenCalledWith(topRatedListEndpoint('streaming'));
    expect(data).toEqual(media)
  });
})

class MockService {
  static async fetchPopularMovies() {
    return await axios.get(popularListEndpoint('streaming'));
  }

  static async fetchPopulaTvShows() {
    return await axios.get(popularListEndpoint('tv'));
  }

  static async fetchTopRatedMovies() {
    return await axios.get(topRatedListEndpoint('streaming'));
  }

}