import React from "react";

export default function Button({
  id,
  onDelete,
  status,
  buttonName,
  onUpdateStatus,
}) {
  return (
    <div className="flex border-t">
      <button
        className="border-r w-full text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l  dark:focus:ring-purple-800 font-medium text-sm text-center"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
      <button
        className="w-full p-2 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl dark:focus:ring-pink-800 font-medium text-sm text-center"
        onClick={() => onUpdateStatus(id, status)}
      >
        {buttonName}
      </button>
    </div>
  );
};
