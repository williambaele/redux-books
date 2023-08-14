import React from "react";

const BookCard = () => {
  const backgroundImageUrl =
    "https://imgv2-1-f.scribdassets.com/img/document/290444689/original/b4be8acffc/1686862354?v=1";

  return (
    <div className="grid w-full h-48 grid-cols-3 gap-4 p-4 bg-white rounded-md shadow-sm">
      <div
        className="h-full rounded-md md:h-full"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="relative h-full col-span-2 space-y-2">
        <h2 className="text-3xl font-large">Père riche, père pauvre</h2>
        <p className="text-gray-500 text-md">
          Le lorem ipsum est, en imprimerie, une suite de mots sans
          signification utilisée à titre provisoire pour calibrer une mise en
          page, le texte définitif venant remplacer le faux-texte dès qu'il.
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
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
