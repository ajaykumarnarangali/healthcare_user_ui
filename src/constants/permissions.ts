
export const DOCTOR_PERMISSIONS = {
    DASHBOARD: {
        VIEW: 'dashboard:view',
    },

    APPOINTMENT: {
        VIEW: 'appointment:view',
        MANAGE: 'appointment:manage',
    },

    PATIENT: {
        VIEW: 'patient:view',
    },

    CONSULTATION: {
        VIEW: 'consultation:view',
        MANAGE: 'consultation:manage',
    },

    SCHEDULE: {
        VIEW: 'schedule:view',
        MANAGE: 'schedule:manage',
    },

    INDEPENDENT_PRACTICE: {
        VIEW: 'independent_practice:view',
        MANAGE: 'independent_practice:manage',
    },

    HOSPITAL_ASSIGNMENT: {
        VIEW: 'hospital_assignment:view',
        MANAGE: 'hospital_assignment:manage',
    },

    LEAVE: {
        VIEW: 'leave:view',
        MANAGE: 'leave:manage',
    },

    MESSAGE: {
        VIEW: 'message:view',
        SEND: 'message:send',
    },

    NOTIFICATION: {
        VIEW: 'notification:view',
    },

    EARNING: {
        VIEW: 'earning:view',
        MANAGE: 'earning:manage',
    },

    PROFILE: {
        VIEW: 'profile:view',
        UPDATE: 'profile:update',
    },

    SETTINGS: {
        VIEW: 'settings:view',
        UPDATE: 'settings:update',
    },
} as const;



export const PATIENT_PERMISSIONS = {
    DASHBOARD: {
        VIEW: 'dashboard:view',
    },

    DOCTOR: {
        VIEW: 'doctor:view',
    },

    HOSPITAL: {
        VIEW: 'hospital:view',
    },

    APPOINTMENT: {
        VIEW: 'appointment:view',
        CREATE: 'appointment:create',
        MANAGE: 'appointment:manage',
    },

    PAYMENT: {
        VIEW: 'payment:view',
        CREATE: 'payment:create',
    },

    CONSULTATION: {
        VIEW: 'consultation:view',
        JOIN: 'consultation:join',
    },

    MESSAGE: {
        VIEW: 'message:view',
        SEND: 'message:send',
    },

    NOTIFICATION: {
        VIEW: 'notification:view',
    },

    PROFILE: {
        VIEW: 'profile:view',
        UPDATE: 'profile:update',
    },

    SETTINGS: {
        VIEW: 'settings:view',
        UPDATE: 'settings:update',
    },
} as const;
