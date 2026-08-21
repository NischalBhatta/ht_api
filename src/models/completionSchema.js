import mongoose from "mongoose";

const completionSchema = new mongoose.Schema({
  habitId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Habit", // links this completion back to a Habit document
    required: [true, "Habit ID is required"],
  },

  completedOn: {
    type: Date,
    required: [true, "Completion date is required"],
  },
});

export const completionCollections = mongoose.model(
  "Completion",
  completionSchema,
);
