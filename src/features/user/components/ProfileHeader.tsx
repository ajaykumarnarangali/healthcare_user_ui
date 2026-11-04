import { IconEdit } from "../../../components/Icons";

function ProfileHeader() {
    return (
        <div
            className="p-3 pt-4 pb-6 lg:p-6 mb-4 rounded-xl border
             border-slate-200 bg-white shadow-[0_2px_8px_rgba(15,23,42,0.04)]
             flex flex-col gap-6 lg:flex-row lg:items-center justify-between"
        >
            <div className="flex gap-4 items-center">
                <div className="bg-white border-[3px] border-[#E1E5EA] w-[90px] h-[90px] rounded-full overflow-hidden">
                    <img
                        src="/path/to/profile-image.jpg"
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <h2 className="text-base text-text lg:mb-1">Ajay Kumar N</h2>
                    <span className="text-sm text-text-muted">
                        <p>ajaynarngaali@gmail.com</p>
                        <p>6235447873</p>
                    </span>
                </div>
            </div>
            <div>
                <button
                    className="flex gap-2 text-[13px] font-semibold text-primary 
                    border rounded-lg border-primary items-center px-4 py-2"
                >
                    <IconEdit className="w-3 h-3" />
                    Edit Profile
                </button>
            </div>
        </div>
    )
}

export default ProfileHeader