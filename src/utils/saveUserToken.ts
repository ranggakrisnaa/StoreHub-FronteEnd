import { cookies } from 'next/headers';

export type Tokens = {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
};

export default function saveUserTokens(credentials: Tokens) {
    const data = JSON.stringify(credentials);

    cookies().set('user', data, { secure: true });
}
