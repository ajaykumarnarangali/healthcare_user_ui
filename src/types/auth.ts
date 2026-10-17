export interface AuthState {
    accessToken: string | null;
    userId: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
}

export type UserState = {
    name: string | null;
    email: string | null;
    profileImage: string | null;
};

export type PermissionState = {
    permissions: string[];
}