import {useRouter} from 'next/router';
import { useEffect } from 'react';

const Route = () => {
    const router = useRouter();
    const {pathname} = router;
    
    useEffect(() => {

        if (pathname=='/') {
            router.push('/home');
        }
    }, []);

    return < ></>;

}
export default Route;