import { motion } from 'framer-motion';
import { Terminal, Code, Database, Settings2 } from 'lucide-react';
import TerminalGraphic from '../ui/TerminalGraphic';

export default function About() {
    return (
        <div className='w-full'>
            <section className="mb-8">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className='mb-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6'
                >
                    <div className="relative shrink-0 w-20 h-20 sm:w-24 sm:h-24">
                        <div className="w-full h-full rounded-full overflow-hidden border-2 border-arch-blue/50 p-1">
                            <div className="w-full h-full rounded-full overflow-hidden bg-slate-200 dark:bg-[#161b22]">
                                <img
                                    src="/pfp.jpg"
                                    alt="Deepak Kumar Thakur"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full mt-2 sm:mt-0">
                        <h2 className='text-2xl font-bold flex items-center justify-center sm:justify-start gap-3 w-full'>
                            <span className='text-arch-blue'>About Me</span>
                            <div className="h-px bg-arch-blue/20 flex-1 ml-4 hidden sm:block" />
                        </h2>
                    </div>
                </motion.div>

                {/* CONTENT */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-start items-center'>

                    <div className='space-y-6 text-muted leading-relaxed font-normal'>

                        {/* PARA 1 */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="flex gap-4"
                        >
                            <Code className="w-6 h-6 shrink-0 text-arch-blue/70 mt-1" />
                            <span>
                                I'm a Software Engineer and B.Tech student at Lovely Professional University passionate about building
                                <span className='text-arch-blue font-medium'> scalable systems</span>,
                                <span className='text-arch-blue font-medium'> secure Android apps</span>, and
                                <span className='text-arch-blue font-medium'> intelligent backend solutions</span>. I specialize in full-stack development with proven expertise in production-grade applications.
                            </span>
                        </motion.p>

                        {/* PARA 2 */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex gap-4"
                        >
                            <Database className="w-6 h-6 shrink-0 text-purple-400/70 mt-1" />
                            <span>
                                I engineered multiple projects across the
                                <span className='text-purple-400 font-medium'> MERN stack</span>, including
                                <span className='text-purple-400 font-medium'> RESTful API design</span>,
                                <span className='text-purple-400 font-medium'> MongoDB optimization</span>, and
                                <span className='text-purple-400 font-medium'> JWT-based authentication</span>. I'm committed to clean code, system design, and performance optimization.
                            </span>
                        </motion.p>

                        {/* PARA 3 */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex gap-4"
                        >
                            <Terminal className="w-6 h-6 shrink-0 text-emerald-400/70 mt-1" />
                            <span>
                                My core expertise includes
                                <span className='text-emerald-400 font-medium'> Kotlin + Firebase Android development</span> with biometric security,
                                <span className='text-emerald-400 font-medium'> machine learning pipelines</span> (92–95% accuracy achieved), and
                                <span className='text-emerald-400 font-medium'> 200+ DSA problems</span> solved. I'm passionate about data structures, algorithms, and system design.
                            </span>
                        </motion.p>

                        {/* CURRENT FOCUS */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className='pt-4'
                        >
                            <div className='p-5 rounded-xl bg-bg-secondary/80 dark:bg-dark-bg-secondary/80 border border-arch-blue/10 shadow-lg shadow-arch-blue/5'>
                                <div className='flex items-center gap-2 mb-3'>
                                    <Settings2 className="w-4 h-4 text-arch-blue" />
                                    <h3 className='text-xs font-mono uppercase tracking-widest text-arch-blue'>
                                        Current Focus
                                    </h3>
                                </div>

                                <p className='text-sm text-muted/90 leading-relaxed'>
                                    Strengthening <b>system design fundamentals</b>, advancing
                                    <b> backend architecture expertise</b>, and building production-grade
                                    <b> full-stack applications</b> while exploring entry-level roles in <b>data engineering</b> and <b>cloud computing</b>.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT SIDE GRAPHIC */}
                    <div className="flex justify-center lg:justify-end lg:items-start items-center col-span-1 py-8 lg:py-0">
                        <TerminalGraphic />
                    </div>
                </div>
            </section>
        </div>
    );
}