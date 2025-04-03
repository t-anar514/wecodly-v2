export default function CourseCard({ thumb, uImg, uName, Title, Desc, href }) {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 flex flex-col gap-6 items-start shadow-md hover:shadow-lg transition-shadow transform hover:scale-105">
      {/* Thumbnail */}
      <div
        className="w-full h-48 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage: `url(${
            thumb ||
            "https://nest.lit.mn/uploads/thumbnails/course_thumbnails/course_thumbnail_default_6.jpg"
          })`,
        }}
      ></div>

      {/* Content */}
      <div className="w-full space-y-4 text-white">
        {/* Profile */}
        <div className="flex items-center gap-4">
          <img
            className="h-12 w-12 rounded-full border-2 border-purple-600"
            src={uImg || "https://via.placeholder.com/150"}
            alt={uName || "Instructor"}
          />
          <p className="text-lg font-semibold">
            {uName || "Unknown Instructor"}
          </p>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-purple-400">{Title}</h1>

        {/* Description */}
        <p className="text-gray-300 text-sm">{Desc}</p>

        {/* Read More Button */}
        {href && (
          <a
            href={href}
            className="inline-block mt-4 text-purple-400 hover:text-purple-600 transition-colors"
          >
            Read more
          </a>
        )}
      </div>
    </div>
  );
}
