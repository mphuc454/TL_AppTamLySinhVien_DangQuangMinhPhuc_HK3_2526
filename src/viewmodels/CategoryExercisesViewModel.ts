import { useEffect, useState } from "react";
import { CategoryExercise } from "../models/CategoryExercise";
import { getCategoryExercises } from "../repository/CategoryExercises";

export function useCategoryExercisesViewModel() {
  const [categoryEx, setCategoryEx] = useState<CategoryExercise[]>([]);
  const [loading, setLoading] = useState(false);
  const loadCategoryEx = async () => {
    try {
      setLoading(true);
      const data = await getCategoryExercises();
      setCategoryEx(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadCategoryEx();
  }, []);
  return { categoryEx, loading, loadCategoryEx };
}
