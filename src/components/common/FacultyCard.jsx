const FacultyCard = ({ image, name, subject, experience }) => {
    return (
        <div
            className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-[2px]
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-200
        hover:shadow-xl
      "
        >
            {/* Faculty Photo */}
            <img
                src={image}
                alt={name}
                className="
    aspect-square
    w-full
    rounded-[14px]
    object-cover
    transition-transform
    duration-300
    group-hover:scale-105

    lg:w-[92%]
    lg:mx-auto
  "
            />

            {/* Details */}
            <div className="px-3 py-3 text-center">
                <h3 className="text-sm font-bold leading-tight text-slate-900 sm:text-base">
                    {name}
                </h3>

                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                    {subject}
                </p>

                <span
                    className="
            mt-3
            inline-flex
            items-center
            rounded-full
            bg-blue-50
            px-3
            py-1
            text-[10px]
            font-semibold
            text-blue-700
            sm:text-xs
          "
                >
                    {experience}
                </span>
            </div>
        </div>
    );
};

export default FacultyCard;