function AchievementCard({
  image,
  name,
  achievement,
  score,
  year,
}) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">

      {/* Circular Photo */}
      <div className="relative mx-auto w-fit">
        <img
          src={image}
          alt={name}
          className="
            h-28
            w-28
            rounded-full
            border-4
            border-blue-100
            object-cover
            transition-transform
            duration-300
            group-hover:scale-105
          "
        />

        <div className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400 text-xs shadow-md">
          🏆
        </div>
      </div>

      {/* Name */}
      <h3 className="mt-3 text-lg font-bold text-slate-900 leading-tight">
        {name}
      </h3>

      {/* Achievement */}
      <p className="mt-1 text-sm font-medium leading-snug text-blue-600">
        {achievement}
      </p>

      {/* Score */}
      <div className="mt-2 inline-flex rounded-full bg-blue-50 px-3 py-1">
        <span className="text-sm font-bold text-blue-700">
          {score}
        </span>
      </div>

      {/* Year */}
      <p className="mt-2 text-xs text-slate-500">
        {year}
      </p>
    </div>
  );
}

export default AchievementCard;