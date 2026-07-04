import { CategoryExercise } from "./CategoryExercise";

export interface Exercise {
    id: number;
    title: string;
    description: string;
    number_of_rounds: number;
    duration_minutes: number;
    difficulty: string;
    video_url: string;
    image_url: string;
    category: CategoryExercise;
}