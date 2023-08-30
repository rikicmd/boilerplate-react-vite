import { Auth } from 'models';
import { Error } from 'models/configs';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export const useConfigStore = create<Auth & Error>()(
  devtools(
    persist(
      (set) => ({
        is_login: false,
        login: () => set({ is_login: true }),
        logout: () => set({ is_login: false }),
        code: undefined,
        message: undefined,
        catchError: (value: Error) => set(value),
      }),
      {
        name: 'config',
        getStorage: () => localStorage,
      },
    ),
  ),
);
