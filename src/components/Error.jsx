

const Error = () => {
    return (
        <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6 border border-red-300">
            <div className="flex flex-col items-center">
                <div className="bg-red-100 text-red-500 rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636a9 9 0 11-12.728 12.728 9 9 0 0112.728-12.728zM12 8v4m0 4h.01" />
                    </svg>
                </div>
                <h2 className="text-xl font-medium text-gray-800 mt-4">¡Ups! Algo salió mal</h2>
            </div>
        </div>
    );
}

export default Error;