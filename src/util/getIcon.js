import {ReactComponent as Wechat} from '@assets/svg/wechat.svg'
import {ReactComponent as Dribbble} from '@assets/svg/dribbble.svg'
import {ReactComponent as Behance} from '@assets/svg/behance.svg'
import {ReactComponent as Linkin} from '@assets/svg/linkin.svg'
export default function getIcon(name) {
    switch (name) {
        case 'wechat':
            return <Wechat></Wechat>
            break; 
        case 'dribbble': 
            return <Dribbble></Dribbble>
            break; 
        case 'behance':
            return <Behance></Behance>
            break;  
        case 'linkin':
            return <Linkin></Linkin>
            break;  
    }
}