import toast from "react-hot-toast";

const Newsletter = () => {
    const handleSubscribe = () =>{
        toast.success("Thank you for Subscribe")
    }
    return (
        <div className="mt-16">
            <div className="bg-[#D875C7] dark:bg-gray-500 text-white">
                <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
                    <h1 className="text-4xl md:text-5xl antialiased font-semibold leading-none text-center dark:text-gray-800">Get Our Updates</h1>
                    <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-800">Find out about events and other news</p>
                    <form className="flex flex-row">
                        <input type="email" placeholder="example@gmail.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3 text-black" />
                        <button onClick={handleSubscribe} type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-[#912BBC] dark:text-gray-50">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;