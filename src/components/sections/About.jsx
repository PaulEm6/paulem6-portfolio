import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const MachineLearningSkills = ["Sci-Kit Learn", "TensorFlow","PyTorch","Microsoft Power BI","Tableau"]
    const SoftwareEngineeringSkills = ["Python", "C","Java","VS Code","VHDL"]
    
    return(
    <section id="about" className = "min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className = "max-w-5xl mx-auto px-4">

                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r  from-blue-500 to-cyan-400 bg-clip-text text-transparent
                text-center">
                    About Me
                </h2>

                <div className = "rounded-xl p-8 rounded-xl border border-white/10 hover:-translate-y-1 transition-all hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,30,246,0.2)] transition">

                    <p className = "text-gray-300 mb-6">
                        Curious developer with professional experience in leveraging AI and software engineering to solve practical problems.
                    </p>

                    <div className = "grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Machine Learning Card */}
                        <div className = "rounded-xl p-6">
                            <h3 className = "text-xl font-bold mb-4">
                                Machine Learning
                            </h3>
                            <div className = "flex flex-wrap gap-2">
                                {MachineLearningSkills.map((tech, key) => (
                                    
                                    <span key = {key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,30,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Software Development Card */}
                        <div className = "rounded-xl p-6">
                            <h3 className = "text-xl font-bold mb-4">
                                Software Development
                            </h3>

                            <div className = "flex flex-wrap gap-2">
                                {SoftwareEngineeringSkills.map((tech, key) => (
                                    
                                    <span key = {key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,30,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    
                    {/* Education */}
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,30,246,0.2)] transition">

                        <h3 className = "text-xl font-bold mb-4">📝 Education </h3>
                                
                        {/* Education 1 */}
                        <div className="mb-4">
                            <div className="font-semibold"> MSc in Computer Science </div>
                            <div className="font-normal text-sm text-gray-400"> Universite de Quebec a Chicoutimi - April 2025 </div>
                        </div>
                                
                        {/* Education 2 */}
                        <div className="mb-4">
                            <div className="font-semibold"> MSc in Computer Engineering </div>
                            <div className="font-normal text-sm text-gray-400"> Grenoble INP ESISAR - April 2025 </div>   
                         </div>            
                                     
                    </div>
                    
                    {/* Work Experience */}
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,30,246,0.2)] transition">
                        
                        <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>

                        {/* Job 1 */}
                        <div className="mb-4">
                            <div className="font-semibold"> Intern AI Researcher at Hydro-Québec </div>
                            <div className="font-normal text-sm text-gray-400"> April 2024 – March 2025 </div>
                            <p>Developed an automated metadata classification solution using TensorFlow, Python, and Power BI.</p>
                        </div>

                        {/* Job 2 */}
                        <div className="mb-4">
                            <div className="font-semibold"> Intern Software Developer at NSE </div>
                            <div className="font-normal text-sm text-gray-400"> January 2023 – June 2023 </div>
                            <p>Developed a software tool to automate testing of industrial measurement instruments using the SCPI protocol, TestStand, and Python.</p>
                        </div>
                    
                    </div>

                </div>
                
            </div>
        </RevealOnScroll>
    </section> );

}