const getStarted = () => {
    return (
        <div className="bg-custom-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                <div className="max-w-3xl mx-auto">
                    <img
                        className="relative w-3/4 h-3/4 shrink-0"
                        alt=""
                        src="images/dark-logo.svg"
                    />
                </div>
            </div>
        </div>

    );
};

export default getStarted;

        // <div className="relative bg-gray-400 w-full h-full text-center text-[96px] text-white font-roboto">
        //     <div className="absolute top-[33px] left-[calc(50%_-_627.75px)] flex flex-col p-[50px_220px] box-border items-center justify-center gap-[122px]">
        //         <div className="flex flex-col items-center justify-start gap-[50px]">
        //             <img
        //                 className="relative w-[447.89px] h-[300px] shrink-0"
        //                 alt=""
        //                 src="images/dark-logo.svg"
        //             />
        //             <div className="flex flex-col items-start justify-start gap-[35px]">
        //                 <b className="relative flex items-center justify-center w-[815.5px] h-[57px] shrink-0">
        //                     DOST
        //                 </b>
        //                 <b className="relative text-[36px] flex items-center justify-center w-[815.5px] h-[57px] shrink-0">
        //                     Advanced Python Made Simple
        //                 </b>
        //             </div>
        //         </div>
        //         <input
        //             className="[border:none] bg-gray-1000 relative rounded-[6px] w-[281px] h-[46px] shrink-0 overflow-hidden"
        //             type="text"
        //             placeholder="*Name"
        //             required
        //         />
        //         <button className="cursor-pointer [border:none] p-[0] bg-yellow relative rounded-[6px] w-[174px] h-[44px] shrink-0">
        //             <b className="absolute h-[43.18%] w-[52.3%] top-[27.27%] right-[25.29%] bottom-[29.55%] left-[22.41%] text-lg inline-block font-inter text-black text-center">
        //                 Get Started
        //             </b>
        //         </button>
        //     </div>
        // </div>