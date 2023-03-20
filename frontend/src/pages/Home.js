import {  Container ,Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import WorkoutDetails from "../components/workoutDetails";
import WorkoutFrom from "../components/WorkoutFrom";
import { useWorkoutContext } from "../hooks/useWorkoutContext";


const Home = () => {
   const { workouts , dispatch } = useWorkoutContext()
   useEffect(() => {
     const fetchWorkouts = async () => {
         const response = await fetch('/api/workouts')
         const data = await response.json()
         if (response.ok){
            dispatch({type: 'SET_WORKOUTS' , payload: data})
            
         }
     }
     fetchWorkouts()
   
     
   }, [])
   
   
    return ( 
        <div>
         <Container>
         <Grid style={{margin:'1rem 0rem'}} container spacing={2}>
          <Grid item md={8} sm={12}>
           {
            workouts && workouts.map(workout => (
              <WorkoutDetails key={workout._id} workout = {workout}/>
            ))
           }
           </Grid>
           <Grid item md={4} sm={12}>
            <WorkoutFrom/>
          </Grid>
          </Grid>
         </Container>
          
        </div>
     );
}
 
export default Home;