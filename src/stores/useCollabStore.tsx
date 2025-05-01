import { create } from 'zustand';

type AppState = {
  isSamarbete: boolean;
  headerBg: boolean;
  isLandingPage: boolean;
  setIsSamarbete: (isSamarbete: boolean) => void;
  setHeaderBg: (headerBg: boolean) => void;
  setIsLandingPage: (isSamarbete: boolean) => void;
};

export const useCollabStore = create<AppState>((set) => ({
  isSamarbete: false,
  setIsSamarbete: (state) => set({ isSamarbete: state }),
  headerBg: false,
  setHeaderBg: (state) => set({headerBg: state}),
  isLandingPage: false,
  setIsLandingPage: (state) => set({ isLandingPage: state }),

}));