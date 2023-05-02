import { useEffect, useState } from "react";
import userServices, { User } from "../services/userServices";
import { CanceledError } from "../services/apiClient";

const useUsers = () => {

    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      const { request, cancel } = userServices.getAll<User>();
      request
        .then((res) => setUsers(res.data))
        .catch((error) => {
          if (error instanceof CanceledError) return;
          setError(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
  
      return () => cancel();
    }, []);
    return { users ,error,isLoading,setUsers,setError}
}

export default useUsers