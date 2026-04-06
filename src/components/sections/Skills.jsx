import { motion } from 'framer-motion';
import {
    Code2,
    Database,
    Globe,
    Terminal as TerminalIcon,
    Server,
    Cpu,
    Code
} from 'lucide-react';
import {
    SiPython,
    SiCplusplus,
    SiC,
    SiJavascript,
    SiNodedotjs,
    SiExpress,
    SiReact,
    SiTailwindcss,
    SiMongodb,
    SiFirebase,
    SiGit,
    SiGithub,
    SiDocker,
    SiHtml5,
    SiCss,
    SiPostman
} from 'react-icons/si';

const SKILL_ICONS = {
    'Java': Code,
    'Kotlin': Code,
    'Python': SiPython,
    'C++': SiCplusplus,
    'C': SiC,
    'JavaScript': SiJavascript,
    'SQL': Database,
    'Node.js': SiNodedotjs,
    'Express.js': SiExpress,
    'React.js': SiReact,
    'Tailwind CSS': SiTailwindcss,
    'MongoDB': SiMongodb,
    'Firebase': SiFirebase,
    'Git': SiGit,
    'GitHub': SiGithub,
    'Docker': SiDocker,
    'Pandas': Database,
    'NumPy': Database,
    'Scikit-Learn': Database,
    'Jupyter Notebook': Code,
    'Android': Cpu,
    'HTML5': SiHtml5,
    'CSS3': SiCss,
    'Postman': SiPostman
};

const SKILL_GROUPS = [
    {
        title: 'Languages',
        icon: Code2,
        skills: ['Java', 'Kotlin', 'Python', 'C/C++', 'JavaScript', 'SQL'],
        color: 'text-arch-blue'
    },
    {
        title: 'MERN Stack',
        icon: Globe,
        skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs'],
        color: 'text-purple-400'
    },
    {
        title: 'Android & Mobile',
        icon: Cpu,
        skills: ['Kotlin', 'Android', 'Firebase', 'Firestore', 'XML'],
        color: 'text-emerald-400'
    },
    {
        title: 'Data & Machine Learning',
        icon: Database,
        skills: ['Pandas', 'NumPy', 'Scikit-Learn', 'Data Preprocessing', 'EDA'],
        color: 'text-yellow-400'
    },
    {
        title: 'Tools & DevOps',
        icon: TerminalIcon,
        skills: ['Git', 'GitHub', 'Docker', 'Jupyter Notebook', 'Postman'],
        color: 'text-red-400'
    },
    {
        title: 'Core Competencies',
        icon: Server,
        skills: ['DSA', 'System Design', 'Problem Solving', 'API Design', 'Database Optimization'],
        color: 'text-pink-400'
    }
];

export default function Skills() {
    return (
        <div className='space-y-8 max-w-5xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {SKILL_GROUPS.map((group, i) => (
                    <motion.div
                        key={group.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className='p-6 bg-black/5 dark:bg-white/5 border border-border dark:border-dark-border rounded-xl hover:border-arch-blue/50 transition-all group hover:shadow-lg hover:shadow-arch-blue/5'
                    >
                        <div className='flex items-center gap-3 mb-4'>
                            <div className={`p-2 bg-arch-blue/10 rounded-lg ${group.color} group-hover:bg-arch-blue group-hover:text-black transition-all`}>
                                <group.icon size={20} />
                            </div>
                            <h3 className='text-lg font-bold'>{group.title}</h3>
                        </div>
                        <div className='flex flex-wrap gap-2'>
                            {group.skills.map(skill => {
                                const Icon = SKILL_ICONS[skill];
                                return (
                                    <span
                                        key={skill}
                                        className='px-3 py-1.5 bg-black/5 dark:bg-black/40 border border-border dark:border-dark-border rounded-full text-xs font-mono text-muted hover:text-arch-blue hover:border-arch-blue transition-all flex items-center gap-2 group/skill'
                                    >
                                        {Icon && <Icon size={14} className='opacity-70 group-hover/skill:opacity-100 transition-opacity' />}
                                        {skill}
                                    </span>
                                );
                            })}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Achievement Highlights */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className='mt-12 p-6 bg-arch-blue/5 border border-arch-blue/20 rounded-xl'
            >
                <h3 className='text-sm font-bold text-arch-blue mb-4 uppercase tracking-wider'>Achievements</h3>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                    <div className='space-y-1'>
                        <p className='text-2xl font-bold text-arch-blue'>150+</p>
                        <p className='text-xs text-muted'>DSA Problems Solved</p>
                    </div>
                    <div className='space-y-1'>
                        <p className='text-lg font-bold text-arch-blue'>Pandas Badge</p>
                        <p className='text-xs text-muted'>Introduction to Pandas</p>
                    </div>
                    <div className='space-y-1'>
                        <p className='text-2xl font-bold text-arch-blue'>5★ Gold</p>
                        <p className='text-xs text-muted'>Java & C++ HackerRank</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}