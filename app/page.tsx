
import { simpleBlogCard } from "@/lib/interface";
import {client} from "../lib/sanity"
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { urlFor } from "../lib/sanity";

async function getData() {
  const query = `*[_type== 'blog']  | order(_createdAt desc){
    title, smallDescription,
      "currentSlug": slug.current,
    _id,
      titleImage
      
  }`
  const data = await client.fetch(query)
  return data;
}



export default async function Home() {

  const data: simpleBlogCard[] = await getData()
  return (
  
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 mb-5 gap-5">
        {data.map((post, idx) => {
          return (
            <Card key={idx}>
              <Image
                src={urlFor(post.titleImage).url()}
                alt={post.title}
                width={500}
                height={500}
                className="rounded-t-lg h-[200px] object-cover"
              />
              <CardContent className="mt-5">
                <h3 className="text-lg line-clamp-2 font-bold">{post.title}</h3>
                <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
                  {post.smallDescription}
                </p>

                <div className="flex justify-between gap-3 items-center mt-7">
                  <Button asChild className="w-full">
                    <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
                  </Button>
                  </div>

              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
 
  );
}
