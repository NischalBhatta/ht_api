import mongoose from "mongoose";

const habitSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Habit name is required"],
    },
    color: {
      type: String,
      default: "#3498db",
    },
    isArchived: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export const habitCollection = mongoose.model("Habits", habitSchema);
