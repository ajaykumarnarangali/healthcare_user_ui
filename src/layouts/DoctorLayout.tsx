import { Outlet } from 'react-router-dom';
import DoctorSiderBar from '../components/DoctorSidebar';

function DoctorLayout() {
    return (
        <div>
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