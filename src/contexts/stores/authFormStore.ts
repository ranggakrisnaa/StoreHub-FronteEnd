import { create } from 'zustand';

interface AuthState {
    token: string | null;
    isAuthenticated: boolean;
    loginData: {
        usernameOrEmail: string;
        password: string;
    };
    registerData: {
        email: string;
        username: string;
        name: string;
        phoneNumber: string;
        password: string;
        confirmPassword: string;
    };
    setLoginData: (field: keyof AuthState['loginData'], value: string) => void;
    setRegisterData: (field: keyof AuthState['registerData'], value: string) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    token: null,
    isAuthenticated: false,
    loginData: {
        usernameOrEmail: '',
        password: '',
    },
    registerData: {
        email: '',
        username: '',
        name: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
    },
    setLoginData: (field, value) =>
        set((state) => ({
            loginData: { ...state.loginData, [field]: value },
        })),
    setRegisterData: (field, value) =>
        set((state) => ({
            registerData: { ...state.registerData, [field]: value },
        })),
}));
