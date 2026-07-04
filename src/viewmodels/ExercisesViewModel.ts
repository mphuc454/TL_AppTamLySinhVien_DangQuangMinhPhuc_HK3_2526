import { useEffect, useState } from "react";
import { getAllExercises } from "../repository/ExerciseRepository";
import { Exercise } from "../models/Exercises";

export function useExercisesViewModel(){
   const [ex, setEx] = useState<Exercise[]>([]);
   const [loading, setLoading] = useState(false);

    const loadExercises = async () => {
        try{
            setLoading(true)
            const data = await getAllExercises();
            setEx(data);
        }catch(error){
            console.log(error)
        }finally{
            setLoading(false)
        }
    }
    useEffect(() => {
        loadExercises();
    }, []);

    return {ex, loading, loadExercises};
  };
