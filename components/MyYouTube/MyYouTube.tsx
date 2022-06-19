import { FC, MutableRefObject, useEffect, useRef, useState } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import { Spinner } from '../ui/Spinner/Spinner';
import s from './MyYouTube.module.scss';
interface MyYouTubeProps {
  youtubeUrl: string;
}

export const MyYouTube: FC<MyYouTubeProps> = ({ youtubeUrl }) => {
  const youtubeRef = useRef<HTMLDivElement | null>(null);

  const [opts, setOpts] = useState<YouTubeProps['opts']>({
    width: '100%',
    height: ''
  });

  const calculateHeight = (ref: MutableRefObject<HTMLDivElement | null>): void => {
    if (!ref.current) return;

    setOpts((prevState: YouTubeProps['opts']) => ({
      ...prevState,
      height: (ref.current as HTMLDivElement).offsetWidth / 1.7
    }));
  };

  const handleResize = (): void => {
    calculateHeight(youtubeRef);
  };

  useEffect(() => {
    setTimeout(() => calculateHeight(youtubeRef));

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={youtubeRef} className={s.youtube}>
      {opts.height ? <YouTube videoId={youtubeUrl} opts={opts} /> : <Spinner />}
    </div>
  );
};
