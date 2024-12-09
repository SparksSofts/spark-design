import Card from 'antd';
import InternalCard from './Card';
import Room from './Room';

export type {CardRoomProps} from './Room';

type InternalCardType = typeof InternalCard;

export interface CardInterface extends InternalCardType {
  Room: typeof Room;
  Grid: typeof Card.Grid;
}

const SSCard = InternalCard as CardInterface;

// SSCard.Grid = Card.Grid;
SSCard.Room = Room;

export default SSCard;
