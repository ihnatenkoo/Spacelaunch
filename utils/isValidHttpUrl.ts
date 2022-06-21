export const isValidHttpUrl = (link: string | URL): URL | undefined => {
  let url;

  try {
    url = new URL(link);
  } catch (_) {
    return undefined;
  }

  return url;
};
