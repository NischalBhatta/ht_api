import mongoose from "mongoose";

const completionSchema = new mongoose.Schema({
  habitId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Habits", // links this completion back to a Habit document
    required: [true, "Habit ID is required"],
  },

  completedOn: {
    type: Date,
    required: [true, "Completion date is required"],
  },
});

completionSchema.index({ habitId: 1, completedOn: 1 }, { unique: true });

export const completionCollection = mongoose.model(
  "Completions",
  completionSchema,
);
