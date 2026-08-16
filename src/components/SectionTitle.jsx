const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
          {subtitle}
        </p>
      )}
      <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-6 rounded-full"></div>
    </div>
  );
};

export default SectionTitle;
