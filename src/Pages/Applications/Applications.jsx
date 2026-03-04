import odam1 from "../../assets/img3.png";

import React, { useState } from "react";
import {
  Search,
  Filter,
  ChevronsUpDown,
  X,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const applicationsData = [
  {
    id: 1,
    status: "Rad etilgan",
    idNum: "23648276",
    date: "12.08.2025",
    name: "Odiljon Sanoyev",
    phone: "+ 998 93 472 93 35",
    duration: "3 oy",
    price: "1 200 000 UZS",
  },
  {
    id: 2,
    status: "Tasdiqlangan",
    idNum: "23648276",
    date: "16.02.2025",
    name: "Yoqubjonov Abubakir",
    phone: "+ 998 94 367 13 19",
    duration: "6 oy",
    price: "1 200 000 UZS",
  },
  {
    id: 3,
    status: "Rad etilgan",
    idNum: "23648276",
    date: "10.08.2025",
    name: "Nodibek Xudoybeganov",
    phone: "+ 998 93 472 93 35",
    duration: "3 oy",
    price: "1 200 000 UZS",
  },
  {
    id: 4,
    status: "Faol",
    idNum: "23648276",
    date: "12.02.2025",
    name: "Baxtiyorov Shoxrux",
    phone: "+ 998 93 472 93 35",
    duration: "9 oy",
    price: "1 200 000 UZS",
  },
  {
    id: 5,
    status: "Rad etilgan",
    idNum: "23648276",
    date: "19.08.2025",
    name: "Axror Qodirov",
    phone: "+ 998 93 472 93 35",
    duration: "5 oy",
    price: "1 200 000 UZS",
  },
  {
    id: 6,
    status: "Faol",
    idNum: "23648276",
    date: "22.08.2025",
    name: "Akramov Ikrombek",
    phone: "+ 998 93 472 93 35",
    duration: "2 oy",
    price: "1 200 000 UZS",
  },
  {
    id: 7,
    status: "Rad etilgan",
    idNum: "23648276",
    date: "16.08.2025",
    name: "Ibrohim Jalolov",
    phone: "+ 998 93 472 93 35",
    duration: "3 oy",
    price: "1 200 000 UZS",
  },
  {
    id: 8,
    status: "Rad etilgan",
    idNum: "23648276",
    date: "11.01.2025",
    name: "Eldor Boliyev",
    phone: "+ 998 93 472 93 35",
    duration: "4 oy",
    price: "1 200 000 UZS",
  },
  {
    id: 9,
    status: "Faol",
    idNum: "23648276",
    date: "12.10.2025",
    name: "Abdulloh Mo'minov",
    phone: "+ 998 99 653 99 12",
    duration: "1 oy",
    price: "1 200 000 UZS",
  },
  {
    id: 10,
    status: "Faol",
    idNum: "23648276",
    date: "12.07.2025",
    name: "Azizbek Qayumov",
    phone: "+ 998 93 472 93 35",
    duration: "8 oy",
    price: "1 200 000 UZS",
  },
];

const Applications = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const getStatusBadge = (status) => {
    if (status === "Rad etilgan") {
      return (
        <span className="inline-flex items-center gap-1.5 bg-rose-50 text-rose-500 px-3 py-1.5 rounded-full text-[13px] font-medium border border-rose-100/50">
          <X size={14} strokeWidth={2.5} /> {status}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-500 px-3 py-1.5 rounded-full text-[13px] font-medium border border-emerald-100/50">
        <CheckCircle2 size={14} strokeWidth={2.5} /> {status}
      </span>
    );
  };

  return (
    <div className="p-8 bg-[#F4F6F9] min-h-screen font-sans">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h1 className="text-[24px] font-bold text-gray-900 mb-1">
            Barcha arizalar
          </h1>
          <p className="text-[14px] text-gray-500">1000 ta arizalar</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-3 bg-[#F1F5F9] hover:bg-[#E2E8F0] rounded-[14px] transition-colors shadow-sm">
            <Filter size={20} className="text-gray-600" />
          </button>
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Izlash" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-11 pr-4 py-3 bg-[#F1F5F9] hover:bg-white rounded-[14px] border border-transparent focus:border-gray-200 focus:bg-white shadow-sm outline-none text-[14px] text-gray-900 w-[260px] transition-all placeholder:text-gray-400"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[24px] p-2.5 shadow-sm border border-gray-100/50 overflow-x-auto">
        <div className="min-w-[1150px]">
          <div className="grid grid-cols-[40px_160px_130px_2.5fr_2fr_170px_150px] gap-4 px-6 py-4 bg-[#F1F5F9] rounded-[16px] text-[13px] font-semibold text-gray-500 mb-2">
            <div>№</div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-gray-700">
              Status <ChevronsUpDown size={14} />
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-gray-700">
              ID raqam <ChevronsUpDown size={14} />
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-gray-700">
              Mijozlar <ChevronsUpDown size={14} />
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-gray-700">
              Xizmatlar <ChevronsUpDown size={14} />
            </div>
            <div className="flex items-center justify-center gap-1 cursor-pointer hover:text-gray-700">
              Bo'lib to'lash muddati <ChevronsUpDown size={14} />
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-gray-700">
              Umumiy narx <ChevronsUpDown size={14} />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            {applicationsData.map((row, idx) => (
              <div
                key={row.id}
                className={`grid grid-cols-[40px_160px_130px_2.5fr_2fr_170px_150px] gap-4 px-6 py-3.5 items-center transition-colors 
                ${idx % 2 !== 0 ? "bg-[#F8FAFC] rounded-[16px]" : "bg-white rounded-[16px] hover:bg-gray-50/50"}`}
              >
                <div className="text-[14px] font-semibold text-gray-900">
                  {row.id}
                </div>

                <div>{getStatusBadge(row.status)}</div>

                <div>
                  <div className="font-bold text-[14px] text-gray-900">
                    {row.idNum}
                  </div>
                  <div className="text-[12px] text-gray-500 mt-0.5">
                    {row.date}
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w- h-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0 border border-gray-100">
                    <img className="w-full h-full" src={odam1} alt="" />
                  </div>
                  <div>
                    <div className="font-bold text-[14px] text-gray-900">
                      {row.name}
                    </div>
                    <div className="text-[13px] text-gray-500 mt-0.5">
                      {row.phone}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 w-[190px]">
                  <span className="bg-[#E2E8F0]/60 text-gray-700 px-3 py-1 rounded-full text-[12px] font-medium">
                    Stamatolog
                  </span>
                  <span className="bg-[#E2E8F0]/60 text-gray-700 px-3 py-1 rounded-full text-[12px] font-medium">
                    Pediatr
                  </span>
                  <span className="bg-[#E2E8F0]/60 text-gray-700 px-3 py-1 rounded-full text-[12px] font-medium">
                    Pediatr
                  </span>
                  <span className="bg-white border border-gray-200 shadow-sm text-gray-700 px-2.5 py-1 rounded-full text-[12px] font-medium">
                    +2
                  </span>
                </div>

                <div className="text-center font-bold text-[15px] text-gray-900">
                  {row.duration}
                </div>

                <div className="font-bold text-[15px] text-gray-900">
                  {row.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-3 mt-8 pb-4">
        <div className="flex items-center gap-2 border border-gray-200 bg-white rounded-[12px] px-3.5 py-2.5 cursor-pointer hover:bg-gray-50 transition-colors mr-2">
          <span className="text-[14px] font-medium text-gray-700">10</span>
          <ChevronDown size={16} className="text-gray-500" />
        </div>

        <button className="w-10 h-10 flex items-center justify-center rounded-[12px] border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 transition-colors">
          <ChevronLeft size={18} />
        </button>

        <button className="w-10 h-10 flex items-center justify-center rounded-[12px] bg-[#14B8A6] text-white font-medium text-[14px] shadow-sm hover:bg-teal-500 transition-colors">
          1
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-[12px] border border-gray-200 bg-white text-gray-600 font-medium text-[14px] hover:bg-gray-50 transition-colors">
          2
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-[12px] border border-gray-200 bg-white text-gray-600 font-medium text-[14px] hover:bg-gray-50 transition-colors">
          3
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-[12px] border border-gray-200 bg-white text-gray-600 font-medium text-[14px] hover:bg-gray-50 transition-colors">
          4
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-[12px] border border-gray-200 bg-white text-gray-600 font-medium text-[14px] hover:bg-gray-50 transition-colors">
          5
        </button>

        <button className="w-10 h-10 flex items-center justify-center rounded-[12px] border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 transition-colors">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default Applications;
