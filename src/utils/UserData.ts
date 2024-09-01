import { CookieValueTypes, getCookie, setCookie } from 'cookies-next';

export function saveUserData(key: string, value: string): void {
    setCookie(key, value, { secure: true });
}

export function getUserData(credentials: string): CookieValueTypes {
    return getCookie(credentials);
}
