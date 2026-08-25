import { habitCollection } from "../models/habitSchema.js";

export const insertHabit = (taskObj) => {
  const newTask = new habitCollection(taskObj);
  return newTask.save();
};
export const getHabit = () => {
  return habitCollection.find();
};
export const updateHabit = (_id, rest) => {
  return habitCollection.findByIdAndUpdate(_id, rest, { new: true });
};
export const deleteHabit = (_id) => {
  return habitCollection.findByIdAndDelete(_id);
};
