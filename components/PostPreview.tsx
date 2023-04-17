import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div
      className="border border-slate-300 p-4 rounded-md shadow
    bg-white hover:shadow-xl"
    >
      <p className="text-sm text-slate-400">{props.date}</p>

      <Link href={`/blog/${props.slug}`}>
        <h2 className=" text-violet-600 hover:underline mb-4 shadow-sm">{props.title}</h2>
      </Link>
      <p className="text-slate-700">{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;