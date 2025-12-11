export default function Card() {
    return (
        <div className="max-w-sm mx-auto bg-white shadow-xl rounded-md border border-gray-200 overflow-hidden hover:border-red-300">
            <div className=" mx-4 mt-4 rounded-sm relative p-4 pt-10">
                <div className="absolute top-2 right-4 flex items-center gap-2">
                    <span className="border-2 border-red-500 text-red-500 font-bold text-xs px-2 py-1">
                        -30%
                    </span>
                    <span className="bg-[#FB2E86] text-white text-xs px-2 py-1">
                        NEW
                    </span>
                </div>

                <img
                    src="/assets/laptop.png"
                    alt="product"
                    className="w-full h-auto object-contain mb-4"
                />

                <p className="text-gray-400 text-xs tracking-wide text-center">
                    CATEGORY
                </p>

                <h2 className="text-center font-bold text-gray-800 mb-1">
                    PRODUCT NAME GOES HERE
                </h2>

                <div className="text-center mb-2">
                    <span className="text-red-500 font-bold text-xl">$980.00</span>
                    <span className="line-through text-gray-400 text-sm ml-2">
                        $998.00
                    </span>
                </div>

                <div className="flex justify-center mb-4 text-red-500 text-sm">
                    ★★★★★
                </div>

                <hr className="my-4" />

                <div className="flex justify-center gap-6 text-gray-600 text-lg mb-4">
                    <button className="hover:text-red-500 transition">♡</button>
                    <button className="hover:text-red-500 transition">⇄</button>
                    <button className="hover:text-red-500 transition">👁</button>
                </div>
            </div>

            <div className="bg-[#0D0E43] p-4 flex justify-center">
                <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-2 rounded-full font-semibold transition-all duration-200 active:scale-95">
                    ADD TO CART
                </button>
            </div>
        </div>
    )
}