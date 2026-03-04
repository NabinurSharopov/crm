import { ChevronDown, Bell } from 'lucide-react';
import img1 from "../../assets/img4.png"; 
import img2 from "../../assets/img3.png"; 


const Header = () => {
  return (
    <header className="bg-white px-6 py-2 flex items-center justify-between">
      <div className="flex flex-col">
        <h1 className="text-[18px] font-bold text-gray-800 leading-tight">Dashboard</h1>
        <span className="text-[12px] text-gray-400 font-medium">Admin</span>
      </div>

      <div className="flex items-center gap-6">
        
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-100">
            <img 
            src={img1}
              alt="UZ" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-[15px] font-semibold text-gray-700">O'zbek</span>
          <ChevronDown size={16} className="text-gray-400 group-hover:text-gray-600" />
        </div>

        <div className="relative p-2 bg-gray-50 rounded-full cursor-pointer hover:bg-gray-100 transition-colors">
          <Bell size={20} className="text-gray-500" />
          <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-[#ef4444] border-2 border-white rounded-full"></span>
        </div>

        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="text-right">
            <p className="text-[15px] font-bold text-gray-800 leading-none">Odiljon Sanoyev</p>
            <p className="text-[11px] text-gray-400 font-bold mt-1 uppercase tracking-tight">Admin</p>
          </div>
          
          <div className="relative">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
              <img 
              src={img2}
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <ChevronDown size={16} className="text-gray-400 group-hover:text-gray-600" />
        </div>

      </div>
    </header>
  );
};

export default Header;