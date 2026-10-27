export interface AuthState {
    accessToken: string | null;
    userId: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
}

export type UserState = {
    name: string | null;
    email: string | null;
    role: string | null;
    profileImage: string | null;
};

export type PermissionState = {
    permissions: string[];
}

export type Role =
    | "PATIENT"
    | "DOCTOR";

export interface ProtectedRouteProps {
    allowedRole: Role;
}

// Doctor permissions
export type DoctorPermission =
    // Dashboard
    | 'dashboard:view'

    // Clinical
    | 'appointment:view'
    | 'appointment:manage'
    | 'patient:view'
    | 'consultation:view'
    | 'consultation:manage'

    // Work
    | 'schedule:view'
    | 'schedule:manage'
    | 'independent_practice:view'
    | 'independent_practice:manage'
    | 'hospital_assignment:view'
    | 'hospital_assignment:manage'
    | 'leave:view'
    | 'leave:manage'

    // Communication
    | 'message:view'
    | 'message:send'
    | 'notification:view'

    // Account
    | 'earning:view'
    | 'earning:manage'
    | 'profile:view'
    | 'profile:update'
    | 'settings:view'
    | 'settings:update';


export type PatientPermission =
    // Dashboard
    | 'dashboard:view'

    // Explore
    | 'doctor:view'
    | 'hospital:view'

    // Appointments
    | 'appointment:view'
    | 'appointment:create'
    | 'appointment:manage'

    // Payments
    | 'payment:view'
    | 'payment:create'

    // Communication
    | 'consultation:view'
    | 'consultation:join'
    | 'message:view'
    | 'message:send'
    | 'notification:view'

    // Account
    | 'profile:view'
    | 'profile:update'
    | 'settings:view'
    | 'settings:update';
