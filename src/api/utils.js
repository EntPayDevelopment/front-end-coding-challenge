import { toast } from 'react-toastify';

export const handleApi = async (apiCallBack) => {
    try {
        const result = await apiCallBack();
        if (result.message) {
            toast.success(result.message)
        }
        return result;
    } catch (error) {
        handleError(error);
    }
}

const handleError = (error) => {
    switch (error.status) {
        case 422:
            toast.error(error.message);
            break;
        default:
            if (error.message) {
                toast.error(error.message)
            } else {
                toast.error('Server error')
            }
            break;
    }
}