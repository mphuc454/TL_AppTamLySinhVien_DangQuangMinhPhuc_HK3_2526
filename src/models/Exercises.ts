import { CategoryExercise } from "./CategoryExercise";
import { ExerciseStep } from "./ExerciseStep";

export interface Exercise {
  id: number;
  title: string;
  description: string;
  number_of_rounds: number;
  duration_minutes: number;
  difficulty: string;
  image_url: string;
  category: CategoryExercise;
  exercises_steps: ExerciseStep[];
}
