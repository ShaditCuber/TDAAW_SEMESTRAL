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

const createProduct = async (formData) => {
    const { data } = await clienteAxios.post(`/products/create`, formData);
    return data;
}

const updateProduct = async (formData) => {
    const { data } = await clienteAxios.post(`/products/update`, formData);
    return data;
}



export const useProducts = (page) => {
    return useQuery(['products', page], () => fetchProducts(page), {
        keepPreviousData: true,
    });
};


// se utiliza useMutation para borrar un producto ya que se necesita actualizar la lista de productos
export const useDeleteProduct = () => {
    const queryClient = useQueryClient();

    return useMutation(deleteProduct, {
        onSuccess : () => {
            queryClient.invalidateQueries('products')
        }
    })
}

// se utiliza useMutation para crear un producto ya que se necesita actualizar la lista de productos
export const useCreateProduct = () => {
    const queryClient = useQueryClient();

    return useMutation(createProduct, {
        onSuccess : () => {
            queryClient.invalidateQueries('products')
        }
    })
}

// se utiliza useMutation para actualizar un producto ya que se necesita actualizar la lista de productos
export const useUpdateProduct = () => {
    const queryClient = useQueryClient();

    return useMutation(updateProduct, {
        onSuccess : () => {
            queryClient.invalidateQueries('products')
        }
    })
}

