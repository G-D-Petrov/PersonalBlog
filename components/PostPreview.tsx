import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div
      className="light:border light:border-gray-300 p-4 rounded-md shadow
    bg-white dark:bg-gray-800 hover:shadow-xl"
    >
      <p className="text-sm text-slate-400">{props.date}</p>

      <Link href={`/blog/${props.slug}`}>
        <h2 className=" text-slate-200 hover:underline mb-4 shadow-sm text-xl">{props.title}</h2>
      </Link>
      <p className="text-slate-700 dark:text-white">{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;