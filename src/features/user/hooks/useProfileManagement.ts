import { useState } from "react";


export function useProfileManagement() {

    const [isFormEditable, setFormEditable] = useState<boolean>(false);

    async function handleFormSubmit(data: any) {
        console.log(data);
    }

    return {
        isFormEditable,
        setFormEditable,
        handleFormSubmit
    }
}