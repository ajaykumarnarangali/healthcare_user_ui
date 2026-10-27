import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DoctorSiderBar from '../components/DoctorSidebar';
import DoctorHeader from '../components/DoctorHeader';

function DoctorLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen w-full">
            {isSidebarOpen && (
                <button
                    type="button"
                    aria-label="Close sidebar"
                    onClick={() => setIsSidebarOpen(false)}
                    className="fixed inset-0 z-40 bg-black/40 lg:hidden"
                />
            )}
            <aside
                className={`fixed inset-y-0 left-0 z-50 w-60
                    overflow-y-auto transition-transform duration-300
                    lg:translate-x-0
                    ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <DoctorSiderBar
                    onNavigate={() => setIsSidebarOpen(false)}
                />
            </aside>
            <main className="min-w-0 lg:ml-60">
                <DoctorHeader
                    onMenuClick={() => setIsSidebarOpen(true)}
                />
                <Outlet />
            </main>
        </div>
    );
}

export default DoctorLayout; 