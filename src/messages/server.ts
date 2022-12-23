import { RoomDto, UserDto } from '../other';
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

export type RoomCreatedMessage = Omit<RoomDto, 'player2'>;

export type RoomJoinMessage = { roomId: string; user: UserDto };

export type ExistingRoomsMessage = RoomDto[];

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
