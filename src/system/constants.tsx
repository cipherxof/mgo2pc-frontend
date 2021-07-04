export enum MgoMode {
  Normal = 0,
  Drebin = 2,
  Headshots = 4
}

export enum MgoMap {
  ForestFirefight = 1,
  AmbushAlley = 2,
  UrbanUltimatum = 3,
  GronznyjGrad = 4,
  CoppertownConflict = 5,
  HazardHouse = 6,
  BloodBath = 7,
  TombOfTubes = 8,
  RavagedRiverfront = 9,
  SiloSunset = 10,
  IceboundInferno = 11,
  MidtownMaelstrom = 12,
  WinterWarehouse = 13,
  VirtuousVista = 14,
  OuterOutlet = 15,
  DesertDuel = 17
}

export enum MgoGameMode {
  Deathmatch = 0,
  TeamDeathmatch = 1,
  RescueMission = 2,
  CaptureMission = 3,
  SneakingMission = 4,
  BaseMission = 5,
  BombMission = 6,
  TeamSneaking = 7,
  StealthDeathmatch = 12,
  Interval = 13,
  SoloCapture = 15,
  RaceMission = 16
}

export const MgoModeNames = {
  [MgoMode.Normal]: "Normal",
  [MgoMode.Drebin]: "Drebin Points Enabled",
  [MgoMode.Headshots]: "Headshots Only",
}

export const MgoMapNames = {
  [MgoMap.ForestFirefight]: "Forest Firefight",
  [MgoMap.AmbushAlley]: "Ambush Alley",
  [MgoMap.UrbanUltimatum]: "Urban Ultimatum",
  [MgoMap.GronznyjGrad]: "Gronznyj Grad",
  [MgoMap.CoppertownConflict]: "Coppertown Conflict",
  [MgoMap.HazardHouse]: "Hazard House",
  [MgoMap.BloodBath]: "Blood Bath",
  [MgoMap.TombOfTubes]: "Tomb of Tubes",
  [MgoMap.RavagedRiverfront]: "Ravaged Riverfront",
  [MgoMap.SiloSunset]: "Silo Sunset",
  [MgoMap.IceboundInferno]: "Icebound Inferno",
  [MgoMap.MidtownMaelstrom]: "Midtown Maelstrom",
  [MgoMap.WinterWarehouse]: "Winter Warehouse",
  [MgoMap.VirtuousVista]: "Virtuous Vista",
  [MgoMap.OuterOutlet]: "Outer Outlet",
  [MgoMap.DesertDuel]: "Desert Duel"
}

export const MgoGameModeNames = {
  [MgoGameMode.Deathmatch]: "Deathmatch",
  [MgoGameMode.TeamDeathmatch]: "Team Deathmatch",
  [MgoGameMode.RescueMission]: "Rescue Mission",
  [MgoGameMode.CaptureMission]: "Capture Mission",
  [MgoGameMode.SneakingMission]: "Sneaking Mission",
  [MgoGameMode.BaseMission]: "Base Mission",
  [MgoGameMode.BombMission]: "Bomb Mission",
  [MgoGameMode.TeamSneaking]: "Team Sneaking",
  [MgoGameMode.StealthDeathmatch]: "Stealth Deathmatch",
  [MgoGameMode.Interval]: "Interval",
  [MgoGameMode.SoloCapture]: "Solo Capture",
  [MgoGameMode.RaceMission]: "Race Mission",
}