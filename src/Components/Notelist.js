import React from "react";
import NoteItems from "./NoteItems";

export default function Notelist({
  notesName,
  notes,
  onDelete,
  buttonName,
  onUpdateStatus,
}) {
  return (
    <div className=" p-3 max-w-4xl mx-auto">
      <h1 className="text-2xl my-4">{notesName}</h1>
      {notes.length > 0 ? (
        <div className="note-list grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {notes.map((note) => {
            return (
              <NoteItems
                key={note.id}
                id={note.id}
                status={note.archived}
                buttonName={buttonName}
                onDelete={onDelete}
                onUpdateStatus={onUpdateStatus}
                {...note}
              />
            );
          })}
        </div>
      ) : (
        <p className="text-center">Tidak ada catatan</p>
      )}
    </div>
  );
}
