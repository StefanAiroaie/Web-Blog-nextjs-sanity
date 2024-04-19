import { fullBlog } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity"
import { PortableText } from "next-sanity";
import Image from "next/image";

const getData = async (slug: string) => {
  const query = `*[_type == "blog" && slug.current == "${slug}"]{
        "currentSlug": slug.current,
          title,
          content,
          titleImage
      }[0]`;

  const data = await client.fetch(query);
  return data;
};

const BlogArticle = async ({ params }: { params: { slug: string } }) => {
  const data: fullBlog = await getData(params.slug);

  return (
    <>
      <div className="mt-8">
        <h1>
          <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
            WebDev - Blog
          </span>
          <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sn:text-4xl">
            {data.title}
          </span>
        </h1>
        <Image
          src={urlFor(data.titleImage).url()}
          width={800}
          height={800}
          alt="Title Image"
          priority
          className="rounded-lg mt-8 border"
        />
      </div>

      <div className="mt-16 prose prose-green prose-lg dark:prose-invert prose-li:marker:text-primary">
        <PortableText value={data.content} />
      </div>
    </>
  );
};

export default BlogArticle;