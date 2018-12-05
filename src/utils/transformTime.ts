
import dayjs from 'dayjs';


const transformTime = (num: number, format?: string) => dayjs(num).format(format || 'YYYY-MM-DD HH:mm:ss');


export default transformTime;