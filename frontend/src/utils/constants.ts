
export interface GrandstrategyData {
  subfactions: string[];
  battleTactics: string[];
  Grandstrategies: string[];
}

export interface SubfactionData {
  subfactions: string[];
  battleTactics: string[];
  Grandstrategies: string[];
}

export interface ArmyData {
  [key: string]: SubfactionData;
}

export interface AllArmyData {
  Chaos: ArmyData;
  Death: ArmyData;
  Destruction: ArmyData;
  Order: ArmyData;
}

export type AllianceKeys = keyof AllArmyData;

// Extract the keys of subfactions dynamically
export type SubfactionKeysHelper<T extends AllianceKeys> = AllArmyData[T][keyof AllArmyData[T]]['subfactions'];

export type SubfactionKeys<T extends AllianceKeys> = SubfactionKeysHelper<T>[number];

export type ArmyKeys<T extends AllianceKeys> = keyof AllArmyData[T];