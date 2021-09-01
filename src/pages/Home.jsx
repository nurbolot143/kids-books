import React from "react";
import { Categories, Sort, Container } from "../components";

function Home() {
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
        <div className="book-block">
          <img
            className="book-block__image"
            src="https://thumbs.dfs.ivi.ru/storage6/contents/9/2/aa91f2242c0481a4581c3aeb6f4c89.jpg"
            alt="Book"
          />
          <h4 className="book-block__title">Алиса в стране чудес</h4>
          <div className="book-block__selector">
            <ul>
              <li className="active">E-Book</li>
              <li>Печатная</li>
            </ul>
          </div>
          <div className="book-block__bottom">
            <div className="book-block__price">600 ₽</div>
            <div className="button button--outline button--add">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                  fill="white"
                />
              </svg>
              <span>Добавить</span>
              <i>2</i>
            </div>
          </div>
        </div>
        <div className="book-block">
          <img
            className="book-block__image"
            src="https://thumbs.dfs.ivi.ru/storage6/contents/9/2/aa91f2242c0481a4581c3aeb6f4c89.jpg"
            alt="Book"
          />
          <h4 className="book-block__title">Алиса в стране чудес</h4>
          <div className="book-block__selector">
            <ul>
              <li className="active">E-Book</li>
              <li>Печатная</li>
            </ul>
          </div>
          <div className="book-block__bottom">
            <div className="book-block__price">600 ₽</div>
            <div className="button button--outline button--add">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                  fill="white"
                />
              </svg>
              <span>Добавить</span>
              <i>2</i>
            </div>
          </div>
        </div>
        <div className="book-block">
          <img
            className="book-block__image"
            src="https://thumbs.dfs.ivi.ru/storage6/contents/9/2/aa91f2242c0481a4581c3aeb6f4c89.jpg"
            alt="Book"
          />
          <h4 className="book-block__title">Алиса в стране чудес</h4>
          <div className="book-block__selector">
            <ul>
              <li className="active">E-Book</li>
              <li>Печатная</li>
            </ul>
          </div>
          <div className="book-block__bottom">
            <div className="book-block__price">600 ₽</div>
            <div className="button button--outline button--add">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                  fill="white"
                />
              </svg>
              <span>Добавить</span>
              <i>2</i>
            </div>
          </div>
        </div>
        <div className="book-block">
          <img
            className="book-block__image"
            src="https://thumbs.dfs.ivi.ru/storage6/contents/9/2/aa91f2242c0481a4581c3aeb6f4c89.jpg"
            alt="Book"
          />
          <h4 className="book-block__title">Алиса в стране чудес</h4>
          <div className="book-block__selector">
            <ul>
              <li className="active">E-Book</li>
              <li>Печатная</li>
            </ul>
          </div>
          <div className="book-block__bottom">
            <div className="book-block__price">600 ₽</div>
            <div className="button button--outline button--add">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                  fill="white"
                />
              </svg>
              <span>Добавить</span>
              <i>2</i>
            </div>
          </div>
        </div>
        <div className="book-block">
          <img
            className="book-block__image"
            src="https://thumbs.dfs.ivi.ru/storage6/contents/9/2/aa91f2242c0481a4581c3aeb6f4c89.jpg"
            alt="Book"
          />
          <h4 className="book-block__title">Алиса в стране чудес</h4>
          <div className="book-block__selector">
            <ul>
              <li className="active">E-Book</li>
              <li>Печатная</li>
            </ul>
          </div>
          <div className="book-block__bottom">
            <div className="book-block__price">600 ₽</div>
            <div className="button button--outline button--add">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                  fill="white"
                />
              </svg>
              <span>Добавить</span>
              <i>2</i>
            </div>
          </div>
        </div>
        <div className="book-block">
          <img
            className="book-block__image"
            src="https://thumbs.dfs.ivi.ru/storage6/contents/9/2/aa91f2242c0481a4581c3aeb6f4c89.jpg"
            alt="Book"
          />
          <h4 className="book-block__title">Алиса в стране чудес</h4>
          <div className="book-block__selector">
            <ul>
              <li className="active">E-Book</li>
              <li>Печатная</li>
            </ul>
          </div>
          <div className="book-block__bottom">
            <div className="book-block__price">600 ₽</div>
            <div className="button button--outline button--add">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                  fill="white"
                />
              </svg>
              <span>Добавить</span>
              <i>2</i>
            </div>
          </div>
        </div>
        <div className="book-block">
          <img
            className="book-block__image"
            src="https://thumbs.dfs.ivi.ru/storage6/contents/9/2/aa91f2242c0481a4581c3aeb6f4c89.jpg"
            alt="Book"
          />
          <h4 className="book-block__title">Алиса в стране чудес</h4>
          <div className="book-block__selector">
            <ul>
              <li className="active">E-Book</li>
              <li>Печатная</li>
            </ul>
          </div>
          <div className="book-block__bottom">
            <div className="book-block__price">600 ₽</div>
            <div className="button button--outline button--add">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                  fill="white"
                />
              </svg>
              <span>Добавить</span>
              <i>2</i>
            </div>
          </div>
        </div>
        <div className="book-block">
          <img
            className="book-block__image"
            src="https://thumbs.dfs.ivi.ru/storage6/contents/9/2/aa91f2242c0481a4581c3aeb6f4c89.jpg"
            alt="Book"
          />
          <h4 className="book-block__title">Алиса в стране чудес</h4>
          <div className="book-block__selector">
            <ul>
              <li className="active">E-Book</li>
              <li>Печатная</li>
            </ul>
          </div>
          <div className="book-block__bottom">
            <div className="book-block__price">600 ₽</div>
            <div className="button button--outline button--add">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                  fill="white"
                />
              </svg>
              <span>Добавить</span>
              <i>2</i>
            </div>
          </div>
        </div>
        <div className="book-block">
          <img
            className="book-block__image"
            src="https://thumbs.dfs.ivi.ru/storage6/contents/9/2/aa91f2242c0481a4581c3aeb6f4c89.jpg"
            alt="Book"
          />
          <h4 className="book-block__title">Алиса в стране чудес</h4>
          <div className="book-block__selector">
            <ul>
              <li className="active">E-Book</li>
              <li>Печатная</li>
            </ul>
          </div>
          <div className="book-block__bottom">
            <div className="book-block__price">600 ₽</div>
            <div className="button button--outline button--add">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                  fill="white"
                />
              </svg>
              <span>Добавить</span>
              <i>2</i>
            </div>
          </div>
        </div>
        <div className="book-block">
          <img
            className="book-block__image"
            src="https://thumbs.dfs.ivi.ru/storage6/contents/9/2/aa91f2242c0481a4581c3aeb6f4c89.jpg"
            alt="Book"
          />
          <h4 className="book-block__title">Алиса в стране чудес</h4>
          <div className="book-block__selector">
            <ul>
              <li className="active">E-Book</li>
              <li>Печатная</li>
            </ul>
          </div>
          <div className="book-block__bottom">
            <div className="book-block__price">600 ₽</div>
            <div className="button button--outline button--add">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                  fill="white"
                />
              </svg>
              <span>Добавить</span>
              <i>2</i>
            </div>
          </div>
        </div>
        <div className="book-block">
          <img
            className="book-block__image"
            src="https://thumbs.dfs.ivi.ru/storage6/contents/9/2/aa91f2242c0481a4581c3aeb6f4c89.jpg"
            alt="Book"
          />
          <h4 className="book-block__title">Алиса в стране чудес</h4>
          <div className="book-block__selector">
            <ul>
              <li className="active">E-Book</li>
              <li>Печатная</li>
            </ul>
          </div>
          <div className="book-block__bottom">
            <div className="book-block__price">600 ₽</div>
            <div className="button button--outline button--add">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                  fill="white"
                />
              </svg>
              <span>Добавить</span>
              <i>0</i>
            </div>
          </div>
        </div>
        <div className="book-block">
          <img
            className="book-block__image"
            src="https://thumbs.dfs.ivi.ru/storage6/contents/9/2/aa91f2242c0481a4581c3aeb6f4c89.jpg"
            alt="Book"
          />
          <h4 className="book-block__title">Алиса в стране чудес</h4>
          <div className="book-block__selector">
            <ul>
              <li className="active">E-Book</li>
              <li>Печатная</li>
            </ul>
          </div>
          <div className="book-block__bottom">
            <div className="book-block__price">600 ₽</div>
            <div className="button button--outline button--add">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                  fill="white"
                />
              </svg>
              <span>Добавить</span>
              <i>1</i>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Home;
