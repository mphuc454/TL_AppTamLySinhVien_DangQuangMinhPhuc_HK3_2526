import { supabase } from "@/src/lib/supabase";

//1. Xoá bài viết
export const deleteArticle = async (id: number): Promise<void> => {
  const { error } = await supabase.from("articles").delete().eq("id", id);
  if (error) {
    throw error;
  }
};

//2. Thêm bài viết
export const insertArticle = async (
  id_category_articles: number,
  title: string,
  thumbnail: string,
  content: string,
  name_author: string,
  time_to_read: number,
) => {
  const { data, error } = await supabase
    .from("articles")
    .insert({
      id_category_articles,
      title,
      thumbnail,
      content,
      name_author,
      time_to_read,
    })
    .select()
    .single();
  if (error) {
    throw error;
  }

  return data;
};

//3. cập nhật bài viết
export async function updateArticle(
  id: number,
  id_category_articles: number,
  title: string,
  thumbnail: string,
  content: string,
  name_author: string,
  time_to_read: number,
) {
  const { error } = await supabase
    .from("articles")
    .update({
      id_category_articles,
      title,
      thumbnail,
      content,
      name_author,
      time_to_read,
      updated_at: new Date(),
    })
    .eq("id", id);

  if (error) throw error;
}

//4. upload ảnh bài viết
export const uploadArticleImage = async (imageUri: string) => {
    const response = await fetch(imageUri);
    const arrayBuffer = await response.arrayBuffer();
    const fileName = `${Date.now()}.jpg`;
    const { data, error } = await supabase.storage
        .from("article_images")
        .upload(fileName, arrayBuffer, {
            contentType: "image/jpeg",
            upsert: true,
        });
    if (error) {
        throw error;
    }
    const { data: publicData } = supabase.storage
        .from("article_images")
        .getPublicUrl(data.path);
    return publicData.publicUrl;
};