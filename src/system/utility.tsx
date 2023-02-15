type UserAccount = {
  displayName: string;
  username: string;
  email: string;
  bannedUntil: string;
  bannedReason: string;
  role: number;
};

export const getUserToken = () => {
  return localStorage.getItem('token');
};

export const isLoggedIn = () => {
  if (getUserToken() === null) {
    return false;
  }

  try {
    const expiry = localStorage.getItem('expiry');

    if (expiry === null) {
      return false;
    }

    const date = Date.parse(expiry);

    if (new Date().getTime() > date) {
      localStorage.removeItem('token');
      return false;
    }

    return true;
  } catch (e) {
    return false;
  }
};

export const getUserAccount = (): UserAccount | null => {
  if (!isLoggedIn()) {
    return null;
  }
  try {
    const account = localStorage.getItem('account');
    if (account) {
      return JSON.parse(account) as UserAccount;
    }
  } catch (e) {
    return null;
  }
  return null;
};

export const isModerator = (): boolean => {
  const account = getUserAccount();
  return account !== null && account.role >= 10;
};

export const isAdmin = (): boolean => {
  const account = getUserAccount();
  return account !== null && account.role >= 20;
};

export const logoutUser = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('account');
  localStorage.removeItem('expiry');
};

export const getRankPreview = (rank: number) => {
  return `https://mgo2pc.com/static/media/emblem/${rank}.png`;
  // change to /static/media/emblem/${rank}.png
};
let countArrayAnimalRanks:number = 0;

export const getRankImage= (rank: number) => {
  // change to `/static/media/emblem/${rank}.png`;
  return `https://mgo2pc.com/static/media/emblem/${arrayAnimalRanks[rank][1]}.png`;
};

export const getRankId = (name: string) => {
  switch (name.toLowerCase()) {
    case 'foxhound':
      return 1;
    case 'fox':
      return 2;
    case 'doberman':
      return 3;
    case 'hound':
      return 4;
    case 'crocodile':
      return 5;
    case 'eagle':
      return 6;
    case 'jaws':
      return 7;
    case 'waterbear':
      return 8;
    case 'sloth':
      return 9;
    case 'squirrel':
      return 10;
    case 'pigeon':
      return 11;
    case 'owl':
      return 12;
    case 'tsuchinoko':
      return 13;
    case 'snake':
      return 14;
    case 'kerotan':
      return 15;
    case 'gako':
      return 16;
    case 'chameleon':
      return 17;
    case 'chicken':
      return 18;
    case 'bear':
      return 19;
    case 'tortoise':
      return 20;
    case 'bee':
      return 21;
    case 'rat':
      return 22;
    case 'fish':
      return 23;
    case 'komodo':
      return 24;
    case 'skua':
      return 25;
    case 'whale':
      return 26;
    case 'elephant':
      return 27;
    case 'cuckoo':
      return 28;
    case 'hog':
      return 29;
    case 'bigboss':
      return 30;
    case 'theboss':
      return 31;
  }
  return 0;
};








// PlusMinus temporary hotfix
//below
export const arrayAnimalRanks = [
  // callName              /filename        / displayName
  ['reserved',             0,               'reserved'      ],
  ['Foxhound',             1,               'Foxhound'      ],
  ['Fox',                  2,               'Fox'           ],
  ['Doberman',             3,               'Doberman'      ],
  ['hound',                4,               'Hound'         ],
  ['crocodile',            5,               'Crocodile'     ],
  ['eagle',                6,               'Eagle'         ],
  ['jaws',                 7,               'Jaws'          ],
  ['waterbear',            8,               'WaterBear'     ], //?
  ['sloth',                9,               'Sloth'         ],
  ['squirrel',             10,              'Squirrel'      ],
  ['pigeon',               11,              'Pigeon'        ],
  ['owl',                  12,              'Owl'           ],
  ['tsuchinoko',           13,              'Tsuchinoko'    ],
  ['snake',                14,              'Snake'         ],
  ['kerotan',              15,              'Kerotan'       ],
  ['gako',                 16,              'GA-KO'         ],
  ['chameleon',            17,              'Chameleon'     ],
  ['chicken',              18,              'Chicken'       ],
  ['bear',                 19,              'Bear'          ], //missing: bear id:19 + no text for RankGuide.tsx
  ['tortoise',             20,              'Tortoise'      ],
  ['bee',                  21,              'Bee'           ],
  ['rat' ,                 22,              'rat'           ],
  ['fish',                 23,              'fish'          ],
  ['komododragon',         24,              'Komodo'        ], //missing: skua id:24 + no text for RankGuide.tsx
  ['skua',                 25,              'Skua'          ],
  ['killerwhale',          26,              'Whale'         ],
  ['elephant',             27,              'Elephant'      ],
  ['cuckoo',               28,              'Cuckoo'        ],
  ['hog',                  29,              'Hog'           ],
  ['bigboss',              30,              'Big Boss'      ] //missing: bigboss id:30 + text for RankGuide.tsx
  // ['theboss',           99,              'The Boss'      ] //missing icon id:31 + no text for RankGuide.tsx
];

// console.log(arrayAnimalRanks[1][2]); --> Foxhound











export const getMapPreview = (mapId: number) => {
  try {
    return require(`../assets/img/maps/${mapId}.jpg`);
  } catch {
    return require('../assets/img/maps/1.jpg');
  }
};

export const getRegionFlag = (region: string) => {
  return `https://purecatamphetamine.github.io/country-flag-icons/3x2/${region}.svg`;
};

/**
 * Get the time passed since a date in a readable format
 * @param date
 */
export function formatTime(time: number) {
  const seconds = Math.floor(time);
  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return `${interval} years`;
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return `${interval} months`;
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 7) {
    return `${interval} days`;
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return `${interval} hours`;
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return `${interval} minutes`;
  }
  return Math.floor(seconds) + ' seconds';
}

/**
 * Get the time passed since a date in a readable format
 * @param date
 */
export function timeSince(date: Date) {
  const diff = new Date().getTime() - date.getTime();
  const seconds = Math.floor(diff / 1000);
  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + ' years';
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + ' months';
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + ' days';
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + ' hours';
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + ' minutes';
  }
  return Math.floor(seconds) + ' seconds';
}

/*
S+ 32xx-xxxx (?)
S 2925-3275(?)
S- 2725-2924(?)
AA+ 2525-2724
AA 2350-2524
AA- 2175-2349
A+ 2000-2174
A 1850-1999
A- 1700-1849
BB+ 1550-1699
BB 1400-1549
BB- 1250-1399
B+ 1100-1249
B 950-1099
B- 800-949
C+ 650-799
C 500-649
C- 375-499
ROOKIE++ 250-374
ROOKIE+ 125-249
ROOKIE 0-124
*/

const gradePoints = [
  0, 125, 250, 375, 500, 600, 800, 950, 1100, 1250, 1400, 1550, 1700, 1850, 2000, 2175, 2350, 2525,
  2725, 2925, 3275,
];

export const getLevelReq = (level: number) => {
  if (!gradePoints[level]) {
    return 0;
  }
  return gradePoints[level];
};

export const getExpLevel = (exp: number) => {
  if (exp < 125) {
    return 0;
  } else if (exp < 250) {
    return 1;
  } else if (exp < 375) {
    return 2;
  } else if (exp < 500) {
    return 3;
  } else if (exp < 650) {
    return 4;
  } else if (exp < 800) {
    return 5;
  } else if (exp < 950) {
    return 6;
  } else if (exp < 1100) {
    return 7;
  } else if (exp < 1250) {
    return 8;
  } else if (exp < 1400) {
    return 9;
  } else if (exp < 1550) {
    return 10;
  } else if (exp < 1700) {
    return 11;
  } else if (exp < 1850) {
    return 12;
  } else if (exp < 2000) {
    return 13;
  } else if (exp < 2175) {
    return 14;
  } else if (exp < 2350) {
    return 15;
  } else if (exp < 2525) {
    return 16;
  } else if (exp < 2725) {
    return 17;
  } else if (exp < 2975) {
    return 18;
  } else if (exp < 3275) {
    return 19;
  }
  return 20;
};
 
