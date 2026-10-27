import { IconLogout } from "../components/Icons";

function DoctorSidebar() {
    return (
        <div className="flex h-full w-full flex-col bg-primary">
            {/* Sidebar Header */}
            <div className="shrink-0 flex justify-start py-5 px-4 border-b border-white/[0.12]">
                <div className="flex items-center gap-[10px]">
                    <div className="flex h w-9 h-9 items-center justify-center rounded-[10px] bg-[#3C6C8A]">
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                    </div>
                    <div>
                        <div className="font-inter font-semibold text-base text-white">
                            MediConnect
                        </div>
                        <div className="text-[11px] font-inter text-white/[0.55]">
                            Patient Portal
                        </div>
                    </div>
                </div>
            </div>

            {/* Middle - Scrollable */}
            <div className="min-h-0 flex-1 overflow-y-auto">
                {/* Sidebar navigation items */}
            </div>

            {/* Sidebar Footer */}
            <div className="shrink-0 border-t border-white/[0.12] pt-5 pb-3 px-3">
                <div className="flex mb-2 px-2 items-center gap-[10px]">
                    <div className="flex items-center justify-center">
                        <img
                            src="https://placehold.co/34x34"
                            alt="Profile"
                            className="h-[34px] w-[34px] rounded-full object-cover"
                        />
                    </div>
                    <div>
                        <div className="font-inter font-semibold text-sm text-white">
                            MediConnect
                        </div>
                        <div className="text-[11px] font-inter text-white/[0.55]">
                            Patient
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 hover:bg-white/15 cursor-pointer p-3  rounded-lg items-center">
                    <IconLogout size={17} className="text-white/60" />
                    <p className="text-sm text-white/60">
                        Sign Out
                    </p>
                </div>
            </div>
        </div>
    );
}

export default DoctorSidebar;