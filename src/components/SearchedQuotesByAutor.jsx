import React from 'react';

function SearchedQuotesByAuthor({ authorContent }) {
  return (
    <div className="quotes-container">
      {authorContent.map((author, index) => (
        <div key={index} className="quote-card">
          <p className="quote-text">{author.content}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchedQuotesByAuthor;
