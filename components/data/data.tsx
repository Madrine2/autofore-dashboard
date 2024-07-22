import {MdLocalMovies, MdOutlineDashboard} from "react-icons/md";
import {PiTelevisionSimple} from "react-icons/pi";


export const mockdata = [
    { label: 'Dashboard', icon: <MdOutlineDashboard/>, link: '/' },
    { label: 'Garage', icon: <MdOutlineDashboard/>, drop:[
            { label: 'Add Garage', icon: MdOutlineDashboard, link: '/', },
        ]},
]