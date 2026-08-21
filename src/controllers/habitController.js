import { habitCollection } from "../models/habitSchema.js";

export const insertHabit = (taskObj) => {
  const newTask = new habitCollection(taskObj);
  return newTask.save();
};
export const getHabit = (taskObj) => {
  return habitCollection.find();
};
