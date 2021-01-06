export function getApiURL(path) {
  if (path.startsWith("http")) {
    return path;
  }
  return `${process.env.NEXT_STATIC_HOSTNAME_API}${path}`;
}

// Helper to make GET requests to api
export async function fetchAPI(path) {
  const requestUrl = getApiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

export async function getBranding() {
  const branding = await fetchAPI("/branding");
  return branding;
}

export async function getHome() {
  const home = await fetchAPI("/home");
  return home;
}

export async function getCategories() {
  const categories = await fetchAPI("/categories");
  return categories;
}

export async function getCategory(name) {
  const category = await fetchAPI(`/categories/${name}`);
  return category;
}

export async function getPosts() {
  const posts = await fetchAPI("/posts");
  return posts;
}

export async function getPostsByCategory(category) {
  const posts = await fetchAPI(`/posts/?category.name_contains=${category}`);
  return posts;
}

export async function getPost(slug) {
  const post = await fetchAPI(`/posts/${slug}`);
  return post;
}
