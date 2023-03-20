import { Box, Card, CardContent, Typography } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import { useWorkoutContext } from "../hooks/useWorkoutContext";
const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutContext();
  const handleDelete = async() => {
    const response = await fetch('/api/workouts/'+ workout._id, {
      method:'DELETE',
    }) 

    if(response.ok) {
      dispatch({type: 'DELETE_WORKOUT' , payload: workout})
    }

  }
  return (
    <div>
      <Box>
        <Card style={{ margin: "1rem" }}>
          <CardHeader
            action={
              <IconButton onClick={handleDelete}  aria-label="Delete">
                <DeleteIcon style={{color:'#1aac83'}} />
              </IconButton>
            }
            title={workout.title}
            style={{color:'#1aac83'}}
          />
          <CardContent>
            <Typography variant="body1">
              <strong>Load (kg) :</strong> {workout.load}
            </Typography>
            <Typography variant="body1">
              <strong>Reps :</strong> {workout.reps}
            </Typography>
            <Typography variant="body1">
              <strong>Created At :</strong> {workout.createdAt}
            </Typography>
          </CardContent>
       
        </Card>
      </Box>
    </div>
  );
};

export default WorkoutDetails;
