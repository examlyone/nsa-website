"use client";

export default function Enroll() {
    const text = "Enroll in Free Upcoming Webinar on Road to CMA";

    return (
        <div className="relative flex overflow-hidden bg-yellow-300 py-2">
            {/* First loop */}
            <div className="animate-marquee whitespace-nowrap flex">
                {Array(4)
                    .fill(text)
                    .map((item, i) => (
                        <span key={i} className="mx-6 font-medium">
                            {item}
                        </span>
                    ))}
            </div>

            {/* Second loop (for seamless effect) */}
            <div className="absolute animate-marquee2 whitespace-nowrap flex">
                {Array(4)
                    .fill(text)
                    .map((item, i) => (
                        <span key={i} className="mx-8 font-medium">
                            {item}
                        </span>
                    ))}
            </div>
        </div>
    );
}
