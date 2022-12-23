import { Room, User } from '../other';
import {
  KeysAsValues,
  MergeObjects,
  UnionFromObject,
  WrapValueWithPayloadObject,
  WrapValueWithTypeObject,
} from '../utils';

export type ErrorMessage = {
  text: string;
};

export type RoomCreatedMessage = Omit<Room, 'player2'>;

export type RoomJoinMessage = { roomId: string; user: User };

export type ExistingRoomsMessage = Room[];

export type ServerMessages = {
  Error: ErrorMessage;
  RoomCreated: RoomCreatedMessage;
  RoomJoin: RoomJoinMessage;
  ExistingRooms: ExistingRoomsMessage;
};

export type ServerMessage = UnionFromObject<
  MergeObjects<
    WrapValueWithPayloadObject<ServerMessages>,
    WrapValueWithTypeObject<KeysAsValues<ServerMessages>>
  >
>;
