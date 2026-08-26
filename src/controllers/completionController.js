import { completionCollection } from "../models/completionSchema.js";

export const insertCompletion = (taskObj) => {
  const newTask = new completionCollection(taskObj);
  return newTask.save();
};
