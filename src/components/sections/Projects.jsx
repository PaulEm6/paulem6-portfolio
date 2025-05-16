import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    return(
        <section
            id = "projects"
            className = "min-h-screen flex items-center justify-center py-20">

                <RevealOnScroll>
                    
                <div className="max-w-5xl mx-auto px-4">

                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r  from-blue-500 to-cyan-400 bg-clip-text text-transparent
                    text-center">
                        Featured Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        {/*Tumor Classificatoin*/}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,30,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2"> Classification of Tumors </h3>

                            <p className="text-gray-400 mb-4">
                                This project focuses on determining whether a brain MRI contains a tumor. 
                                We use TensorFlow to train machine learning models and apply data augmentation to improve performance.
                            </p>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["TensorFlow","SciKit Learn","PIL","Matplotlib"].map((tech, key) => (
                                        
                                        <span key = {key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                        hover:shadow-[0_2px_8px_rgba(59,30,246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/PaulEm6/Tumor-Classification" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    Github page
                                </a>
                            </div>

                        </div>

                        {/*Movie Revenue Estimation*/}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,30,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2"> Movie Revenue Estimation </h3>

                            <p className="text-gray-400 mb-4">
                                Created a model to predict movie revenue based on features such as release date, production company, production country, and film budget.
                            </p>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["TensorFlow","SciKit Learn","Pandas"].map((tech, key) => (
                                        
                                        <span key = {key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                        hover:shadow-[0_2px_8px_rgba(59,30,246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/PaulEm6/Movie-Revenue-Estimation" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    Github page
                                </a>
                            </div>

                        </div>

                        {/*Euro Data Exploration*/}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,30,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2"> Euro Data Exploration </h3>

                            <p className="text-gray-400 mb-4">
                                Analyzed historical data from past European Championships to uncover trends, patterns, and interesting statistics.
                            </p>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Tableau Desktop","SciKit Learn","Matplotlib"].map((tech, key) => (
                                        
                                        <span key = {key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                        hover:shadow-[0_2px_8px_rgba(59,30,246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/PaulEm6/Euro-Data-Exploration_Seminaire-IA" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    Github page
                                </a>
                            </div>

                        </div>

                        {/*Sports Results Prediction*/}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,30,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2"> Sports Results Prediction </h3>

                            <p className="text-gray-400 mb-4">
                            Reviewed research papers on sports result prediction in team sports such as football, basketball, and volleyball, and applied the proposed techniques to predict outcomes.
                            </p>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["TensorFlow","SciKit Learn","PIL","Matplotlib"].map((tech, key) => (
                                        
                                        <span key = {key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                        hover:shadow-[0_2px_8px_rgba(59,30,246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/IIanonymeII/8INF974_Atelier_pratique_AI_2" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    Github page
                                </a>
                            </div>

                        </div>
                        
                    </div>
                
                </div>

            </RevealOnScroll> 

        </section>
    )
}