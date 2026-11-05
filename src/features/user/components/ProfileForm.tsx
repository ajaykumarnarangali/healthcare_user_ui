import ProfileHeader from "./ProfileHeader";
import ProfileDetails from "./ProfileDetails";
import { useForm, FormProvider } from "react-hook-form";
import { useAppSelector } from "../../../hooks/userAppSelector";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    type ProfileFormInput,
    type ProfileFormOutput,
    getPatientProfileSchema,
} from "../schemas/user.profile";
import { useProfileManagement } from "../hooks/useProfileManagement";


function ProfileForm() {

    const isProfileExist = useAppSelector(
        (state) => state.user.name
    );
    const schema = getPatientProfileSchema(!!isProfileExist)
    const method = useForm<
        ProfileFormInput,
        any,
        ProfileFormOutput
    >({
        resolver: zodResolver(schema),
    });

    const {
        isFormEditable,
        setFormEditable,
        handleFormSubmit
    } = useProfileManagement();

    return (
        <div className="w-full">
            <FormProvider {...method}>
                <form onSubmit={method.handleSubmit(
                    handleFormSubmit,
                    (errors) => {
                        console.log("Validation errors:", errors);
                    }
                )}
                    className="w-full">
                    <ProfileHeader
                        formManagement={{ isFormEditable, setFormEditable }}
                    />
                    <ProfileDetails
                        formManagement={{ isFormEditable }}
                    />
                </form>
            </FormProvider>
        </div>
    )
}

export default ProfileForm