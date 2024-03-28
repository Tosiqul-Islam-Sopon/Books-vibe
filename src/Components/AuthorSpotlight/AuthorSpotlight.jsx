import { useEffect, useState } from "react";
import Author from "./Author";

const AuthorSpotlight = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        fetch('authors.json')
        .then(res => res.json())
        .then(author => setAuthors(author));
      }, []); 

    console.log(authors);
    return (
        <div className="space-y-8 mt-10">
            {
                authors.map(author => <Author key={author.id} author={author}></Author>)
            }
        </div>
    );
};

export default AuthorSpotlight;