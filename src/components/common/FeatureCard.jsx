function FeatureCard({
  icon,
  title,
  description,
  highlight,
}) {
  return (
    <div
      className="
        group
        flex
        min-h-[200px]
        md:min-h-[240px]
        flex-col
        items-center
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-4
        md:p-6
        text-center
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-200
        hover:shadow-xl
      "
    >
      {/* Icon */}
      <div className="flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-xl md:rounded-2xl bg-blue-50 text-2xl md:text-3xl transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-100">
        {icon}
      </div>

      {/* Title */}
      <h3 className="mt-3 md:mt-5 text-base md:text-lg font-bold leading-tight text-slate-900">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-2 md:mt-3 text-xs md:text-sm leading-5 md:leading-6 text-slate-600">
        {description}
      </p>

      {/* Badge */}
      <div className="mt-3 md:mt-5">
        <span className="inline-flex items-center rounded-full bg-blue-600 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-bold text-white shadow-md">
          ⭐ {highlight}
        </span>
      </div>
    </div>
  );
}

export default FeatureCard;