import React, { useState } from "react";
import {
  FileText,
  FileX,
  FileCheck,
  Banknote,
  DollarSign,
  XCircle,
  Wallet,
  CreditCard,
  ChevronDown,
  ChevronRight,
  Search,
  X
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const dashboardData = {
  kunlik: {
    date: "18 Iyul 2025",
    cards: { umumiy: 145, bajarilmagan: 12, tasdiqlangan: 133, summa: 1250000, qarzlarSoni: 3, tolanmaganQarzSoni: 1, tolanmaganQarzSum: 150000, tolanganQarzSum: 450000 },
    lineChart:[
      { name: "09:00", umumiy: 20, muvaffaqiyatli: 15, qoralama: 3, bajarilmagan: 2 },
      { name: "12:00", umumiy: 45, muvaffaqiyatli: 40, qoralama: 4, bajarilmagan: 1 },
      { name: "15:00", umumiy: 50, muvaffaqiyatli: 42, qoralama: 5, bajarilmagan: 3 },
      { name: "18:00", umumiy: 30, muvaffaqiyatli: 25, qoralama: 2, bajarilmagan: 3 },
    ],
    pieTotal: 450,
    pieData:[
      { name: "Ayollar", percent: 60, count: 270, color: "#F43F5E" },
      { name: "Erkaklar", percent: 35, count: 157, color: "#14B8A6" },
      { name: "Belgilanmagan", percent: 5, count: 23, color: "#E5E7EB" },
    ],
  },
  haftalik: {
    date: "12 Iyul - 18 Iyul 2025",
    cards: { umumiy: 1250, bajarilmagan: 150, tasdiqlangan: 1100, summa: 15000000, qarzlarSoni: 8, tolanmaganQarzSoni: 2, tolanmaganQarzSum: 500000, tolanganQarzSum: 2500000 },
    lineChart:[
      { name: "Dush", umumiy: 180, muvaffaqiyatli: 150, qoralama: 20, bajarilmagan: 10 },
      { name: "Sesh", umumiy: 210, muvaffaqiyatli: 180, qoralama: 15, bajarilmagan: 15 },
      { name: "Chor", umumiy: 250, muvaffaqiyatli: 220, qoralama: 20, bajarilmagan: 10 },
      { name: "Pay", umumiy: 190, muvaffaqiyatli: 160, qoralama: 25, bajarilmagan: 5 },
      { name: "Juma", umumiy: 260, muvaffaqiyatli: 230, qoralama: 10, bajarilmagan: 20 },
      { name: "Shan", umumiy: 100, muvaffaqiyatli: 90, qoralama: 5, bajarilmagan: 5 },
      { name: "Yak", umumiy: 60, muvaffaqiyatli: 50, qoralama: 5, bajarilmagan: 5 },
    ],
    pieTotal: 3400,
    pieData:[
      { name: "Ayollar", percent: 52, count: 1768, color: "#F43F5E" },
      { name: "Erkaklar", percent: 38, count: 1292, color: "#14B8A6" },
      { name: "Belgilanmagan", percent: 10, count: 340, color: "#E5E7EB" },
    ],
  },
  oylik: {
    date: "Iyul 2025",
    cards: { umumiy: 6500, bajarilmagan: 500, tasdiqlangan: 6000, summa: 45000000, qarzlarSoni: 15, tolanmaganQarzSoni: 5, tolanmaganQarzSum: 1500000, tolanganQarzSum: 8500000 },
    lineChart:[
      { name: "1-hafta", umumiy: 1500, muvaffaqiyatli: 1300, qoralama: 100, bajarilmagan: 100 },
      { name: "2-hafta", umumiy: 1700, muvaffaqiyatli: 1500, qoralama: 150, bajarilmagan: 50 },
      { name: "3-hafta", umumiy: 1600, muvaffaqiyatli: 1400, qoralama: 100, bajarilmagan: 100 },
      { name: "4-hafta", umumiy: 1700, muvaffaqiyatli: 1500, qoralama: 50, bajarilmagan: 150 },
    ],
    pieTotal: 18500,
    pieData:[
      { name: "Ayollar", percent: 58, count: 10730, color: "#F43F5E" },
      { name: "Erkaklar", percent: 27, count: 4995, color: "#14B8A6" },
      { name: "Belgilanmagan", percent: 15, count: 2775, color: "#E5E7EB" },
    ],
  },
  barchasi: {
    date: "12.06.2023 - 18.07.2025",
    cards: { umumiy: 4200, bajarilmagan: 4200, tasdiqlangan: 4200, summa: 200000000, qarzlarSoni: 12, tolanmaganQarzSoni: 4200, tolanmaganQarzSum: 4200, tolanganQarzSum: 10000000 },
    lineChart:[
      { name: "Yanvar", umumiy: 38000, muvaffaqiyatli: 32000, qoralama: 24000, bajarilmagan: 18000 },
      { name: "Fevral", umumiy: 21000, muvaffaqiyatli: 15000, qoralama: 6000, bajarilmagan: 2000 },
      { name: "Mart", umumiy: 37000, muvaffaqiyatli: 34000, qoralama: 21000, bajarilmagan: 3000 },
      { name: "Aprel", umumiy: 32000, muvaffaqiyatli: 21000, qoralama: 13000, bajarilmagan: 2500 },
      { name: "May", umumiy: 41000, muvaffaqiyatli: 34000, qoralama: 15000, bajarilmagan: 8000 },
      { name: "Iyun", umumiy: 24000, muvaffaqiyatli: 15000, qoralama: 6000, bajarilmagan: 1000 },
    ],
    pieTotal: 28683624,
    pieData:[
      { name: "Ayollar", percent: 55, count: 18346143, color: "#F43F5E" },
      { name: "Erkaklar", percent: 25, count: 10237471, color: "#14B8A6" },
      { name: "Belgilanmagan", percent: 20, count: 237471, color: "#E5E7EB" },
    ],
  },
};

const formatNum = (num) => num.toLocaleString("ru-RU").replace(/,/g, " ");

const clinicsList =[
  { id: "all", name: "Barcha klinikalar" },
  { id: 1, name: "Akfa Medline" },
  { id: 2, name: "Akfa Medline" },
  { id: 3, name: "Akfa Medline" },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("barchasi");
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const[selectedClinic, setSelectedClinic] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const currentData = dashboardData[activeTab];

  const tabs =[
    { id: "kunlik", label: "Kunlik" },
    { id: "haftalik", label: "Haftalik" },
    { id: "oylik", label: "Oylik" },
    { id: "barchasi", label: "Barchasi" },
  ];

  const filteredClinics = clinicsList.filter(clinic => 
    clinic.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F4F6F9] p-8 font-sans relative">
      
      {/* Top Bar */}
      <div className="bg-white p-2.5 rounded-[20px] flex justify-between items-center mb-6 shadow-sm border border-gray-100/50">
        <div className="flex items-center bg-[#F3F4F6] p-1.5 rounded-[14px]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 text-[14px] font-medium rounded-[10px] transition-all duration-200 
                ${activeTab === tab.id ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"}`}
            >
              {tab.label}
            </button>
          ))}
          <div className="flex items-center bg-white px-4 py-2 ml-2 rounded-[10px] text-[14px] font-medium text-gray-900 shadow-sm cursor-pointer">
            {currentData.date} <ChevronDown size={18} className="ml-2 text-gray-500" />
          </div>
        </div>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center bg-[#E2E8F0] px-5 py-2.5 rounded-[14px] text-[14px] font-medium text-gray-900 hover:bg-[#CBD5E1] transition-all mr-1"
        >
          Barcha klinikalar <ChevronRight size={18} className="ml-1.5 text-gray-700" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
        <div className="bg-white p-5 rounded-[20px] flex items-center space-x-4 shadow-sm border border-gray-100/50 hover:shadow-md transition-all">
          <div className="p-3 bg-teal-400 text-white rounded-[14px]"><FileText size={24} strokeWidth={2} /></div>
          <div>
            <h3 className="text-[22px] font-bold text-gray-900 leading-tight">{formatNum(currentData.cards.umumiy)}</h3>
            <p className="text-[13px] text-gray-500 font-medium mt-0.5">Umumiy arizalar soni</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-[20px] flex items-center space-x-4 shadow-sm border border-gray-100/50 hover:shadow-md transition-all">
          <div className="p-3 bg-rose-500 text-white rounded-[14px]"><FileX size={24} strokeWidth={2} /></div>
          <div>
            <h3 className="text-[22px] font-bold text-gray-900 leading-tight">{formatNum(currentData.cards.bajarilmagan)}</h3>
            <p className="text-[13px] text-gray-500 font-medium mt-0.5">Bajarilmagan arizalar</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-[20px] flex items-center space-x-4 shadow-sm border border-gray-100/50 hover:shadow-md transition-all">
          <div className="p-3 bg-green-500 text-white rounded-[14px]"><FileCheck size={24} strokeWidth={2} /></div>
          <div>
            <h3 className="text-[22px] font-bold text-gray-900 leading-tight">{formatNum(currentData.cards.tasdiqlangan)}</h3>
            <p className="text-[13px] text-gray-500 font-medium mt-0.5">Tasdiqlangan arizalar soni</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-[20px] flex items-center space-x-4 shadow-sm border border-gray-100/50 hover:shadow-md transition-all">
          <div className="p-3 bg-violet-500 text-white rounded-[14px]"><Banknote size={24} strokeWidth={2} /></div>
          <div>
            <h3 className="text-[22px] font-bold text-gray-900 leading-tight">{formatNum(currentData.cards.summa)} UZS</h3>
            <p className="text-[13px] text-gray-500 font-medium mt-0.5">Umumiy summa</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-[20px] flex items-center space-x-4 shadow-sm border border-gray-100/50 hover:shadow-md transition-all">
          <div className="p-3 bg-cyan-400 text-white rounded-[14px]"><DollarSign size={24} strokeWidth={2} /></div>
          <div>
            <h3 className="text-[22px] font-bold text-gray-900 leading-tight">{formatNum(currentData.cards.qarzlarSoni)}</h3>
            <p className="text-[13px] text-gray-500 font-medium mt-0.5">Qarzlar soni</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-[20px] flex items-center space-x-4 shadow-sm border border-gray-100/50 hover:shadow-md transition-all">
          <div className="p-3 bg-orange-500 text-white rounded-[14px]"><XCircle size={24} strokeWidth={2} /></div>
          <div>
            <h3 className="text-[22px] font-bold text-gray-900 leading-tight">{formatNum(currentData.cards.tolanmaganQarzSoni)}</h3>
            <p className="text-[13px] text-gray-500 font-medium mt-0.5">To'lanmagan qarzlar soni</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-[20px] flex items-center space-x-4 shadow-sm border border-gray-100/50 hover:shadow-md transition-all">
          <div className="p-3 bg-lime-500 text-white rounded-[14px]"><Wallet size={24} strokeWidth={2} /></div>
          <div>
            <h3 className="text-[22px] font-bold text-gray-900 leading-tight">{formatNum(currentData.cards.tolanmaganQarzSum)}</h3>
            <p className="text-[13px] text-gray-500 font-medium mt-0.5">To'lanmagan qarzlar miqdori</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-[20px] flex items-center space-x-4 shadow-sm border border-gray-100/50 hover:shadow-md transition-all">
          <div className="p-3 bg-blue-500 text-white rounded-[14px]"><CreditCard size={24} strokeWidth={2} /></div>
          <div>
            <h3 className="text-[22px] font-bold text-gray-900 leading-tight">{formatNum(currentData.cards.tolanganQarzSum)} UZS</h3>
            <p className="text-[13px] text-gray-500 font-medium mt-0.5">To'langan qarzlar miqdori</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2 bg-white rounded-[24px] p-6 shadow-sm border border-gray-100/50">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900">Umumiy arizalar</h2>
            <p className="text-[14px] text-gray-500 mt-1">Arizalar soni <span className="font-bold text-gray-900">{formatNum(currentData.cards.umumiy)} ta</span></p>
          </div>
          <div className="h-[280px] w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={currentData.lineChart} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#6b7280", fontSize: 12 }} dy={15} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: "#6b7280", fontSize: 12 }} width={60} tickFormatter={(value) => value === 0 ? "0" : formatNum(value)} />
                <Line type="monotone" dataKey="umumiy" stroke="#3b82f6" strokeWidth={2.5} dot={false} animationDuration={500} />
                <Line type="monotone" dataKey="muvaffaqiyatli" stroke="#22c55e" strokeWidth={2.5} dot={false} animationDuration={500} />
                <Line type="monotone" dataKey="qoralama" stroke="#cbd5e1" strokeWidth={2.5} dot={false} animationDuration={500} />
                <Line type="monotone" dataKey="bajarilmagan" stroke="#f43f5e" strokeWidth={2.5} dot={false} animationDuration={500} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-between items-center text-[13px] mt-8 pt-6 border-t border-gray-100 font-medium text-gray-700">
            <div className="flex items-center"><span className="w-4 h-4 rounded-[4px] bg-blue-500 mr-2"></span> Umumiy arizalar</div>
            <div className="flex items-center"><span className="w-4 h-4 rounded-[4px] bg-green-500 mr-2"></span> Muvaffaqiyatli arizalar</div>
            <div className="flex items-center"><span className="w-4 h-4 rounded-[4px] bg-gray-300 mr-2"></span> Qoralama</div>
            <div className="flex items-center"><span className="w-4 h-4 rounded-[4px] bg-rose-500 mr-2"></span> Bajarilmagan arizalar</div>
          </div>
        </div>

        <div className="col-span-1 bg-white rounded-[24px] p-6 shadow-sm border border-gray-100/50">
          <h2 className="text-xl font-bold text-gray-900 mb-8">Jins bo'yicha</h2>
          <div className="relative h-44 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={currentData.pieData} cx="50%" cy="100%" startAngle={180} endAngle={0} innerRadius={75} outerRadius={105} paddingAngle={2} dataKey="percent" stroke="none" animationDuration={500}>
                  {currentData.pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute flex flex-col items-center justify-end pb-2 bottom-0 left-0 right-0 top-0">
              <h3 className="text-[22px] font-bold text-gray-900 leading-none">{formatNum(currentData.pieTotal)}</h3>
              <p className="text-[13px] text-gray-500 mt-1">Barcha bemorlar soni</p>
            </div>
          </div>
          <div className="mt-10 flex flex-col">
            {currentData.pieData.map((item, index) => (
              <div key={index} className={`flex items-start ${index !== currentData.pieData.length - 1 ? "border-b border-gray-100 pb-4 mb-4" : ""}`}>
                <span className="w-3.5 h-3.5 rounded-sm mt-1 mr-3 flex-shrink-0" style={{ backgroundColor: item.color }}></span>
                <div className="flex flex-col">
                  <span className="text-[13px] text-gray-500 mb-0.5">{item.name}</span>
                  <span className="font-bold text-[15px] text-gray-900">{item.percent}% ({formatNum(item.count)})</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-[420px] rounded-[24px] p-6 shadow-2xl animate-in fade-in zoom-in duration-200">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-[20px] font-bold text-gray-900">Klinikalar</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-900 transition-colors p-1"
              >
                <X size={22} />
              </button>
            </div>

            <div className="relative mb-4">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Izlash"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#F8FAFC] focus:bg-white border border-transparent focus:border-gray-200 rounded-xl pl-10 pr-4 py-3 text-[14px] text-gray-900 outline-none transition-all placeholder:text-gray-400"
              />
            </div>

            <div className="max-h-[250px] overflow-y-auto pr-1 flex flex-col custom-scrollbar">
              {filteredClinics.map((clinic, idx) => (
                <div 
                  key={clinic.id} 
                  onClick={() => setSelectedClinic(clinic.id)}
                  className={`flex items-center justify-between py-3.5 cursor-pointer border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors px-1 ${selectedClinic === clinic.id ? '' : ''}`}
                >
                  <div className="flex items-center gap-3">
                    {clinic.id !== "all" && (
                      <div className="w-6 h-6 rounded-full flex items-center justify-center relative bg-red-50">
                        {/* Akfa Medline qizil ikonkasini taqlid qilish */}
                        <div className="flex items-center">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500 absolute left-[3px]"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500 absolute right-[3px]"></div>
                        </div>
                      </div>
                    )}
                    <span className="text-[15px] font-medium text-gray-900">{clinic.name}</span>
                  </div>

                  <div className={`w-5 h-5 rounded-full border-[2px] flex items-center justify-center transition-all ${selectedClinic === clinic.id ? "border-[#14B8A6]" : "border-gray-300"}`}>
                    {selectedClinic === clinic.id && (
                      <div className="w-2.5 h-2.5 rounded-full bg-[#14B8A6]"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 mt-6">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="flex-1 bg-[#F1F5F9] hover:bg-[#E2E8F0] text-gray-600 py-3 rounded-xl font-medium text-[15px] transition-colors"
              >
                Bekor qilish
              </button>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="flex-1 bg-[#F8FAFC] text-gray-400 hover:text-gray-500 border border-gray-100 py-3 rounded-xl font-medium text-[15px] transition-colors"
              >
                Tasdiqlash
              </button>
            </div>

          </div>
        </div>
      )}
      
    </div>
  );
}