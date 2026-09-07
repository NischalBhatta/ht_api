import { completionCollection } from "../models/completionSchema.js";
import { habitCollection } from "../models/habitSchema.js";

export const insertCompletion = async (taskObj) => {
  try {
    const today = new Date(taskObj.completedOn);
    const startOfDay = new Date(today.setHours(0, 0, 0, 0));
    const endOfDay = new Date(today.setHours(23, 59, 59, 999));

    // Check if completion exists for this habit today
    const existCompletion = await completionCollection.findOne({
      habitId: taskObj.habitId,
      completedOn: { $gte: startOfDay, $lte: endOfDay },
    });

    if (existCompletion) {
      // Delete it (toggle OFF)
      await completionCollection.deleteOne({ _id: existCompletion._id });
      return { deleted: true };
    }

    // Create new completion (toggle ON)
    const newCompletion = await completionCollection.create(taskObj);
    return { created: true, data: newCompletion };
  } catch (error) {
    throw new Error("Completion not recorded");
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
    const deleted = await completionCollection.findByIdAndDelete(id);

    if (!deleted) {
      throw new Error("No completion found");
    }

    return deleted;
  } catch (error) {
    throw new Error("Error deleting today's completion");
  }
};
