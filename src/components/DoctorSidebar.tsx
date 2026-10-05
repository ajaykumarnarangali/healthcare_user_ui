
function DoctorSidebar() {


    type SidebarItem = {
        id: AppSection;
        label: string;
        path: string;
        icon: React.ComponentType<IconProps>;
        badge?: number;
    };

    type SidebarGroup = {
        label: string;
        items: SidebarItem[];
    };

    const sidebarData: SidebarGroup[] = [
        {
            label: 'Overview',
            items: [
                {
                    id: 'dashboard',
                    label: 'Dashboard',
                    path: '/dashboard',
                    icon: IconDashboard,
                },
            ],
        },

        {
            label: 'Clinical',
            items: [
                {
                    id: 'appointments',
                    label: 'Appointments',
                    path: '/appointments',
                    icon: IconCalendar,
                },
                {
                    id: 'patients',
                    label: 'Patients',
                    path: '/patients',
                    icon: IconPatients,
                },
                {
                    id: 'consultations',
                    label: 'Consultations',
                    path: '/consultations',
                    icon: IconConsultation,
                },
            ],
        },

        {
            label: 'Work',
            items: [
                {
                    id: 'schedule',
                    label: 'Schedule',
                    path: '/schedule',
                    icon: IconSchedule,
                },
                {
                    id: 'independent-practice',
                    label: 'Independent Practice',
                    path: '/independent-practice',
                    icon: IconHospital,
                },
                {
                    id: 'hospital-assignments',
                    label: 'Hospital Assignments',
                    path: '/hospital-assignments',
                    icon: IconHospital,
                },
                {
                    id: 'leave',
                    label: 'Leave Management',
                    path: '/leave',
                    icon: IconLeave,
                },
            ],
        },

        {
            label: 'Communication',
            items: [
                {
                    id: 'chat',
                    label: 'Chat',
                    path: '/chat',
                    icon: IconChat,
                    badge: 3,
                },
                {
                    id: 'notifications',
                    label: 'Notifications',
                    path: '/notifications',
                    icon: IconNotification,
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
                    path: '/earnings',
                    icon: IconPayments,
                },
                {
                    id: 'profile',
                    label: 'My Profile',
                    path: '/profile',
                    icon: IconProfile,
                },
                {
                    id: 'settings',
                    label: 'Settings',
                    path: '/settings',
                    icon: IconSettings,
                },
            ],
        },
    ];








    return (
        <div>DoctorSidebar</div>
    )
}

export default DoctorSidebar