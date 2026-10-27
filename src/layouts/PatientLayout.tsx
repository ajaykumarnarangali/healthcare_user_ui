import { Outlet } from 'react-router-dom';
import PatientSidebar from '../components/PatientSidebar';
import PatientHeader from '../components/PatientHeader';

function PatientLayout() {
    return (
        <div className="w-full min-h-screen">
            <div className="flex min-h-screen">
                <aside className="w-60 h-screen shrink-0 overflow-y-auto">
                    <PatientSidebar />
                </aside>
                <main className="flex-1 min-w-0">
                    <PatientHeader />
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default PatientLayout;