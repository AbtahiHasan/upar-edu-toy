import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../context/AuthProvider";

const useCart = () => {
    const {user, loading} = useAuth()
    const {data : carts = [], refetch} = useQuery({
        queryKey: ["carts"],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:3000/carts?email=${user?.email}`)
            const data = res.json()
            return data
        }
    })
    return {carts, refetch}
};

export default useCart;