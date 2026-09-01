import { completionCollection } from "../models/completionSchema.js";
import { habitCollection } from "../models/habitSchema.js";

export const insertCompletion = (taskObj) => {
  const newTask = new completionCollection(taskObj);
  return newTask.save();
};

export const getCompletions = async (habitId) => {
  try {
    let query = {};
    if (habitId) {
      query.habitId = habitId;
    }
    const completions = await completionCollection.find(query);
    return completions;
  } catch (error) {
    throw new Error("Completions not found");
  }
};

export const deleteCompletion = async (id) => {
  try {
    const deletedCompletion = await completionCollection.findByIdAndDelete(id);

    if (!deletedCompletion) {
      throw new Error("Completion not found");
    }

    return deletedCompletion;
  } catch (error) {
    throw new Error(error.message);
  }
};
