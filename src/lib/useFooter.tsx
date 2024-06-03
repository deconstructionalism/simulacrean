import React from "react";
import { create } from "zustand"

interface IFooterState {
  footerContent: React.ReactNode | null;
  setFooterContent: (content: React.ReactNode) => void;
}

const useFooter = create<IFooterState>((set) => ({
  footerContent: null,
  setFooterContent: (content: React.ReactNode) => set({ footerContent: content })
}))

export default useFooter;