type GameLobbyPlayer = {
  id: number;
  name: string;
  host: boolean;
  rank: number;
  emblem: string;
}

type GameLobby = {
  id: number;
  lobbyId: number;
  name: string;
  players: GameLobbyPlayer[];
  maxPlayers: number;
  locked: boolean;
  currentGame: number;
  games: number[][];
  comment: string;
  location: string;
}

type UserAccount = {
  characters: MgoCharacter[];
  username: string;
  displayName: string;
  email: string;
  banned: boolean;
  bannedReason: string;
  exp: number;
  exp_alt: number;
  main: number;
}

type MgoGame = {
  id: number;
  host: number;
  lobby: number;
  name: string;
  max_players: number;
  password: string;
  current_game: number;
  games: string;
  comment: string;
}

type MgoCharacter = {
  id: number;
  user: number;
  name: string;
  rank: number;
  comment: string;
}

type UserNotification = {
  id: number;
  user: number;
  unread: number
  title: string;
  contents: string;
  type: string;
}

type TitleHistory = {
  id: number;
  chara: number;
  snake: number;
  chameleon: number;
  cuckoo: number;
  hog: number;
  elephant: number;
  kerotan: number;
  gako: number;
  komodo: number;
  skua: number;
  fish: number;
  whale: number;
  tortoise: number;
  squirrel: number;
  owl: number;
  bear: number;
  bee: number;
  eagle: number;
  jaws: number;
  crocodile: number;
  rat: number;
  sloth: number;
  waterbear: number;
  pigeon: number;
  chicken: number;
  tsuchinoko: number;
  hound: number;
  doberman: number;
  fox: number;
  foxhound: number;
  theboss: number;
  bigboss: number;
}

type MgoClan = {
  id: number;
  name: string;
}

type MgoClanMember = {
  id: number;
  clan: number;
  chara: number;
}

type MgoPlayer = {
  id: number;
  game: number;
  chara: number;
  team: number;
  ping: number;
  version: number;
}

type MgoUser = {
  id: number;
  username: string;
  password: string;
  display_name: string;
  email: string;
  banned_until: number;
  ban_reason: string;
  mgo2_main_exp: number;
  mgo2_alt_exp: number;
  mgo2_main: number;
  activate: string;
}

type MgoLobby = {
  id: number;
  players: number;
}

type MgoConnection = {
  id: number;
  public_ip: number;
}

type IPBlacklist = {
  id: number;
  ip: string;
}

type Stats = {
  id: number;
  chara: number;
  kills: number;
  deaths: number;
  wins: number;
  score: number;
  rounds: number;
  stuns: number;
  stuns_received: number;
  stuns_friendly: number;
  headshot_kills: number;
  headshot_deaths: number;
  headshot_stuns: number;
  headshot_stuns_received: number;
  lock_kills: number;
  lock_deaths: number;
  lock_stuns: number;
  lock_stuns_received: number;
  consecutive_kills: number;
  consecutive_deaths: number;
  consecutive_headshots: number;
  time: number;
  rolls: number;
  trapped: number;
  box_time: number;
  box_uses: number;
  melee: number;
  suicides: number;
  team_kills: number;
  radio: number;
  chat: number;
  cqc_given: number;
  cqc_taken: number;
  salutes: number;
  catapult: number;
  boosts: number;
  falls: number;
  scans: number;
  stats_dm: string;
  stats_sdm: string;
  stats_scap: string;
  stats_tdm: string;
  stats_cap: string;
  stats_base: string;
  stats_bomb: string;
  stats_race: string;
  stats_res: string;
  stats_tsne: string;
  stats_sm: string;
  knife_kills: number;
  knife_stuns: number;
  evg_time: number;
  bases_captured: number;
}

type StatsGameMode = {
  wins: number;
  rounds: number;
  score: number;
  time: number;
  kills: number;
  deaths: number;
  stuns: number;
  stunsRec: number;
  hsKills: number;
  hsDeaths: number;
  hsStuns: number;
  hsStunsRec: number;
  lockKills: number;
  lockDeaths: number;
  lockStuns: number
  lockStunsRec: number
}

type ShopItem = {
  id: number;
  name: string;
  cost: number;
  gear_slot: number;
  color: number;
  owned: boolean;
}