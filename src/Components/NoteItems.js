import React from "react";
import Button from "./Button";
import { showFormattedDate } from "../utils/data";

export default function NoteItems({
  title,
  createdAt,
  body,
  id,
  status,
  buttonName,
  onDelete,
  onUpdateStatus,
}) {
  return (
    <div className=" flex flex-col border border-solid rounded overflow-hidden">
      <div className=" flex-1 p-3">
        <h3 className=" text-xl font-bold">{title}</h3>
        <p className="  text-xs py-1">{showFormattedDate(createdAt)}</p>
        <p className=" text-sm">{body}</p>
      </div>
      <Button
        id={id}
        status={status}
        buttonName={buttonName}
        onDelete={onDelete}
        onUpdateStatus={onUpdateStatus}
      />
    </div>
  );
}
