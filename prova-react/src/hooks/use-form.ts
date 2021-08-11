import { useState } from "react";

const useForm = (validateValue: (value: string) => boolean) => {
    const [enteredValue, setEnteredValue] = useState('');
    

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid ;


    const changeValueHandler = (event:React.FormEvent<HTMLInputElement>) => {
        setEnteredValue(event.currentTarget.value);

    };

   
    
    return { value: enteredValue, isValid: valueIsValid,hasError, changeValueHandler }
}

export default useForm;