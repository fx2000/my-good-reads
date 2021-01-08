import React, { useEffect, useState } from "react";
import { getBooksByType } from "./book-search.service";
import { ReactComponent as PlusIcon } from '../assets/plusIcon.svg';

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    publishedDate?: string;
    publisher?: string;
    description?: string;
    imageLinks: {
      thumbnail: string;
    }
  }
};

interface IProps {
  myBooks?: any;
  setMyBooks?: any;
};

const BookSearch = ({ myBooks, setMyBooks }: IProps) => {
    const [bookType, updateBookType] = useState("");
    const [bookTypeToSearch, updateBookTypeToSearch] = useState("");
    const [allAvailableBooks, setAllAvailableBooks] = useState([]);

    const requestBooks = async () => {
      if (bookTypeToSearch === "") {
        setAllAvailableBooks([]);
      } else if (bookTypeToSearch) {
        const allBooks = await getBooksByType(bookTypeToSearch);
        setAllAvailableBooks(allBooks.items);
      }
    }

    useEffect(() => {
      // 500ms delay to keep from spamming the API
      const delay = setTimeout( async () => {
        await requestBooks();
      }, 500)
      
      return () => clearTimeout(delay)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bookTypeToSearch]);

    // Add a book to the wishlist
    const addToList = (book: Book) => {
      const array : any[] = [...myBooks];
      array.push(book);
      const uniqueArray = Array.from(new Set(array)) ;
      setMyBooks(uniqueArray);
    }

    return (
      <>
        <div className="book--container">
          <div className="search-params">
              <div>
                  <form
                      onSubmit={(e) => {
                          debugger;
                          e.preventDefault();
                          updateBookTypeToSearch(bookType);
                      }}
                  >
                    <input
                      className="full-width"
                      autoFocus
                      name="gsearch"
                      type="search"
                      value={bookType}
                      placeholder="Search for books to add to your reading list and press Enter"
                      onChange={(e) => {
                        updateBookType(e.target.value);
                        updateBookTypeToSearch(e.target.value);
                      }}
                    />
                  </form>
                  {(!bookType) && (
                    <div className="empty">
                      <p>
                        Try searching for a topic, for example
                        <a href="/#" onClick={() => updateBookType("Javascript")}>
                          {" "}
                          "Javascript"
                        </a>
                      </p>
                    </div>
                  )}
              </div>
          </div>
        </div>

        {(allAvailableBooks?.length > 0) && allAvailableBooks.map((book: Book, index) => 
          <article key={index} className="book--card">
            <img src={book.volumeInfo.imageLinks.thumbnail} alt={''} className="book--cover" />
            <div className="book--info">
              <div className="book--title">
                <h2>{book.volumeInfo.title}</h2>
                <PlusIcon
                  title="Add to wishlist"
                  onClick={() => addToList(book)}
                />
              </div>
              {(book.volumeInfo.authors?.length > 0) &&
                <p className="book--author">
                  By {book.volumeInfo.authors?.map((author, index) =>
                    <span key={index}>
                      {(index === 0) ? author
                        : (index > 0 && index < book?.volumeInfo?.authors?.length - 1) ? `, ${author}`
                        : ` and ${author}`
                      }
                    </span>
                  )}
                </p>
              }
              <p className="book--publisher">
                {(book.volumeInfo.publisher) && 
                  <span>{book.volumeInfo.publisher}</span>
                }
                {(book.volumeInfo.publisher && book.volumeInfo.publishedDate) &&
                  <span>{`, `}</span>
                }
                {(book.volumeInfo.publishedDate) &&
                  <span>{book.volumeInfo.publishedDate}</span>
                }
              </p>
              
              <div className="book--description">
                <p>{book.volumeInfo.description}</p>
              </div>
            </div>
          </article>
        )}
      </>
    );
};

export default BookSearch;
