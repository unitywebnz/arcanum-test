import React, { useState } from "react";

const SearchComponent = () => {
  const [searchSubmit, setSearchSubmit] = useState(false);
  const [searchResults, setsearchResults] = useState([]);

  // Use this variable for the API request and assign the "string" to the input's value
  const searchData = {
    query: "string",
  };
  const searchField = searchData.query;

  const handleSubmit = async () => {
    setSearchSubmit(true);

    // fetch our data
    await fetch(
      `http://nlp-document-store-dev-130100662.ap-southeast-2.elb.amazonaws.com/api/nlp-document-store/query`,
      {
        method: "post",
        body: JSON.stringify(searchData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => {
      response.json().then((data) => {
        setsearchResults(data.results);
        // console.log("data results: ", data.results);
      });
    });
  };

  if (searchSubmit) {
    // Map the API response here ("results": [])
    return (
      <>
        <h2>Search Result</h2>
        <ul>
          {searchResults.map((result, key) => (
            <li key={key}>
              <h4>{result.document}</h4>
              <p>{result.documentText}</p>
              <a href={`${result.documentUri}`} target="_blank">
                Download Document
              </a>
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <>
      <h2>Search Document</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" defaultValue={searchField} />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchComponent;
