import React from "react";
import { Categories, Sort, Container, BookBlock } from "../components";

function Home({ bookItems }) {
  return (
    <Container>
      <div className="content__top">
        <Categories
          items={["Сказки", "Мальчикам", "Девочкам", "Энциклопедии"]}
        />
        <Sort items={["популярности", "цене", "алфавиту"]} />
      </div>
      <h2 className="content__title">Все книги</h2>
      <div className="content__items">
        {bookItems.map((book) => (
          <BookBlock key={`${book.idx}_${book.name}`} {...book} />
        ))}
      </div>
    </Container>
  );
}

export default Home;
