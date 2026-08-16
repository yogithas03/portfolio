import { useRef, useEffect, useState, useCallback, useContext } from 'react';
import { gsap } from 'gsap';
import { ThemeContext } from '../context/ThemeContext';

const AccordionGallery = ({
  items = [],
  defaultIndex = 1,
  accentColor = '#00d3f3', 
  overlayColor = '#060010',
  textColor = '#ffffff',
  height = 550, 
  gap = 10,
  radius = 16,
  expandRatio = 0.55, 
  orientation = 'horizontal',
  duration = 0.6,
  ease = 'power3.out',
  parallax = 0.5,
  tilt = 8,
  stagger = 0.06,
  trigger = 'hover',
  showLabels = true,
  grayscale = false, 
  className = ''
}) => {
  const rootRef = useRef(null);
  const panelRefs = useRef([]);
  const mediaRefs = useRef([]);
  const barRefs = useRef([]);
  const textRefs = useRef([]);
  const tlRef = useRef(null);
  const firstRunRef = useRef(true);
  const mediaSizeRef = useRef(320);
  const { isDark } = useContext(ThemeContext);

  const vertical = orientation === 'vertical';
  const count = items.length;
  const [active, setActive] = useState(Math.min(Math.max(defaultIndex, 0), count - 1));

  const prefersReduced =
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  const overlayBg = `linear-gradient(180deg, transparent 15%, color-mix(in srgb, ${overlayColor} 85%, transparent) 100%), color-mix(in srgb, ${overlayColor} calc(var(--ag-dim, 0.35) * 100%), transparent)`;

  const applyLayout = useCallback(
    animate => {
      const panels = panelRefs.current;
      if (!panels.length) return;

      const r = Math.min(Math.max(expandRatio, 0.2), 0.9);
      const grow = count > 1 ? (r * (count - 1)) / (1 - r) : 1;
      const mediaSize = mediaSizeRef.current;

      tlRef.current?.kill();
      const dur = animate && !prefersReduced ? duration : 0;
      const tl = gsap.timeline();

      panels.forEach((panel, i) => {
        if (!panel) return;
        const isActive = i === active;
        const media = mediaRefs.current[i];
        const bar = barRefs.current[i];
        const text = textRefs.current[i];

        const rot = isActive ? 0 : i < active ? tilt : -tilt;
        const rotProp = vertical ? { rotateX: -rot } : { rotateY: rot };

        tl.to(panel, { flexGrow: isActive ? grow : 1, ...rotProp, duration: dur, ease }, 0);

        if (media) {
          const drift = Math.max(-1.5, Math.min(1.5, active - i));
          const shift = drift * parallax * mediaSize * 0.06;
          const gray = grayscale ? (isActive ? 0 : 1) : 0;
          tl.to(
            media,
            {
              xPercent: -50,
              yPercent: -50,
              x: vertical ? 0 : isActive ? 0 : shift,
              y: vertical ? (isActive ? 0 : shift) : 0,
              '--ag-gray': gray,
              '--ag-dim': isActive ? 0.3 : 0.6,
              duration: dur,
              ease
            },
            0
          );
        }

        if (showLabels && text) {
          if (isActive) {
            if (bar) tl.to(bar, { opacity: 1, x: 0, duration: dur, ease, stagger: prefersReduced ? 0 : stagger }, 0);
            tl.to(text, { opacity: 1, x: 0, duration: dur, ease, stagger: prefersReduced ? 0 : stagger }, 0);
            tl.set(text, { pointerEvents: 'auto' }); 
          } else {
            if (bar) tl.to(bar, { opacity: 0, x: -14, duration: dur * 0.6, ease }, 0);
            tl.to(text, { opacity: 0, x: -14, duration: dur * 0.6, ease }, 0);
            tl.set(text, { pointerEvents: 'none' }); 
          }
        }
      });

      tlRef.current = tl;
    },
    [
      active,
      count,
      expandRatio,
      duration,
      ease,
      vertical,
      tilt,
      parallax,
      grayscale,
      showLabels,
      stagger,
      prefersReduced
    ]
  );

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const measure = () => {
      const rect = el.getBoundingClientRect();
      const total = vertical ? rect.height : rect.width;
      const usable = Math.max(total - gap * (count - 1), 120);
      const size = Math.max(140, usable * Math.min(Math.max(expandRatio, 0.2), 0.9) * 1.22);
      mediaSizeRef.current = size;
      el.style.setProperty('--ag-media-size', `${size}px`);
      applyLayout(!firstRunRef.current);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [applyLayout, gap, count, expandRatio, vertical]);

  useEffect(() => {
    applyLayout(!firstRunRef.current);
    firstRunRef.current = false;
  }, [applyLayout]);

  useEffect(
    () => () => {
      tlRef.current?.kill();
    },
    []
  );

  const handleEnter = i => {
    if (trigger === 'hover') setActive(i);
  };

  const handleClick = (i, e) => {
    if (i !== active) {
      e.preventDefault();
      setActive(i);
    }
  };

  const handleKeyDown = (i, e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i + 1) % count);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i - 1 + count) % count);
    }
  };

  return (
    <div
      ref={rootRef}
      className={`flex ${vertical ? 'flex-col' : 'flex-row'} w-full max-w-full [perspective:1400px] max-[768px]:!flex-col max-[768px]:[perspective:none] ${className}`}
      style={{ gap: `${gap}px`, height: vertical ? `${Math.round(height * 1.6)}px` : `${height}px` }}
      role="list"
      aria-label="Image accordion gallery"
    >
      {items.map((project, i) => {
        const isActive = i === active;
        const Tag = 'div';
        return (
          <Tag
            key={i}
            ref={el => (panelRefs.current[i] = el)}
            className="group relative block min-w-0 min-h-0 flex-[1_1_0] cursor-pointer overflow-hidden bg-[#0a0713] no-underline outline-none [transform-style:preserve-3d] [transform-origin:center] [box-shadow:0_10px_30px_-18px_rgba(0,0,0,0.8)] focus-visible:[box-shadow:0_0_0_2px_var(--ag-accent),0_10px_30px_-18px_rgba(0,0,0,0.8)] max-[768px]:min-h-[140px] max-[768px]:!transform-none"
            style={{ borderRadius: `${radius}px`, '--ag-accent': accentColor, willChange: 'flex-grow, transform' }}
            onClick={e => handleClick(i, e)}
            onMouseEnter={() => handleEnter(i)}
            onFocus={() => setActive(i)}
            onKeyDown={e => handleKeyDown(i, e)}
            role="listitem"
            tabIndex={0}
            aria-current={isActive ? 'true' : undefined}
            aria-label={project.projectName}
          >
            <span className="absolute inset-0 overflow-hidden [border-radius:inherit]">
              <span
                ref={el => (mediaRefs.current[i] = el)}
                className="absolute top-1/2 left-1/2 [filter:grayscale(var(--ag-gray,1))]"
                style={{
                  width: vertical ? '100%' : 'var(--ag-media-size, 320px)',
                  height: vertical ? 'var(--ag-media-size, 320px)' : '100%',
                  willChange: 'transform, filter'
                }}
              >
                <img
                  src={project.image}
                  alt={project.projectName}
                  draggable="false"
                  className="block h-full w-full select-none object-fill [-webkit-user-drag:none]"
                />
              </span>
              <span
                className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                style={{ background: overlayBg }}
                aria-hidden="true"
              />
            </span>
            
            {showLabels && (
              <span
                ref={el => (textRefs.current[i] = el)}
                className="absolute inset-0 z-[2] flex flex-col justify-end p-6 md:p-8 opacity-0 pointer-events-none transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2 md:mb-3">
                  <span
                    ref={el => (barRefs.current[i] = el)}
                    className="h-[26px] w-[3px] flex-none rounded-[3px] opacity-0"
                    style={{
                      background: accentColor,
                      boxShadow: `0 0 12px color-mix(in srgb, ${accentColor} 60%, transparent)`
                    }}
                  />
                  <h3 className="text-2xl md:text-3xl font-bold [text-shadow:0_2px_14px_rgba(0,0,0,0.8)]" style={{ color: textColor }}>
                    {project.projectName}
                  </h3>
                </div>
                
                <p className="text-sm md:text-base leading-relaxed mb-4 [text-shadow:0_2px_10px_rgba(0,0,0,0.8)] line-clamp-2 md:line-clamp-3 ml-[38px]" style={{ color: textColor }}>
                  {project.projectDesc}
                </p>

                {project.techStack && (
                  <div className="flex flex-wrap gap-2 mb-6 ml-[38px]">
                    {project.techStack.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-2.5 py-1 text-[11px] md:text-xs font-medium rounded-full bg-cyan-500/20 text-cyan-50 border border-cyan-500/30 backdrop-blur-sm shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {project.footerLink && (
                  <div className="flex items-center gap-3 ml-[38px]">
                    {project.footerLink.map((link, idx) => {
                      if (link.name === "GitHub") {
                        return (
                          <a 
                            key={idx}
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex-1 max-w-[140px] flex items-center justify-center py-2.5 rounded-md bg-slate-800/80 backdrop-blur-md text-white hover:bg-slate-700/90 transition-all border border-white/20 shadow-lg cursor-pointer"
                          >
                            <span className="font-semibold text-xs md:text-sm">{link.name}</span>
                          </a>
                        );
                      }
                      return (
                        <a 
                          key={idx}
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 max-w-[140px] flex items-center justify-center py-2.5 rounded-md bg-[#00d3f3] text-white hover:shadow-[0_0_20px_#00d3f3] hover:-translate-y-[2px] transition-all duration-300 ease-in shadow-lg cursor-pointer"
                        >
                          <span className="font-bold text-xs md:text-sm uppercase tracking-[1px] leading-[1]">{link.name}</span>
                        </a>
                      );
                    })}
                  </div>
                )}
              </span>
            )}
          </Tag>
        );
      })}
    </div>
  );
};

export default AccordionGallery;
