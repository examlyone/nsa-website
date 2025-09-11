export default function CallToAction() {
    return (
        <section className="bg-gradient-to-r from-[#FCF8F3] to-[#FDE8E8] rounded-lg p-8 mx-4 md:mx-12 my-10 text-center shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Join the <span className="bg-gradient-to-r from-[#EC2027] to-[#861216] text-transparent bg-clip-text">NorthStar Academy</span> Today!
            </h2>
            <p className="text-gray-700 mb-6">
                Ready to start your journey to success? Sign up today and unlock your <br/> potential with NorthStar Academy’s Exam Preparation Platform!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-red-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-600 transition">
                    Sign Up Now!
                </button>
                <button className="bg-black text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-800 transition">
                    Schedule a Call
                </button>
            </div>
        </section>
    )
}
