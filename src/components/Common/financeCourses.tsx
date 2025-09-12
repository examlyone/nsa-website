import Link from 'next/link'

export default function FinanceCourses({ handleCourseClick }: { handleCourseClick: () => void }) {
    const courses = [
        {
            logo: '/images/CPA.png',
            title: 'CPA US Course in India',
            description: 'Eligibility, Fees, & Exam Details',
            link: '/courses/cpa-us',
        },
        {
            logo: '/images/CMA.png',
            title: 'CMA USA Course',
            description: 'Join the Fastest-Growing Program in India',
            link: '/Courses/cma',
        },
        {
            logo: '/images/ACCA.png',
            title: 'ACCA Certification',
            description: 'Globally Recognized Accounting',
            link: '/courses/acca-certification',
        },
        {
            logo: '/images/EA.png',
            title: 'Enrolled Agent (EA) Course',
            description: 'IRS Authorized Tax Professional Program',
            link: '/courses/enrolled-agent',
        },
    ]

    return (
        <section className="container mx-auto px-4 py-6 ">
            <div className="mb-8">
                <h2 className=" mx-auto text-2xl font-semibold text-start">
                    Discover our Finance & Accounting Courses
                </h2>
                <hr className="w-3/3 border border-gray-200 mt-4"/>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center text-center">
                {courses.map((course, index) => (
                    <Link
                        key={index}
                        href={course.link}
                        className="relative flex flex-col-2 rounded-md items-center bg-white p-3 overflow-hidden transition-transform transform hover:scale-105"
                        onClick={() => handleCourseClick()}
                    >
                        <div className="w-16 h-16 rounded-full">
                            <img
                                src={course.logo}
                                alt={course.title}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex flex-col px-4">
                            <h3 className="font-semibold text-lg transition-colors">
                                {course.title}
                            </h3>

                            <p className="text-gray-600 text-sm mt-2">{course.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}
