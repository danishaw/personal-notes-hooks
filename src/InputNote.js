import React, { useState } from "react";

export default function InputNote({ addNoteHandler }) {
  const charLimit = 5;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onTitleChangeEventHandler = (e) => {
    if (charLimit - e.target.value.length >= 0) {
      setTitle(e.target.value);
    }
  };
  const onBodyChangeEventHandler = (e) => {
    setBody(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault()
    addNoteHandler(title, body);
  };

  return (
    <div className="max-w-md mx-auto mt-4">
      <h2 className="text-2xl">Buat catatan</h2>
      <p className="text-right">Sisa karakter: {charLimit - title.length}</p>
      <form className="flex flex-col" onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Judul catatan ..."
          value={title}
          onChange={onTitleChangeEventHandler}
        />
        <input
          className="h-44"
          type="text"
          placeholder="Tuliskan catatanmu . . ."
          value={body}
          onChange={onBodyChangeEventHandler}
        />
        <button  className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
          <span className="relative w-full py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Buat catatan
          </span>
        </button>
      </form>
    </div>
  );
}
