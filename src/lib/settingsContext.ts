import { createContext, Dispatch, SetStateAction } from "react";

export type SettingsInterface = {
  workMins: number;
  breakMins: number;
  setWorkMinutes?: Dispatch<SetStateAction<number>>;
  setBreakMinutes?: Dispatch<SetStateAction<number>>;
};

const SettingsContext = createContext<SettingsInterface>(
  {} as SettingsInterface,
);

export default SettingsContext;
