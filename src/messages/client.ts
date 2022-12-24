import {
  KeysAsValues,
  MergeObjects,
  UnionFromObject,
  WrapValueWithPayloadObject,
  WrapValueWithTypeObject,
} from '../utils';

export type CreateRoomMessage = {
  name: string;
  password: string;
};

export type JoinRoomMessage = {
  id: string;
  password: string;
};

export type LeaveRoomMessage = {
  id: string;
};

export type ClientMessages = {
  CreateRoom: CreateRoomMessage;
  JoinRoom: JoinRoomMessage;
  LeaveRoom: LeaveRoomMessage;
};

export type ClientMessage = UnionFromObject<
  MergeObjects<
    WrapValueWithPayloadObject<ClientMessages>,
    WrapValueWithTypeObject<KeysAsValues<ClientMessages>>
  >
>;
