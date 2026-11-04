import ProfileForm from "../components/ProfileForm";
import { useProfileManagement } from "../hooks/useProfileManagement";

function ProfileManagement() {

    const { } = useProfileManagement();

    return (
        <div className="p-4 lg:p-6 w-full h-full">
            <div className="max-w-[720px]">
                <ProfileForm />
            </div>
        </div>
    )
}

export default ProfileManagement