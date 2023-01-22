import { previewData } from "next/headers";

import { groq } from "next-sanity";

import { client } from "lib/sanity.client";

import BlogList from "components/BlogList";
import PreviewSuspense from "../../components/PreviewSuspense";
import PreviewBlogList from "components/PreviewBlogList";

const query = groq`
  *[_type=='post']{
    ...,
    author->,
    categories[]->
  } | order(publishedAt desc)
`;

export const revalidate = 60;

const Page = async () => {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#cd4939]">
              Loading Preview Data...
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);
  return <BlogList posts={posts} />;
};

export default Page;
