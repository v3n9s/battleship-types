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

export type RoomCreatedMessage = Room;

export type RoomJoinMessage = { room: Room; user: User };

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
