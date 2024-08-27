import { useAuthStore } from '@/contexts/stores/authStore';
import { httpRequest } from '@/utils/httpService';

export default async function login(username: string, password: string) {
    try {
        const response = await httpRequest<{ token: string }>('/v1/users/login', {
            method: 'POST',
            body: { username, password },
        });

        useAuthStore.getState().setToken(response.token);
    } catch (error) {
        console.error(error);
    }
}
