import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/getPostMetadata";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const BlogPost = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div>
      <div className="my-12 text-center">
        <h1 className="text-3xl text-slate-600 font-extrabold dark:text-white">{post.data.title}</h1>
        <p className="text-slate-400 dark:text-slate-200 mt-2">{post.data.date}</p>
      </div>

      <article className="prose dark:prose-invert">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default BlogPost;