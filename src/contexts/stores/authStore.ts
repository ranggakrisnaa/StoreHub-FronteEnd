import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
    token: string | null;
    isAuthenticated: boolean;
    setToken: (token: string) => void;
    clearToken: () => void;
}

export const useAuthStore = create<any, any>(
    persist(
        (set) => ({
            token: null,
            isAuthenticated: false,
            setToken: (token: any) => set({ token, isAuthenticated: true }),
            clearToken: () => set({ token: null, isAuthenticated: false }),
        }),
        {
            name: 'auth-storage',
            getStorage: () => localStorage,
        },
    ),
);
