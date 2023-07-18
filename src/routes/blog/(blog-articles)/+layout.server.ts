import { filteredContents } from "$lib/data/contents";

export async function load({ url }: { url: { pathname: string } }) {
  const { pathname } = url;
  const slug = pathname.replace('/', '');
  const blog = filteredContents.blogs.find((blog) => blog.slug === slug);

  return {
    blog
  };
}
