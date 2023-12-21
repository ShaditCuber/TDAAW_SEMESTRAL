import clienteAxios from "../../util/clienteAxios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const resume = async () => {
    const { data } = await clienteAxios.get(`/stock/resume`);
    return data;
}
    
const createStock = async (formData) => {
    const { data } = await clienteAxios.post(`/stock/create`, formData);
    console.log("Datos recibidos en createStock:", data);
    return data;
}

const fetchStock = async (product_id) => {
    const { data } = await clienteAxios.get(`/stock/read?product_id=${product_id}`);
    return data;
}

export const useResume = () => {
    return useQuery(['resume', resume], () => resume());
};


// Utilizamos useMutation para crear un nuevo stock ya que necesitamos invalidar la cache de resume
export const useCreateStock = () => {
    const queryClient = useQueryClient();
    return useMutation((formData) => createStock(formData), {
        onSuccess: (data) => {
            queryClient.invalidateQueries('resume');
        }
        
    });
};

export const useStock = (product_id) => {
    return useQuery(['stock', product_id], () => fetchStock(product_id));
};