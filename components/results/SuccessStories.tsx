const videos = [
  {
    title: "Parent Testimonial",
    description:
      "A parent shares their experience and trust in VR Doctors Academy.",
    embedId: "7IiUv26FzAQ",
  },
  {
    title: "Parent Success Story",
    description:
      "Feedback from a parent whose child achieved medical admission.",
    embedId: "pVV7zBMnM8g",
  },
  {
    title: "Student Testimonial",
    description:
      "A student shares their preparation journey and success story.",
    embedId: "pWwbn-vnsRE",
  },
  {
    title: "Student Success Story",
    description:
      "From aspiration to medical college admission.",
    embedId: "gPJySylrNyQ",
  },
];

export default function SuccessStories() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">

      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <div className="text-center mb-10">

          <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm md:text-base">
            Success Stories
          </p>

          <h2 className="mt-3 md:mt-4 text-3xl md:text-5xl font-bold text-blue-900">
            Real Stories, Real Results
          </h2>

          <p className="max-w-3xl mx-auto mt-4 md:mt-6 text-sm md:text-base text-gray-600">
            Hear from students and parents who trusted VR Doctors Academy on their journey toward medical careers.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">

          {videos.map((video) => (
            <div
              key={video.embedId}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition group"
            >

              <div className="aspect-video relative bg-gray-900 overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="p-5 md:p-6">

                <h3 className="text-lg md:text-xl font-bold text-blue-900 group-hover:text-orange-500 transition">
                  {video.title}
                </h3>

                <p className="mt-2 md:mt-3 text-sm md:text-base text-gray-600">
                  {video.description}
                </p>

              </div>

            </div>
          ))}

        </div>

        <div className="text-center mt-10">

          <a
            href="https://www.youtube.com/@VR_JuniorCollege"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-blue-900 to-blue-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:from-blue-800 hover:to-blue-700 transition font-semibold text-sm md:text-base shadow-lg"
          >
            Watch More Stories on YouTube →
          </a>

        </div>

      </div>

    </section>
  );
}