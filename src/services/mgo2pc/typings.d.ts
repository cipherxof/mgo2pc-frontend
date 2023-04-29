// @ts-ignore
/* eslint-disable */

declare namespace API {
  type Response = {
    success: boolean;
    message: string;
  };

  type GameList = {
    data: {
      players: number;
      lobbies: GameLobby[];
    };
  };

  type ResetPassword = {
    data: string;
    success: boolean;
    message: string;
  };

  type ServerStats = {
    data: { stats: StatsGame[]; static: any };
    success: boolean;
    message: string;
  };

  type Profile = {
    data: ProfileData;
    success: boolean;
    message: string;
  };

  type Clan = {
    data: {
      name: string;
      comment: string;
      notice: string;
      leader: string;
      members: any[];
      owner: boolean;
      emblem: string;
    };
    success: boolean;
    message: string;
  };

  type Titles = {
    data: TitleHistory;
    success: boolean;
    message: string;
  };

  type Rankings = {
    pages: number;
    data: RankingsData[];
    success: boolean;
    message: string;
  };

  type Account = {
    data: {
      username: string;
      displayName: string;
      email: string;
      banned: boolean;
      bannedReason: string;
      main: number;
      exp: number;
      exp_alt: number;
      characters: MgoCharacter[];
      rp: number;
    };
    success: boolean;
    message: string;
  };

  type ShopItems = {
    data: {
      items: ShopItem[];
      slots: ShopSlots[];
      characters: MgoCharacter[];
    };
    success: boolean;
    message: string;
  };

  type ServerStatus = {
    data: {
      status: number;
      players: number;
    };
    success: boolean;
    message: string;
  };

  type UpdateAccount = {
    displayName: string;
    password: string;
    passwordNew: string;
  };
}
