export const youtubeParser = (videoUrl: string | null): string | undefined => {
  if (!videoUrl) return;

  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  const match = videoUrl.match(regExp);

  if (match && match[7].length == 11) {
    return match[7];
  }

  return;
};
