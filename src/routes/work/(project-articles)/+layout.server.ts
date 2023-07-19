import { filteredContents } from "$lib/data/contents";

export async function load({ url }: { url: { pathname: string } }) {
  const { pathname } = url;
  const slug = pathname.replace(/^\/+|\/+$/g, '').split('/')[1];
  const project = filteredContents.projects.find((project) => project.slug === slug);

  return {
    project
  };
}
