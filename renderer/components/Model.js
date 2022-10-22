import { IoClose } from 'react-icons/io5';


export default function Modal({ open, children, onClose }) {
    if (!open) return null;

    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full z-50 overflow-y-auto bg-black/40 backdrop-blur-sm">
                <div className="w-full h-full flex items-center justify-center">
                    <div className="bg-background text-white w-1/3 mx-auto rounded shadow-lg py-4 text-left px-6">
                        <div className="flex justify-end">
                            <button className=" rounded outline outline-offset-2 outline-0  hover:outline-2 focus:outline-1 outline-cyan-500" onClick={onClose}>
                                <span className="text-2xl text-white">
                                    <IoClose />
                                </span>
                            </button>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}