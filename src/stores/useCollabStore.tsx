import { create } from 'zustand';

type AppState = {
  isSamarbete: boolean;
  isLandingPage: boolean;
  setIsSamarbete: (isSamarbete: boolean) => void;
  setIsLandingPage: (isSamarbete: boolean) => void;
};

export const useCollabStore = create<AppState>((set) => ({
  isSamarbete: false,
  setIsSamarbete: (state) => set({ isSamarbete: state }),
  isLandingPage: false,
  setIsLandingPage: (state) => set({ isLandingPage: state }),

}));