import React from "react";

const BookCard = ({ book }) => {
  //IMAGE
  let thumbnail =
    book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
      ? book.volumeInfo.imageLinks.thumbnail
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";

  // DESCRIPTION
  let description =
    book.volumeInfo.description && book.volumeInfo.description
      ? book.volumeInfo.description.slice(0, 200)
      : "No description";
  // TITLE
  let title =
    book.volumeInfo.title && book.volumeInfo.title
      ? book.volumeInfo.title.slice(0, 50)
      : "No description";

  return (
    <div className="grid w-full grid-cols-3 gap-4 p-4 bg-white rounded-md shadow-sm">
      <div
        className="h-full rounded-md h-60"
        style={{
          backgroundImage: `url(${thumbnail})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="relative col-span-2 space-y-2 h-60">
        <h2 className="text-xl font-bold md:text-3xl">{title}</h2>
        <h3 className="text-xl md:text-2xl">{book.volumeInfo.authors}</h3>
        <p className="text-sm text-gray-500 md:text-lg">{description}</p>
        <p className="text-sm text-gray-500 md:text-lg">{book.volumeInfo.publishedDate}</p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="#3b82f6"
          class="bi bi-plus-circle-fill absolute -top-2 right-0 cursor-pointer"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
        </svg>
      </div>
    </div>
  );
};

export default BookCard;
