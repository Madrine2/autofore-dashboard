import { Links } from "@/components/sidebar/links";
import {mockdata} from "@/components/data/data";
const Sidebar = () => {
    const links = mockdata.map((item) => <Links {...item} key={item.label} />);

    return (
        <div className="h-screen bg-gray-900 text-white w-[280px]">
            <h1 className="p-16 font-bold">AUTOFORE</h1>
            <div className="px-4">
                <Links data={mockdata}/>
            </div>
        </div>
    );
}

export default Sidebar;
