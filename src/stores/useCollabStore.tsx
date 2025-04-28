import { create } from 'zustand';

type AppState = {
  isSamarbete: boolean;
  setIsSamarbete: (isSamarbete: boolean) => void;
};

export const useCollabStore = create<AppState>((set) => ({
  isSamarbete: false,
  setIsSamarbete: (state) => set({ isSamarbete: state }),
}));