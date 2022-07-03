import { FC, PropsWithChildren } from 'react';
import { SBodyCard } from './styles';

const CardBody: FC<PropsWithChildren<object>> = ({ children }: PropsWithChildren<object>) => (
  <SBodyCard className={'card-body'}>{children}</SBodyCard>
);

export default CardBody;
