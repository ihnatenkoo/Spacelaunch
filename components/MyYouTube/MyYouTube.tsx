import { FC } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import s from './MyYouTube.module.scss';

interface MyYouTubeProps {
  videoUrl: string | null;
}

export const MyYouTube: FC<MyYouTubeProps> = ({ videoUrl }) => {
  const youtube_parser = (videoUrl: string): string | undefined => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const match = videoUrl.match(regExp);
    if (match && match[7].length == 11) {
      const id = match[7];
      return id;
    } else {
      return;
    }
  };

  const videoId = videoUrl ? youtube_parser(videoUrl) : undefined;

  const opts: YouTubeProps['opts'] = {
    width: '100%',
    height: '700'
  };

  return videoId ? <YouTube videoId={videoId} opts={opts} className={s.youtube} /> : <></>;
};
