import { useAuthStore } from '@/contexts/stores/authTokenStore';
import { UserLoginType, UserRegisterType } from '@/types/userType';
import { httpRequest } from '@/utils/httpService';

export async function login(userLoginData: UserLoginType) {
    try {
        const response = await httpRequest<any>('/v1/users/login', {
            method: 'POST',
            body: userLoginData,
        });

        return response;
    } catch (error) {
        throw error;
    }
}

export async function register(userRegisterData: UserRegisterType) {
    try {
        const response = await httpRequest<any>('/v1/users/register', {
            method: 'POST',
            body: userRegisterData,
        });

        return response;
    } catch (error) {
        throw error;
    }
}
