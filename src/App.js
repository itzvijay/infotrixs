import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { getRandomQuotesApi } from "./api/randomeQuotesApi";
import Header from "./components/Header";
import SearchedQuotesByAutor from "./components/SearchedQuotesByAutor";
import { getQuotesByAuthorName } from "./api/quotesByAuthorName";

function App() {
  const [randomData, setRandomData] = useState(null);
  const [searchPressed, setSearchPressed] = useState(false);
  const [authorContent, setAuthorContent] = useState([]);
  console.log(randomData);

  const findAuthor = async (event, author) => {
    event.preventDefault();
    author = author.trim().toLowerCase().replace(/\s+/g, '-');
    const { results } = await getQuotesByAuthorName(author);
    setAuthorContent(results);
    setSearchPressed(true);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${getRandomQuotesApi}`);
        setRandomData(data);
      } catch ({ data }) {
        console.log(data);
        return data;
      }
    };

    fetchData()
  }, []);

  return (
    <div>
      <Header author={findAuthor} setSearchPressed={setSearchPressed} />
      {searchPressed ? (
        <SearchedQuotesByAutor authorContent={authorContent} />
      ) : (
        <div>
        {randomData && randomData.length > 0 && (
          <div className="random-quote">
            <p>{randomData[0].content}</p>
            <p>By {randomData[0].author}</p>
          </div>
        )}
      </div>      
      )}
    </div>
  );
}

export default App;