export default function Slide({ item }) {
    return (
        <div className="w-full h-screen flex flex-col md:flex-row items-center justify-between px-20 bg-[#F7F8FD]">

            {/* LEFT TEXT BLOCK */}
            <div className="max-w-xl w-full md:w-1/2">
                <p className="text-[#FB2E86] font-semibold text-sm mb-3 tracking-wide">
                    Best Furniture For Your Castle...
                </p>

                <h1 className="text-5xl font-bold text-[#0D0E43] leading-tight mb-4">
                    New Furniture Collection <br /> Trends in 2020
                </h1>

                <p className="text-gray-500 mb-6 text-[16px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
                    adipiscing in phasellus non in justo.
                </p>

                <button className="px-6 py-3 bg-[#FB2E86] text-white text-sm rounded-md
                    border-2 border-[#FB2E86] transition-all duration-300
                    hover:bg-transparent hover:text-[#FB2E86] active:scale-95">
                    Shop Now
                </button>
            </div>

            {/* RIGHT IMAGE BLOCK (Correct Position) */}
            <div className="relative flex items-center justify-center w-full md:w-1/2">

                {/* Background Circle */}
                <div className="absolute w-[450px] h-[450px] bg-[#E0D4F9] rounded-full opacity-40 -z-10"></div>

                {/* 50% OFF BADGE */}
                <div className="absolute top-10 right-10 bg-[#3F43FD] text-white
                        rounded-full px-5 py-3 text-sm font-semibold shadow-lg">
                    50% <br /> off
                </div>

                {/* Correct Image Placement 👉 RIGHT SIDE */}
                <img
                    src={item.image}
                    alt=""
                    className="w-[450px] md:w-[520px] drop-shadow-xl object-contain"
                />
            </div>
        </div>
    );
}
