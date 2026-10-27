import type {
    PatientSidebarGroup,
    DoctorSidebarGroup
} from "../types/navigation";
import { store } from "../store/store";
import type { Role } from "../types/auth";

import {
    IconDashboard,
    IconCalendar,
    IconUser,
    IconVideo,
    IconMessageSquare,
    IconBell,
    IconCreditCard,
    IconSettings,
    IconHospital,
    IconDoctor
} from "../components/Icons";

function getDoctorSidebarData(): DoctorSidebarGroup[] {
    return [
        {
            label: 'Overview',
            items: [
                {
                    id: 'dashboard',
                    label: 'Dashboard',
                    path: '/doctor/dashboard',
                    Icon: IconDashboard,
                    permission: 'dashboard:view',
                },
            ],
        },

        {
            label: 'Clinical',
            items: [
                {
                    id: 'appointments',
                    label: 'Appointments',
                    path: '/doctor/appointments',
                    Icon: IconCalendar,
                    permission: 'appointment:view',
                },
                {
                    id: 'patients',
                    label: 'Patients',
                    path: '/doctor/patients',
                    Icon: IconUser,
                    permission: 'patient:view',
                },
                {
                    id: 'consultations',
                    label: 'Consultations',
                    path: '/doctor/consultations',
                    Icon: IconVideo,
                    permission: 'consultation:view',
                },
            ],
        },

        {
            label: 'Work',
            items: [
                {
                    id: 'schedule',
                    label: 'Schedule',
                    path: '/doctor/schedule',
                    Icon: IconCalendar,
                    permission: 'schedule:view',
                },
                {
                    id: 'independent-practice',
                    label: 'Independent Practice',
                    path: '/doctor/independent-practice',
                    Icon: IconUser,
                    permission: 'independent_practice:view',
                },
                {
                    id: 'hospital-assignments',
                    label: 'Hospital Assignments',
                    path: '/doctor/hospital-assignments',
                    Icon: IconHospital,
                    permission: 'hospital_assignment:view',
                },
                {
                    id: 'leave',
                    label: 'Leave Management',
                    path: '/doctor/leave',
                    Icon: IconCalendar,
                    permission: 'leave:view',
                },
            ],
        },

        {
            label: 'Communication',
            items: [
                {
                    id: 'chat',
                    label: 'Chat',
                    path: '/doctor/chat',
                    Icon: IconMessageSquare,
                    permission: 'message:view',
                    badge: 3,
                },
                {
                    id: 'notifications',
                    label: 'Notifications',
                    path: '/doctor/notifications',
                    Icon: IconBell,
                    permission: 'notification:view',
                    badge: 5,
                },
            ],
        },

        {
            label: 'Account',
            items: [
                {
                    id: 'earnings',
                    label: 'Earnings & Payments',
                    path: '/doctor/earnings',
                    Icon: IconCreditCard,
                    permission: 'earning:view',
                },
                {
                    id: 'profile',
                    label: 'My Profile',
                    path: '/doctor/profile',
                    Icon: IconUser,
                    permission: 'profile:view',
                },
                {
                    id: 'settings',
                    label: 'Settings',
                    path: '/doctor/settings',
                    Icon: IconSettings,
                    permission: 'settings:view',
                },
            ],
        },
    ];
}

const getPatientSidebarData = (): PatientSidebarGroup[] => [
    {
        label: 'Overview',
        items: [
            {
                id: 'dashboard',
                label: 'Dashboard',
                path: '/patient/dashboard',
                Icon: IconDashboard,
                permission: 'dashboard:view',
            },
        ],
    },

    {
        label: 'Explore',
        items: [
            {
                id: 'doctors',
                label: 'Find Doctors',
                path: '/patient/doctors',
                Icon: IconDoctor,
                permission: 'doctor:view',
            },
            {
                id: 'hospitals',
                label: 'Find Hospitals',
                path: '/patient/hospitals',
                Icon: IconHospital,
                permission: 'hospital:view',
            },
        ],
    },

    {
        label: 'Appointments',
        items: [
            {
                id: 'appointments',
                label: 'Appointments',
                path: '/patient/appointments',
                Icon: IconCalendar,
                permission: 'appointment:view',
            },
            {
                id: 'payments',
                label: 'Payments',
                path: '/patient/payments',
                Icon: IconCreditCard,
                permission: 'payment:view',
            },
        ],
    },

    {
        label: 'Communication',
        items: [
            {
                id: 'consultations',
                label: 'Consultations',
                path: '/patient/consultations',
                Icon: IconVideo,
                permission: 'consultation:view',
            },
            {
                id: 'chat',
                label: 'Chat',
                path: '/patient/chat',
                Icon: IconMessageSquare,
                permission: 'message:view',
            },
            {
                id: 'notifications',
                label: 'Notifications',
                path: '/patient/notifications',
                Icon: IconBell,
                permission: 'notification:view',
            },
        ],
    },

    {
        label: 'Account',
        items: [
            {
                id: 'profile',
                label: 'My Profile',
                path: '/patient/profile',
                Icon: IconUser,
                permission: 'profile:view',
            },
            {
                id: 'settings',
                label: 'Settings',
                path: '/patient/settings',
                Icon: IconSettings,
                permission: 'settings:view',
            },
        ],
    },
];

export function getPermittedSidebarGroups(role: Role) {

    const initialSidebarData =
        role === 'PATIENT'
            ? getPatientSidebarData()
            : getDoctorSidebarData();

    const permissions = store.getState().permissions.permissions;
    const userPermission = new Set(permissions);

    type sidebarGroup<T extends Role> =
        T extends 'PATIENT'
        ? PatientSidebarGroup
        : DoctorSidebarGroup;

    const permittedSideBarGroups = initialSidebarData.reduce<sidebarGroup<Role>[]>((result, group) => {
        const items = group.items.filter(
            (item) =>
                !item.permission ||
                userPermission.has(item.permission)
        );

        if (items.length > 0) {
            result.push({ ...group, items } as sidebarGroup<Role>);
        }

        return result;
    }, []);

    return initialSidebarData;
}