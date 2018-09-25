import history from './../history';
import { toast } from 'react-toastify';

export function invalidAPI(error) {
    toast.error(error);
    setTimeout(() => history.push('/'), 3000);
}
