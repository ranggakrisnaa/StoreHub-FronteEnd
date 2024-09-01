import { UserLoginType, UserRegisterType, UserVerifyType } from '@/types/userType';
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

export async function verify(userVerifyData: UserVerifyType) {
    try {
        console.log(userVerifyData);

        const response = await httpRequest<any>('/v1/users/verify-otp', {
            method: 'POST',
            body: userVerifyData,
        });

        return response;
    } catch (error) {
        throw error;
    }
}
