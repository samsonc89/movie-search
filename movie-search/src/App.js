import { useEffect } from "react";

//2d869879

const API_URL = "http://www.omdbapi.com/?apikey=2d869879";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Hulk");
  }, []);
  return <h1>App</h1>;
};

export default App;
