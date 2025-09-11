export default function WhyChooseUs() {
    const features = [
        {
            title: 'Game-Changing Exam Review',
            description: `We've changed how candidates prepare for the Exam. With our award-winning Exam prep, you'll master difficult accounting topics on a deeper level. We help you truly understand the material for improved performance on the Exam and in your career.`,
            image: "/NsaExam-img/choose-1.png",
        },
        {
            title: 'Understand Difficult Accounting Concepts with Visual Learning',
            description: `High-quality questions and detailed answer explanations – written by practicing CPA, CIA, CISA, CMA, ACCA and accounting educators – include vivid illustrations, diagrams, flowcharts, and tables that provide immediate feedback and bring tough Exam topics to life.`,
            image: "/NsaExam-img/choose-2.png",
        },
        {
            title: 'Study Smart and Pass Faster with Time-Saving Technology',
            description: `NSA is recognized as a leader in education technology. With innovative and adaptive tools that improve learning outcomes, we help you study difficult concepts efficiently, retain more information, and ultimately know when you are “Exam ready.”`,
            image: "/NsaExam-img/choose-3.png",
        },
    ]

    return (
        <section className="container mx-auto px-4 py-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                Why Choose NorthStar Academy’s <br />
                <span className="bg-gradient-to-r from-[#EC2027] to-[#861216] text-transparent bg-clip-text">Exam Preparation Platform?</span>
            </h2>
            <p className="text-sm md:text-md lg:text-xl text-center mb-10">NorthStar Academy has been a leader in high-stakes exam prep for over two decades.NorthStar Academy<br/> Exam prep applies our proven learning methodologies to guide any course candidates to licensure.</p>
            <div className="mt-10 space-y-12">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row items-center gap-8 md:gap-14 ${
                            index % 2 === 1 ? 'md:flex-row-reverse' : ''
                        }`}
                    >
                        <div className="w-full md:w-1/2 flex justify-center">
                            <img
                                src={feature.image}
                                alt={feature.title}
                                className=" w-[300px] max-w-md object-contain rounded shadow-lg"
                            />
                        </div>

                        <div className="w-full md:w-1/2 text-center md:text-left px-4">
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">{feature.title}</h3>
                            <p className="text-gray-700 leading-relaxed text-sm md:text-base">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
