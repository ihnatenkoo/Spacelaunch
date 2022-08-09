import { FC } from 'react';

import { renderText } from '../../../../utils/';

import { useAppSelector } from '../../../../hooks';

import { Tag, Title } from '../../../../components';

import PayloadIcon from '/public/icons/payload-icon.svg';
import RocketIcon from '/public/icons/rocket-icon.svg';
import SpecificationIcon from '/public/icons/spec-icon.svg';

import styles from './RocketInfo.module.scss';

export const RocketInfo: FC = () => {
	const {
		name,
		fullName,
		family,
		type,
		country_code,
		variant,
		alias,
		min_stage,
		max_stage,
		length,
		diameter,
		launch_mass,
		to_thrust,
		apogee,
		leo_capacity,
		vehicle_range,
		total_launch_count,
		successful_launches,
		failed_launches,
	} = useAppSelector((state) => state.singleRocket);

	return (
		<section className={styles.info}>
			<div className={styles.info__tags}>
				<Tag gradient className={styles.info__tag}>
					{renderText(family)}
				</Tag>
				<Tag gradient className={styles.info__tag}>
					{renderText(type)}
				</Tag>
				<Tag>{renderText(country_code)}</Tag>
			</div>

			<div className={styles.feature}>
				<div className={styles.feature__item}>
					<RocketIcon />
					<Title view="h3" className={styles.feature__item__title}>
						Family
					</Title>
					<ul>
						<li>
							Name <span>{renderText(name)}</span>
						</li>
						<li>
							Family <span>{renderText(family)}</span>
						</li>
						<li>
							Varian <span>{renderText(variant)}</span>
						</li>
						<li>
							Full name
							<span>{renderText(fullName)}</span>
						</li>
						<li>
							Alias <span>{renderText(alias)}</span>
						</li>
					</ul>
				</div>

				<div className={styles.feature__item}>
					<SpecificationIcon />
					<Title view="h3" className={styles.feature__item__title}>
						Specifications
					</Title>
					<ul>
						<li>
							Minimum Stage
							<span>{renderText(min_stage)}</span>
						</li>
						<li>
							Max Stage
							<span>{renderText(max_stage)}</span>
						</li>
						<li>
							Length <span>{renderText(length, 'm')}</span>
						</li>
						<li>
							Diameter
							<span>{renderText(diameter, 'm')}</span>
						</li>
						<li>
							Fairing Diameter
							<span>{renderText(diameter, 'm')}</span>
						</li>
						<li>
							Launch Mass
							<span>{renderText(launch_mass, 'T')}</span>
						</li>
						<li>
							Thrust
							<span>{renderText(to_thrust, 'kN')}</span>
						</li>
						<li>
							Apogee (Sub-Orbital)
							<span>{renderText(apogee, 'km')}</span>
						</li>
					</ul>
				</div>

				<div className={styles.feature__item}>
					<PayloadIcon />
					<Title view="h3" className={styles.feature__item__title}>
						Payload Capacity
					</Title>
					<ul>
						<li>
							Capacity
							<span className={styles.feature__item__value}>
								{renderText(leo_capacity)}
							</span>
						</li>
						<li>
							Range
							<span className={styles.feature__item__value}>
								{renderText(vehicle_range)}
							</span>
						</li>
						<li>
							Total Launches
							<span className={styles.feature__item__value}>
								{renderText(total_launch_count)}
							</span>
						</li>
						<li>
							Successful Launches
							<span className={styles.feature__item__value}>
								{renderText(successful_launches)}
							</span>
						</li>
						<li>
							Failed Launches
							<span className={styles.feature__item__value}>
								{renderText(failed_launches)}
							</span>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};
