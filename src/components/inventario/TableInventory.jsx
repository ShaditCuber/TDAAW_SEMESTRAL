

const TableInventory = ({ inventory , inventoryModal }) => {
    

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Nombre</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Cantidad Total</th>
                        {/* <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Descripción</th> */}
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Bodega</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Entrada o Salida Bodega</th>

                        <th className="px-4 py-2"></th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {
                        inventory?.map((item) => (
                            <tr key={item.id}>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center hover:bg-gray-100 cursor-pointer">{item.nombre}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{item.inventory_count}</td>
                                {/* <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{item.descripcion}</td> */}
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{item.warehouse_name}</td>

                                <td className="whitespace-nowrap px-4 py-2 text-center">
                                    <a
                                        href="#"
                                        className="inline-block rounded bg-blue-600 px-4 py-2 text-xs font-medium text-white hover:bg-green-700"
                                        onClick={() => inventoryModal(item)}
                                    >
                                        E o S
                                    </a>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    );
};

export default TableInventory;
