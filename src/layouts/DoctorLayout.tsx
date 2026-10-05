import { Outlet } from 'react-router-dom';
import DoctorHeader from '../components/DoctorHeader';
import DoctorSiderBar from '../components/DoctorSidebar';

function DoctorLayout() {
    return (
        <div>
            <DoctorHeader />
            <div>
                <div>
                    <DoctorSiderBar />
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DoctorLayout;