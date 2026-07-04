import { useEffect, useState } from "react";
import { getCategoryExercises } from "../repository/CategoryExercises";
import { CategoryExercise } from "../models/CategoryExercise";

export function useCategoryExercisesViewModel() {
    const [categoryArticles, setCategoryArticles] = useState<CategoryExercise[]>([],);
         const [loading, setLoading] = useState(false);
         const loadCategoryArticles = async () => {
              try{
                  setLoading(true)
                  const data = await getCategoryExercises();
                  setCategoryArticles(data);
              }catch(error){
                  console.log(error)
              }finally{
                  setLoading(false)
              }
          }
          useEffect(() => {
              loadCategoryArticles();
          }, []);
          return {categoryArticles, loading, loadCategoryArticles};
}