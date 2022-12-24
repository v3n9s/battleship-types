export type UserDto = {
  id: string;
  name: string;
};

export type RoomDto = {
  id: string;
  name: string;
  player1: UserDto;
  player2?: UserDto | undefined;
};
