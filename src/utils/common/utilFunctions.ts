import {errorCodes} from './errorUtil';

export function checkConnectivity() {
    if (navigator.onLine) {
        return true;
    } else {
        throw new Error(errorCodes.ERR_NO_INTERNET_CONNECTION);
    }
}
