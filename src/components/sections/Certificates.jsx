import { motion } from 'framer-motion';
import { Award, ExternalLink, ChevronRight } from 'lucide-react';

const CERTIFICATES = [
    {
        title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
        issuer: "Oracle",
        date: "Oct 25",
        link: "#",
        platform: "Oracle"
    },
    {
        title: "SQL (Advanced)",
        issuer: "HackerRank",
        date: "Sep 25",
        link: "https://www.hackerrank.com",
        platform: "HackerRank"
    },
    {
        title: "Cloud Computing",
        issuer: "NPTEL",
        date: "Apr 25",
        link: "#",
        platform: "NPTEL"
    },
    {
        title: "Java (Basic)",
        issuer: "HackerRank",
        date: "Feb 25",
        link: "https://www.hackerrank.com",
        platform: "HackerRank"
    },
    {
        title: "The Bits and Bytes of Computer Networking",
        issuer: "Coursera",
        date: "Sep 24",
        link: "#",
        platform: "Coursera"
    }
];

export default function Certificates() {
    return (
        <div className='space-y-6 max-w-4xl mx-auto'>
            <div className='space-y-2'>
                <p className='text-xs font-mono text-muted flex items-center gap-2'>
                    <ChevronRight size={10} className='text-arch-blue' />
                    Professional certifications & achievements
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {CERTIFICATES.map((cert, i) => (
                    <motion.div
                        key={cert.title}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className='group p-5 bg-black/5 dark:bg-white/5 border border-border dark:border-dark-border rounded-xl hover:border-arch-blue/40 transition-all flex flex-col justify-between hover:shadow-lg hover:shadow-arch-blue/10'
                    >
                        <div className='space-y-3'>
                            <div className='flex justify-between items-start'>
                                <div className='p-2 bg-arch-blue/10 rounded-lg text-arch-blue'>
                                    <Award size={20} />
                                </div>
                                <span className='text-[10px] font-mono text-muted uppercase tracking-wider'>{cert.date}</span>
                            </div>

                            <div>
                                <h3 className='text-sm font-bold leading-snug group-hover:text-arch-blue transition-colors'>
                                    {cert.title}
                                </h3>
                                <p className='text-xs text-muted mt-1'>{cert.issuer}</p>
                            </div>
                        </div>

                        <div className='mt-6 flex items-center justify-between pt-4 border-t border-border/50 dark:border-dark-border/50'>
                            <span className='px-2 py-0.5 bg-arch-blue/10 rounded text-[9px] font-mono text-arch-blue border border-arch-blue/20'>
                                {cert.platform}
                            </span>
                            <a
                                href={cert.link}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center gap-1.5 text-[11px] font-mono text-arch-blue hover:underline'
                            >
                                VIEW DETAIL
                                <ExternalLink size={10} />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
