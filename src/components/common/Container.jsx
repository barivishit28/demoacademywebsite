function Container({ children, className = "", size = "default" }) {
  const sizes = {
    default: "max-w-7xl",
    wide: "max-w-[1536px]",
    full: "max-w-none",
  };

  return (
    <div
      className={`mx-auto w-full px-4 md:px-8 lg:px-12 ${sizes[size]} ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;