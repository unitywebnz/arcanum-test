import React, {useState} from 'react';

const SearchComponent = () => {

    const [searchSubmit, setSearchSubmit] = useState(false);

    // Use this variable for the API request and assign the "string" to the input's value
    const searchData = {
        "query": "string"
    }

    const handleSubmit = () => {
        setSearchSubmit(true);

        // Use Fetch to handle http://nlp-document-store-dev-130100662.ap-southeast-2.elb.amazonaws.com/api/nlp-document-store/query
        fetch()
    }

    if (searchSubmit) {

        // Map the API response here ("results": [])
        return(
            <>
                <h2>Search Result</h2>
                <ul>
                    <li>
                        <h4>Document name</h4>
                        <p>Document Text</p>
                        <a href="" target="_blank">Download Document</a>
                    </li>
                </ul>
            </>
        )
    }

    return(
        <>
            <h2>Search Document</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={searchField} />
                <button type="submit">Search</button>
            </form>
        </>
    )

}

export default SearchComponent;