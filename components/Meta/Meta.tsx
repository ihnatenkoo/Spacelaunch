import Head from 'next/head';
import { FC } from 'react';

interface MetaProps {
  title: string;
  description: string;
}

export const Meta: FC<MetaProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};
