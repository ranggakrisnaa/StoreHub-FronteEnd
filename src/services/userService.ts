import { useAuthStore } from '@/contexts/stores/authTokenStore';
import { httpRequest } from '@/utils/httpService';

export default async function login(usernameOrEmail: string, password: string) {
    try {
        const response = await httpRequest<any>('/v1/users/login', {
            method: 'POST',
            body: { usernameOrEmail, password },
        });

        useAuthStore.getState().setToken(response.token);

        return response;
    } catch (error) {
        throw error;
    }
}
