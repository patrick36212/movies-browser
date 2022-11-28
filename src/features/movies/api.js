import { apiKey, apiUrl } from "../../apiData";

export const getPopularMovies = async (page) => {
    const response = await fetch(`${apiUrl}movie/popular?api_key=${apiKey}&language=en-US&page=${page}`);

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    const movies = await response.json();

    return movies;
};

export const getGenres = async () => {
    const response = await fetch(`${apiUrl}genre/movie/list?api_key=${apiKey}`);

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    const genres = await response.json();

    return genres;
};

export const getMoviesByQuery = async (query, page) => {
    if (!query) {
        return;
    }

    const response = await fetch(`${apiUrl}search/movie?api_key=${apiKey}&language=en-US&page=${page}&query=${query}`);

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    const movies = await response.json()

    return movies;
};

export const getMovies = (query, page) => {
    if (!!query) {
        return getMoviesByQuery(query, page);
    }

    return getPopularMovies(page);
};