import "./App.scss";
import { Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "./components";
import { Home, Cart } from "./pages";

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      setBooks(data.books);
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" render={() => <Home bookItems={books} />} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
