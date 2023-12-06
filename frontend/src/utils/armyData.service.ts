import { AllianceKeys, ArmyKeys } from "./constants";
import { allArmyAOSData } from "./armyData";

export const getGrandAlliance = (): AllianceKeys[] => Object.keys(allArmyAOSData) as AllianceKeys[];

export const getArmies = <T extends AllianceKeys>(alliance: T): ArmyKeys<T>[] =>
  Object.keys(allArmyAOSData[alliance] || {}) as ArmyKeys<T>[];

export const getSubfactions = <T extends AllianceKeys>(alliance: T, selectedArmy: ArmyKeys<T>): string[] =>
  allArmyAOSData[alliance]?.[selectedArmy]?.subfactions || [];

export const getGrandStrategies = <T extends AllianceKeys>(alliance: T, selectedArmy: ArmyKeys<T>): string[] =>
  allArmyAOSData[alliance]?.[selectedArmy]?.Grandstrategies || [];