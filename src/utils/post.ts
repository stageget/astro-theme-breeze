import { getCollection } from "astro:content";

export const getPosts = async () => {
  const posts = await getCollection("posts", ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  });

  return posts.sort((a, b) => {
    const aDate = new Date(a.data.createdAt).getTime();
    const bDate = new Date(b.data.createdAt).getTime();
    return bDate - aDate;
  });
};

export const getRecentPosts = async (num: number) => {
  return (await getPosts()).slice(0, num);
};

export const getProjects = async () => {
  const projects = await getCollection("projects", ({ data }) => {
    // 只有在正式環境 (PROD) 才會過濾掉草稿，開發環境 (DEV) 依然看得到
    return import.meta.env.PROD ? data.draft !== true : true;
  });

  // 注意：你的 projects schema 目前沒有 createdAt 欄位
  // 這裡可以改用 title 排序，或者先不排序直接回傳
  return projects.sort((a, b) => {
    return a.data.title.localeCompare(b.data.title);
  });
};
