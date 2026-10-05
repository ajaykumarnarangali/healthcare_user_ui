import type {
    PatientSidebarGroup,
    DoctorSidebarGroup
} from "../types/navigation";

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


export function getDoctorSidebarData(): DoctorSidebarGroup[] {
    return [
        {
            label: 'Overview',
            items: [
                {
                    id: 'dashboard',
                    label: 'Dashboard',
                    path: '/doctor/dashboard',
                    Icon: IconDashboard,
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
                },
                {
                    id: 'patients',
                    label: 'Patients',
                    path: '/doctor/patients',
                    Icon: IconUser,
                },
                {
                    id: 'consultations',
                    label: 'Consultations',
                    path: '/doctor/consultations',
                    Icon: IconVideo,
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
                },
                {
                    id: 'independent-practice',
                    label: 'Independent Practice',
                    path: '/doctor/independent-practice',
                    Icon: IconUser,
                },
                {
                    id: 'hospital-assignments',
                    label: 'Hospital Assignments',
                    path: '/doctor/hospital-assignments',
                    Icon: IconHospital,
                },
                {
                    id: 'leave',
                    label: 'Leave Management',
                    path: '/doctor/leave',
                    Icon: IconCalendar,
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
                    badge: 3,
                },
                {
                    id: 'notifications',
                    label: 'Notifications',
                    path: '/doctor/notifications',
                    Icon: IconBell,
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
                },
                {
                    id: 'profile',
                    label: 'My Profile',
                    path: '/doctor/profile',
                    Icon: IconUser,
                },
                {
                    id: 'settings',
                    label: 'Settings',
                    path: '/doctor/settings',
                    Icon: IconSettings,
                },
            ],
        },
    ];
}

export const getPatientSidebarData = (): PatientSidebarGroup[] => [
    {
        label: 'Overview',
        items: [
            {
                id: 'dashboard',
                label: 'Dashboard',
                path: '/patient/dashboard',
                Icon: IconDashboard,
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
            },
            {
                id: 'hospitals',
                label: 'Find Hospitals',
                path: '/patient/hospitals',
                Icon: IconHospital,
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
            },
            {
                id: 'payments',
                label: 'Payments',
                path: '/patient/payments',
                Icon: IconCreditCard,
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
            },
            {
                id: 'chat',
                label: 'Messages',
                path: '/patient/messages',
                Icon: IconMessageSquare,
            },
            {
                id: 'notifications',
                label: 'Notifications',
                path: '/patient/notifications',
                Icon: IconBell,
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
            },
            {
                id: 'settings',
                label: 'Settings',
                path: '/patient/settings',
                Icon: IconSettings,
            },
        ],
    },
];