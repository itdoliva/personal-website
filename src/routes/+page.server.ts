import { filteredContents } from '$lib/data/contents';

export async function load() {
  const sliceProjects = 9
  const sliceBlogs = 6

  const projects = filteredContents.projects.slice(0, sliceProjects)
  const blogs = filteredContents.blogs.slice(0, sliceBlogs)

  return {
    projects,
    moreProjects: filteredContents.projects.length > sliceProjects,
    blogs,
    moreBlogs: filteredContents.blogs.length > sliceBlogs,
  }
}
