import React from "react";
import { BadList } from "./BadList";
import { EntryList } from "./EntryList";

export const ListArea = ({
  taskList,
  switchTask,
  handleOnSelect,
  itemToDelete,
  handleOnDelete,
}) => {
  const entList = taskList.filter((item) => item.type === "entry");
  const badList = taskList.filter((item) => item.type === "bad");
  console.log(taskList);
  return (
    <div className="row mt-5 g-2">
      <EntryList
        taskList={entList}
        switchTask={switchTask}
        handleOnSelect={handleOnSelect}
        handleOnDelete={handleOnDelete}
        itemToDelete={itemToDelete}
      />
      <BadList
        badList={badList}
        switchTask={switchTask}
        handleOnSelect={handleOnSelect}
        handleOnDelete={handleOnDelete}
        itemToDelete={itemToDelete}
      />
    </div>
  );
};
