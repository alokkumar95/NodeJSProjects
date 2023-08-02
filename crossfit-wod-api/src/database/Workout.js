// In src/database/Workout.js
const DB = require("./db.json");
const saveToDatabase = require("./utils");

const getAllWorkouts = () => {
  return DB.workouts;
};

const createNewWorkOut = (newWorkOut) => {
  const isAlreadyAdded =
    DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
  if (isAlreadyAdded) {
    return;
  }

  DB.workouts.push(newWorkOut);
  saveToDatabase(DB);
  return newWorkOut;
};

module.exports = { getAllWorkouts, createNewWorkOut };
