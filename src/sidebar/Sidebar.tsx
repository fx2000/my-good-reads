import React from "react";
import { ReactComponent as DeleteIcon } from '../assets/deleteIcon.svg';

interface IProps {
  myBooks?: any;
  setMyBooks?: any;
};

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

const Sidebar = ({ myBooks, setMyBooks }: IProps) => {

  // Remove a book from the wishlist
  const removeBook = (index: any) => {
    const array : any[] = [...myBooks];
    array.splice(index, 1);
    setMyBooks(array);
  }

  return (
    <>
      <h3 className="layout--sidebar--title">
        {`My Reading Wishlist (${myBooks?.length})`}
      </h3>
      <div className="layout--sidebar--content">
        {(myBooks?.length > 0) && myBooks?.map((book: Book, index: any) =>
          <div key={index} className="book--favorite">
            <p>{book.volumeInfo?.title}</p>
            <DeleteIcon
              title="Remove from wishlist"
              onClick={() => removeBook(index)}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Sidebar;
