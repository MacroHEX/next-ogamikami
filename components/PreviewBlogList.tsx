"use client";

import { usePreview } from "../lib/sanity.preview";
import { BlogList } from "components";

type Props = {
  query: string;
};

export const PreviewBlogList = ({ query }: Props) => {
  const posts = usePreview(null, query);
  return <BlogList posts={posts} />;
};
