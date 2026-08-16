import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as IoIcons from 'react-icons/io5';
import * as TbIcons from 'react-icons/tb';
import * as MdIcons from 'react-icons/md';
import * as VscIcons from 'react-icons/vsc';

const SkillCard = ({ name, icon, color }) => {
  // Dynamically resolve icon component
  const IconComponent = 
    FaIcons[icon] || 
    SiIcons[icon] || 
    IoIcons[icon] || 
    TbIcons[icon] || 
    MdIcons[icon] ||
    VscIcons[icon];

  return (
    <div className="glass card-hover rounded-xl p-6 flex flex-col items-center justify-center text-center group cursor-pointer h-full">
      <div className={`text-4xl mb-4 transition-transform duration-300 group-hover:scale-125 ${color}`}>
        {IconComponent ? <IconComponent /> : <span className="text-slate-400 text-sm">Icon</span>}
      </div>
      <h3 className="text-slate-700 dark:text-slate-200 font-medium group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
        {name}
      </h3>
    </div>
  );
};

export default SkillCard;
