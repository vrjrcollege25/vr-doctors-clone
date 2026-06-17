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
    <section className="py-16 md:py-24 bg-gray-50">

      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <div className="text-center mb-14">

          <p className="text-orange-500 font-semibold uppercase tracking-widest">
            Success Stories
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-blue-900">
            Student & Parent Testimonials
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600">
            Real stories from students and parents who trusted
            VR Doctors Academy on their journey toward medical careers.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {videos.map((video) => (
            <div
              key={video.embedId}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition"
            >

              <div className="aspect-video">

                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

              </div>

              <div className="p-6">

                <h3 className="text-xl font-bold text-blue-900">
                  {video.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {video.description}
                </p>

              </div>

            </div>
          ))}

        </div>

        <div className="text-center mt-12">

          <a
            href="https://www.youtube.com/@VR_JuniorCollege"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-900 text-white px-8 py-4 rounded-xl hover:bg-blue-800 transition font-semibold"
          >
            View More Testimonials →
          </a>

        </div>

      </div>

    </section>
  );
}