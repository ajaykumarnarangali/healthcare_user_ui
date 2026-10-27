import { Outlet } from 'react-router-dom';
import DoctorSiderBar from '../components/DoctorSidebar';
import DoctorHeader from '../components/DoctorHeader';

function DoctorLayout() {
    return (
        <div className="w-full min-h-screen">
            <div className="flex min-h-screen">
                <aside className="w-60 h-screen shrink-0 overflow-y-auto">
                    <DoctorSiderBar />
                </aside>
                <main className="flex-1 min-w-0">
                    <DoctorHeader />
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default DoctorLayout;