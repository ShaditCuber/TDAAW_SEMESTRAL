import clienteAxios from "../../util/clienteAxios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";



const fetchWarehouses = async () => {
    const { data } = await clienteAxios.get(`/warehouse/read`);
    return data.rsp;
};

export const useWarehouses = () => {
    return useQuery(['warehouses'], fetchWarehouses, {
    });
};
