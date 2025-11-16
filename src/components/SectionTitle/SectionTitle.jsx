const SectionTitle = ({title, subtitle, textColor="text-secondary"}) => {
    return (
        <div>
            <div className=" py-10 text-center max-w-[680px] mx-auto">
      {/* Title with pink borders */}
      <div className="flex items-center justify-center gap-4">
        <span className="h-0.5 w-12 bg-secondary rounded"></span>
        <h2 className={`text-3xl font-bold ${textColor}`}>{title}</h2>
        <span className="h-0.5 w-12 bg-secondary rounded"></span>
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p className={`mt-3 text-sm md:text-base ${textColor}`}>
          {subtitle}
        </p>
      )}
    </div>
        </div>
    );
};

export default SectionTitle;