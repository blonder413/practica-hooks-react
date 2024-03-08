import { useState } from "react";
export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm);
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            // la key va entre [] para que tome dinámicamente el nombre del campo
            [name]: value,
        });
    };
    return {
        ...formState,
        formState,
        onInputChange,
    };
};
