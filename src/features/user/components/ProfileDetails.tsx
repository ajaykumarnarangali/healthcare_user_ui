function ProfileDetails() {
    return (
        <div className="w-full flex flex-col gap-4 pb-6">
            <div className="p-3 pt-4 pb-6 lg:p-6 rounded-xl border border-slate-200 bg-white shadow-[0_2px_8px_rgba(15,23,42,0.04)]">
                <h2 className="mb-3 lg:mb-6 text-sm font-bold text-text">Personal Information</h2>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase font-semibold text-text-muted">First Name</label>
                        <input
                            type="text"
                            placeholder="Enter your first name"
                            className="bg-bg h-[42px] px-3 border rounded-lg border-slate-200 outline-none placeholder:text-xs"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase font-semibold text-text-muted">Last Name</label>
                        <input
                            type="text"
                            placeholder="Enter your last name"
                            className="bg-bg h-[42px] px-3 border rounded-lg border-slate-200 outline-none placeholder:text-xs"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase font-semibold text-text-muted">Email Address</label>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="bg-bg h-[42px] px-3 border rounded-lg border-slate-200 outline-none placeholder:text-xs"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase font-semibold text-text-muted">Phone Number</label>
                        <input
                            type="tel"
                            placeholder="Enter your phone number"
                            className="bg-bg h-[42px] px-3 border rounded-lg border-slate-200 outline-none placeholder:text-xs"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase font-semibold text-text-muted">Date of Birth</label>
                        <input
                            type="date"
                            className="bg-bg h-[42px] px-3 border rounded-lg border-slate-200 outline-none text-xs"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase font-semibold text-text-muted">Gender</label>
                        <select
                            defaultValue=""
                            className="bg-bg h-[42px] px-3 border rounded-lg border-slate-200 outline-none text-xs"
                        >
                            <option value="" disabled>Select your gender</option>
                            <option value="MALE">Male</option>
                            <option value="FEMALE">Female</option>
                            <option value="OTHER">Other</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="p-3 pt-4 pb-6 lg:p-6 rounded-xl border border-slate-200 bg-white shadow-[0_2px_8px_rgba(15,23,42,0.04)]">
                <h2 className="mb-3 lg:mb-6 text-sm font-bold text-text">Address</h2>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-4">
                    <div className="flex flex-col col-span-1 lg:col-span-2 gap-2">
                        <label className="text-xs uppercase font-semibold text-text-muted flex gap-1">
                            Street Address
                            <span className="font-light normal-case">(optional)</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your street address"
                            className="bg-bg h-[42px] px-3 border rounded-lg border-slate-200 outline-none placeholder:text-xs focus:border-[#1a5276] focus:ring-2 focus:ring-[#1a5276]/10"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase font-semibold text-text-muted flex gap-1">
                            City
                            <span className="font-light normal-case">(optional)</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your city"
                            className="bg-bg h-[42px] px-3 border rounded-lg border-slate-200 outline-none placeholder:text-xs focus:border-[#1a5276] focus:ring-2 focus:ring-[#1a5276]/10"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase font-semibold text-text-muted flex gap-1">
                            State / Province
                            <span className="font-light normal-case">(optional)</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your state or province"
                            className="bg-bg h-[42px] px-3 border rounded-lg border-slate-200 outline-none placeholder:text-xs focus:border-[#1a5276] focus:ring-2 focus:ring-[#1a5276]/10"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase font-semibold text-text-muted flex gap-1">
                            Country
                            <span className="font-light normal-case">(optional)</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your country"
                            className="bg-bg h-[42px] px-3 border rounded-lg border-slate-200 outline-none placeholder:text-xs focus:border-[#1a5276] focus:ring-2 focus:ring-[#1a5276]/10"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase font-semibold text-text-muted flex gap-1">
                            Postal Code
                            <span className="font-light normal-case">(optional)</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your postal code"
                            className="bg-bg h-[42px] px-3 border rounded-lg border-slate-200 outline-none placeholder:text-xs focus:border-[#1a5276] focus:ring-2 focus:ring-[#1a5276]/10"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileDetails;