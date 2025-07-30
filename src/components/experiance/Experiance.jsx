import './experiance.css'

export default function Experience() {
    return (
        <section id='experience' className="experience-section">
            <h2 className="experience-title">Experience</h2>
            <div className="experience-card">
                <div className="experience-header">
                    <h3 className="experience-role">Frontend Intern</h3>
                    <span className="experience-date">July 2025 – July 2025</span>
                </div>
                <p className="experience-company">Eyego (Remote)</p>
                <ul className="experience-details">
                    <li>Built a responsive dashboard with light/dark modes</li>
                    <li>Implemented tables with filtering, sorting, pagination using Shadcn UI and TanStack Table</li>
                    <li>Integrated authentication and database using Supabase</li>
                    <li>Visualized data using Recharts</li>
                </ul>
            </div>
        </section>
    );
}
