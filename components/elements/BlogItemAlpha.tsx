import Image from "next/image";
import Link from "next/link";
import { FiChevronRight, FiClock } from "react-icons/fi";
import ItemWrapper from "./ItemWrapper";

interface Props {
  blogPost: any;
}

export default function BlogItem({ blogPost }: Props) {
  const { tag, slug, title, coverImage, expired, date } = blogPost;

  return (
    <ItemWrapper
      type="blogs"
      tag={tag}
      slug={slug}
      expired={expired}
      image={coverImage}
    >
      <div className="font-medium">
        <div className="flex mb-4">
          <span className="flex items-center text-slate-400 text-sm">
            <FiClock className="size-4 text-slate-900 dark:text-white me-1.5"></FiClock>
            {date}
          </span>
        </div>
        {expired && (
          <span className="bg-[#ad0303] text-white text-sm mr-1 py-1">
            &nbsp;EXPIRED&nbsp;
          </span>
        )}
        {title}
      </div>
    </ItemWrapper>
  );
}
