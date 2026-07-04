import { getCategoryExercises } from "../repository/CategoryExercises";

export class CategoryExercisesViewModel{
    async LoadCategoryExercises(){
        return await getCategoryExercises();
    }
}