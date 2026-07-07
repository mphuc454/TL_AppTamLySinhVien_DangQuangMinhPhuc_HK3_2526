import { useState } from "react";
import { useArticleViewModel } from "../viewmodels/ArticleViewModel";
import { useDoctorViewModel } from "../viewmodels/DoctorViewModel";
import { useExercisesViewModel } from "../viewmodels/ExercisesViewModel";

export function FilterDoc() {
  const { doc } = useDoctorViewModel();
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const filterDocs =
    setSelectedCategory == null
      ? doc
      : doc.filter((item) => item.id === selectedCategory);
  return { selectedCategory, setSelectedCategory, filterDocs };
}

export function FilterArticle() {
  const { articles } = useArticleViewModel();
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const filterArticles =
    setSelectedCategory == null
      ? articles
      : articles.filter((item) => item.id === selectedCategory);
  return { selectedCategory, setSelectedCategory, filterArticles };
}
export function FilterExercises() {
  const { ex } = useExercisesViewModel();
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const filterExercises =
    setSelectedCategory == null
      ? ex
      : ex.filter((item) => item.category.id === selectedCategory);
  return { selectedCategory, setSelectedCategory, filterExercises };
}
