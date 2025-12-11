export default function BlogCard() {
    return (
        <div className="max-w-sm bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer">

            <img
                src="/assets/blog.svg"
                alt="Blog Thumbnail"
                className="w-full h-48 object-cover"
            />

            <div className="p-5">

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">

                    <span className="flex items-center gap-1">
                        <span className="text-pink-500 text-xs">●</span>
                        SaberAli
                    </span>

                    <span className="flex items-center gap-1">
                        <span className="text-yellow-500">📅</span>
                        21 August, 2020
                    </span>
                </div>

                <h3 className="text-lg font-bold text-[#0D0E43] mb-2 hover:text-pink-500 transition">
                    Top essential Trends in 2021
                </h3>

                <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                    More off this less hello samlande lied much over tightly circa horse
                    taped mightly.
                </p>

                <button className="text-pink-500 font-semibold hover:underline">
                    Read More
                </button>
            </div>
        </div>
    )
}