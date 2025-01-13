export default function Loading() {
    return (
        <div className="w-full h-screen bg-transparent dark:bg-transparent">

            <div
                className="w-[10rem] h-[10rem] grid place-items-center absolute top-[40%] sm:right-[40%] xs:right-[30%] [transition:all_400ms_ease] hover:-translate-y-[1rem]">

                <div className="w-[7rem] h-[7rem] absolute bg-yellow-600/30 rounded-lg animate-[spinIn_1s_linear_infinite]"></div>
                <div className="w-[8rem] h-[8rem] absolute bg-yellow-600/20 shadow-xl rounded-full"></div>
                <div
                    className="bg-gradient-to-r from-sky-500 to-yellow-500/30 rounded-full text-center inline-flex items-center text-[#000e17] font-semibold w-[10rem] h-[10rem] justify-center animate-[spinOut_1s_linear_infinite]">

                <p className="absolute -rotate-[360deg] text-white text-sm font-serif font-semibold">LOADING ...</p>
                </div>
            </div>
        </div>
    );
}