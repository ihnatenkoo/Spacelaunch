import dayjs from 'dayjs';
import { useAppSelector } from '../../../hooks';
import { IntroLayout } from '../../../layout';
import { Description } from '../../ui/Description/Description';
import { Tag } from '../../ui/Tag/Tag';
import { Title } from '../../ui/Title/Title';

const EventIntro = () => {
  const { name, feature_image, date, description } = useAppSelector((state) => state.singleEvent);

  return (
    <IntroLayout image={feature_image}>
      <Title view="main" mb={20}>
        {name}
      </Title>

      <Tag>{dayjs.utc(date).format('MMM DD, YYYY, h:mm a')}</Tag>
      <Description>{description}</Description>
    </IntroLayout>
  );
};

export default EventIntro;
