import { useState } from "react";
import axios from 'axios';
import { useRouter } from "next/navigation";

interface FormData {
first_name: string;
last_name: string;
email: string;
national_Id: string;
password: string;
}
const useRegister = () => {
const router = useRouter();
const [user, setUser] = useState<any>(null);
const [error, setError] = useState<string>("");
const [message, setMessage] = useState<string>("");
const handleRegister = async (formData: FormData, successMessage: string, errorMessage: string) => {
    try {
        const response = await axios.post('/api/register-users', formData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

         
    if (response.status == 201) {
        setUser(response.data);
        setMessage(successMessage);
        setTimeout(() => {
        router.push("/login");}, 3000);
    }

else {
    setUser(null);
    setError(errorMessage);
    setMessage("");
    setTimeout(() => {
        setError("");
    }, 3000);
}

} catch (error) {
    setUser(null);
    setError(errorMessage);
    setMessage("");
    setTimeout(() => {
        setError("");
    }, 3000);
}
};
return {  user, error, message ,handleRegister};
};

export default useRegister;

