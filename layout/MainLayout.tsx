import React, { FC, ReactNode } from 'react';

import { Footer, Header } from '../components';

export interface MainLayoutProps {
	children: ReactNode;
	header: 'homepage' | 'secondary';
}

export const MainLayout: FC<MainLayoutProps> = ({ children, header }) => {
	return (
		<>
			<Header header={header} />
			<main>{children}</main>
			<Footer />
		</>
	);
};
