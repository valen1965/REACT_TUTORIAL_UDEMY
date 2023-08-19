import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/91PU1YVJm5L._AC_UL600_SR600,400_.jpg"
    alt="Single AF Cocktails"
  />
);
const Title = () => <h2>Single AF Cocktails</h2>;
const Author = () => {
  return <h4>Ariana Madix</h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
