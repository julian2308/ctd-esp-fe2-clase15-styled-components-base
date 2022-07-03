import { FC, PropsWithChildren } from 'react';
import CardImage from 'features/card/card-image.component';
import CardBody from 'features/card/card-body.component';
import { StyledCard } from './styles';

type CompoundCard = FC<PropsWithChildren<object>> & {
  Image: FC<PropsWithChildren<object>>;
  Body: FC<PropsWithChildren<object>>;
};

const Card: CompoundCard = ({ children }: PropsWithChildren<object>) => (
  <StyledCard>{children}</StyledCard>
);

Card.Image = CardImage;
Card.Body = CardBody;

export default Card;
