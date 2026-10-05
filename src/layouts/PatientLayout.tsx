import { Outlet } from 'react-router-dom';
import PatientHeader from '../components/PatientHeader';
import PatientSidebar from '../components/PatientSidebar';

function PatientLayout() {
    return (
        <div>
            <PatientHeader />
            <div>
                <div>
                    <PatientSidebar />
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default PatientLayout;