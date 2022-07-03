import { FC, PropsWithChildren } from 'react';
import { SImageCard } from './styles';

const CardImage: FC<PropsWithChildren<object>> = ({ children }: PropsWithChildren<object>) => (
  <SImageCard className={'card-image'}>{children}</SImageCard>
);

export default CardImage;
