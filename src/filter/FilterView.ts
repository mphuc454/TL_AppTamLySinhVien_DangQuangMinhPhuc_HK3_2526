import { useMemo, useState } from "react";
import { useArticleViewModel } from "../viewmodels/ArticleViewModel";
import { useDoctorViewModel } from "../viewmodels/DoctorViewModel";
import { useExercisesViewModel } from "../viewmodels/ExercisesViewModel";

// lọc tìm kiếm bác sĩ
export function FilterDoc() {
  const { doc } = useDoctorViewModel();
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [searchText, setSearchText] = useState("");
  const filterDoctor = useMemo(() => {
    return doc.filter((item) => {
      const matchCategory =
        selectedCategory === null || item.id === selectedCategory;

      const filterSearchDoc = (item.account_id?.username ?? "")
        .toUpperCase()
        .includes(searchText.trim().toUpperCase());

      return matchCategory && filterSearchDoc;
    });
  }, [doc, selectedCategory, searchText]);
  return {
    selectedCategory,
    setSelectedCategory,
    searchText,
    setSearchText,
    filterDoctor,
  };
}

// lọc tìm kiếm bài viết
export function FilterArticle() {
  const { articles } = useArticleViewModel();

  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [searchText, setSearchText] = useState("");

  const filterArticles = useMemo(() => {
    return articles.filter((item) => {
      const matchCategory =
        selectedCategory === null ||
        item.id_category_articles?.id === selectedCategory;

      const filterSearchArticle = item.title
        .toUpperCase()
        .includes(searchText.toUpperCase().trim());

      return matchCategory && filterSearchArticle;
    });
  }, [articles, selectedCategory, searchText]);

  return {
    selectedCategory,
    setSelectedCategory,
    searchText,
    setSearchText,
    filterArticles,
  };
}

// lọc tìm kiếm bài tập
export function FilterExercises() {
  const { ex } = useExercisesViewModel();
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [searchText, setSearchText] = useState("");

  const filterExercises = useMemo(() => {
    return ex.filter((item) => {
      const matchCategory =
        selectedCategory === null || item.category?.id === selectedCategory;

      const filterSearchEx = item.title
        .toUpperCase()
        .includes(searchText.trim().toUpperCase());

      return matchCategory && filterSearchEx;
    });
  }, [ex, selectedCategory, searchText]);
  return {
    selectedCategory,
    setSelectedCategory,
    searchText,
    setSearchText,
    filterExercises,
  };
}

// lọc tìm kiếm bài viết
export function useSearchArticle(seacrhItems: string) {
  const { articles } = useArticleViewModel();

  const filterSearchArticle = useMemo(() => {
    return articles.filter((i) =>
      i.title.toUpperCase().includes(seacrhItems.toUpperCase()),
    );
  }, [articles, seacrhItems]);
  return filterSearchArticle;
}

// lọc tìm kiếm bác sĩ
export function useSearchDoc(seacrhItems: string) {
  const { doc } = useDoctorViewModel();
  const filterDoctor = useMemo(() => {
    return doc.filter((i) =>
      i.account_id?.username.toUpperCase().includes(seacrhItems.toUpperCase()),
    );
  }, [doc, seacrhItems]);
  return filterDoctor;
}
