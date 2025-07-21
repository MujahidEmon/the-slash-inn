
const Newsletter = () => {
    return (
        <div class="bg-gradient-to-tr from-cyan-50 to-blue-50 rounded-2xl p-8">
            <div class="max-w-3xl mx-auto text-center">
                <h2 class="text-slate-900 text-4xl font-bold">Newsletter</h2>
                <p class="text-slate-600 text-[15px] leading-relaxed mt-6">Subscribe to our newsletter and stay up to date with the latest news,
                    updates, and exclusive offers. Get valuable insights. Join our community today!</p>

                <div class="max-w-lg mx-auto bg-gray-100 flex p-1 rounded-full text-left border border-gray-200 focus-within:border-blue-600 focus-within:bg-transparent mt-12">
                    <input type='email' placeholder='Enter your email' class="text-slate-900 w-full outline-none bg-transparent text-sm px-4 py-3" />
                    <button type='button'
                        class="bg-blue-600 hover:bg-blue-700 transition-all text-white font-semibold text-sm rounded-full px-6 py-3 cursor-pointer">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;