import {BsGrid3X3Gap} from "react-icons/bs";
import {TfiAlert, TfiSettings} from "react-icons/tfi";
import {LiaClipboardListSolid} from "react-icons/lia";
import Breadcrumb from "@/components/bread/bread";
const breadcrumbItems = [
    { text: 'Home', href: '/' },
    { text: 'Garage', href: '/' },
    { text: 'Add New Vehicles', href: '/vehicles/add' },
];
const Navbar=({})=>{

    return(
       <div className='bg-white h-[150px] w-full'>
          <div className='flex justify-between border-b-[1px] border-b-black'>
              <div className='w-[80px] border-r-[1px] border-r-black'>
                  <BsGrid3X3Gap className='text-black px-2 ml-4 align-middle w-[50px] h-[50px] text-center'/>
              </div>

              <div className='w-[150px] flex'>
                  <TfiAlert className='w-[50px] h-[50px] text-black px-2' />
                  <TfiSettings className='w-[50px] h-[50px] text-black px-2' />
              </div>
          </div>
           <div className='h-[120px] w-full flex justify-between'>
               <div className=' w-1/2 flex'>
                   <LiaClipboardListSolid className='text-green-500 w-[80px] h-[100px]' />
                   <div className='block mt-6'>
                       <h1 className='text-black font-bold'>Add Garage</h1>
                       <h3 className='text-gray-400'>Add a new Garage</h3>
                   </div>
               </div>
               <div className='pr-8 mt-8'>
                   <Breadcrumb items={breadcrumbItems}/>
               </div>

           </div>
       </div>
    );

}
export default Navbar