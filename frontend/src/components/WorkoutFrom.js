import { Box, Button, makeStyles, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

const useStyles = makeStyles((theme) => ({
  // active:{
  //   marginTop:'5rem',
  //   border:'2px solid red ',
  //   borderRadius:'8px'
    
  // },
  // inactive:{
  //   marginTop:"1rem"
  // }
}))

export default function WorkoutFrom() {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  // const [emptyFields , setEmptyFields ] = useState([])
  const {dispatch} = useWorkoutContext()
  const classes = useStyles()
  

  const handlesubmit = async (e) => {
    e.preventDefault();
    const workout = { title, load, reps };

    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
      // setEmptyFields(json.emptyList)
    }
    if (response.ok) {
      setError(null);
      setTitle("");
      setLoad("");
      setReps("");
      // setEmptyFields([])
      dispatch({type: "CREATE_WORKOUT" , payload: json})
    }
  };
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          marginTop: "1rem",
          textAlign: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            variant="h6"
            style={{ color: "#1aac83", fontWeight: "900" }}
          >
            {" "}
            Add a new workout{" "}
          </Typography>
        </Box>
        <form onSubmit={handlesubmit}>
          <TextField
            id="outlined-basic"
            label="Title"
           style={{ marginTop:"1rem"}}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            variant="outlined"
            fullWidth
            
            required

          />
          <TextField
            id="outlined-basic"
            label="Load"
            style={{ marginTop:"1rem"}}
            value={load}
            onChange={(e) => setLoad(e.target.value)}
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            id="outlined-basic"
            label="Reps"
            style={{ marginTop:"1rem"}}
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            variant="outlined"
            fullWidth
            
            required
          />
          <Button
            type="submit"
            style={{ marginTop: "1rem", background: "#1aac83" }}
            variant="contained"
          >
            Add a new Workout
          </Button>
        </form>
        {error && (
          <div
            style={{
              marginTop: "2rem",
              border: "1px solid red ",
              padding: "1rem",
            }}
          >
            {error}
          </div>
        )}
      </div>
    </div>
  );
}
