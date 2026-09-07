import { habitCollection } from "../models/habitSchema.js";
import { completionCollection } from "../models/completionSchema.js";

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

// GET completion history for one habit — last 90 days
// returns array of "YYYY-MM-DD" strings for the heatmap
export const getHabitHistory = async (_id) => {
  const ninetyDaysAgo = new Date();
  ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);
  ninetyDaysAgo.setHours(0, 0, 0, 0);

  const completions = await completionCollection
    .find({
      habitId: _id,
      completedOn: { $gte: ninetyDaysAgo },
    })
    .select("completedOn");

  // return just the date strings — same format the frontend expects
  return completions.map((c) => c.completedOn.toISOString().split("T")[0]);
};
