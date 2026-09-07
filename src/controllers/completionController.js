import { completionCollection } from "../models/completionSchema.js";
import { habitCollection } from "../models/habitSchema.js";

export const insertCompletion = async (taskObj) => {
  try {
    const existCompletion = await completionCollection.findOne({
      habitId: taskObj.habitId,
      completedOn: taskObj.completedOn,
    });
    if (existCompletion) {
      return existCompletion;
    }
    const newCompletion = await completionCollection(taskObj);
    return newCompletion;
  } catch (error) {
    throw new Error("Completion not recorder");
  }
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
    const today = new Date().toISOString().split("T")[0];
    const start = new Date(`${today}T00:00:00.000Z`);
    const end = new Date(`${today}T23:59:59.999Z`);
    const deleted = await completionCollection.findOneAndUpdate({
      habitId,
      $expr: {
        $eq: [
          { $dateToString: { format: "%Y-%m-%d", date: "$completedOn" } },
          today,
        ],
      },
    });
    if (!deleted) {
      throw new Error("No completion found for today");
    }
  } catch (error) {
    throw new Error("Error deleting today's completion");
  }
};
