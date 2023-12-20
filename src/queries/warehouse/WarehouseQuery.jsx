import clienteAxios from "../../util/clienteAxios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";


const fetchWarehouses = async (page = 1) => {
    const { data } = await clienteAxios.get(`/warehouse/read?page=${page}`);
    return data.rsp;
}


const fetchWarehousesLimit = async () => {
    const { data } = await clienteAxios.get(`/warehouse/read?limit=10000`);
    return data.rsp;
}


const deleteWarehouse = async (warehouseId) => {
    const { data } = await clienteAxios.delete(`/warehouse/delete?id=${warehouseId}`);
    return data;
}

const createWarehouse = async (formData) => {
    const { data } = await clienteAxios.post(`/warehouse/create`, formData);
    return data;
}

const updateWarehouse = async (formData) => {
    const { data } = await clienteAxios.post(`/warehouse/update`, formData);
    return data;
}


export const useWarehouses = (page) => {
    return useQuery(['warehouses', page], () => fetchWarehouses(page), {
        keepPreviousData: true,
    });
}

export const useWarehousesLimit = () => {
    return useQuery(['warehousesLimit'], () => fetchWarehousesLimit(), {
        keepPreviousData: true,
    });
}

// se utiliza useMutation para borrar un producto ya que se necesita actualizar la lista de productos
export const useDeleteWarehouse = () => {
    const queryClient = useQueryClient();

    return useMutation(deleteWarehouse, {
        onSuccess: () => {
            queryClient.invalidateQueries('warehouses')
        }
    })
}


// se utiliza useMutation para crear un producto ya que se necesita actualizar la lista de productos
export const useCreateWarehouse = () => {
    const queryClient = useQueryClient();

    return useMutation(createWarehouse, {
        onSuccess: () => {
            queryClient.invalidateQueries('warehouses')
        }
    })
}

// se utiliza useMutation para actualizar un producto ya que se necesita actualizar la lista de productos
export const useUpdateWarehouse = () => {
    const queryClient = useQueryClient();

    return useMutation(updateWarehouse, {
        onSuccess: () => {
            queryClient.invalidateQueries('warehouses')
        }
    })
}