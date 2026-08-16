

export default function Button({ text, className, href, newTab }) {
  return (
    <div className={className}>
      <a
        className="inline-block no-underline bg-[#00d3f3] text-white font-bold uppercase tracking-[1px] leading-[1] rounded-md transition-all duration-300 ease-in hover:shadow-[0_0_20px_#00d3f3] hover:-translate-y-[2px] px-6 py-4"
        href={href}
        target={newTab ? "_blank" : "_self"}
        rel="noopener noreferrer"
      >
        {text}
      </a>
    </div>
  );
}
