import clienteAxios from "../../util/clienteAxios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const resume = async () => {
    const { data } = await clienteAxios.get(`/stock/resume`);
    console.log("Datos recibidos en resume:", data);
    return data;
}
    
const createStock = async (formData) => {
    const { data } = await clienteAxios.post(`/stock/create`, formData);
    console.log("Datos recibidos en createStock:", data);
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
