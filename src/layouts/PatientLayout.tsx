import { Outlet } from 'react-router-dom';
import PatientSidebar from '../components/PatientSidebar';

function PatientLayout() {
    return (
        <div>
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