import clienteAxios from "../../util/clienteAxios";
import { useQuery , useMutation ,  useQueryClient} from "@tanstack/react-query";


const fetchProducts = async (page = 1) => {
    const { data } = await clienteAxios.get(`/products/read?page=${page}`);
    return data;
};

const deleteProduct = async (productId) => {
    const { data } = await clienteAxios.delete(`/products/delete?id=${productId}`);
    return data;
};

export const useProducts = (page) => {
    return useQuery(['products', page], () => fetchProducts(page), {
        keepPreviousData: true,
    });
};


export const useDeleteProduct = () => {
    const queryClient = useQueryClient();

    return useMutation(deleteProduct, {
        onSuccess : () => {
            queryClient.invalidateQueries('products')
        }
    })
}

