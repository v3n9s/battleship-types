export type UserDto = {
  id: string;
  name: string;
};

export type RoomDto = {
  id: string;
  name: string;
  hasPassword: boolean;
  player1: UserDto;
  player2?: UserDto | undefined;
};
