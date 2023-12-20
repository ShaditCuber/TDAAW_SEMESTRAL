import { Box, Button, Modal } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};


export const ConfirmModal = ({ descripcion, confirmModalOpen, handleCloseConfirmModal, handleConfirmDelete }) => {
    

    return (
        <Modal
            open={confirmModalOpen}
            onClose={handleCloseConfirmModal}
        >
            <Box sx={style} className="bg-white p-4 rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold text-gray-800">Confirmación de Eliminación</h2>
                <p className="mt-2 text-gray-600">{descripcion}</p>
                <div className="flex justify-end mt-4">
                    <Button
                        onClick={handleConfirmDelete}
                        sx={{ color: 'red'}}
                    >
                        Confirmar
                    </Button>
                    <Button
                        onClick={handleCloseConfirmModal}
                        sx={{ color: 'blue' }}
                    >
                        Cancelar
                    </Button>
                </div>
            </Box>
        </Modal>

    )

}