const skills = [
    { name: "JavaScript", icon: "🟨" },
    { name: "TypeScript", icon: "🔷" },
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "⬛" },
    { name: "Node.js", icon: "🟩" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Supabase", icon: "🧪" },
    { name: "Tailwind CSS", icon: "🌬️" },
    { name: "Git", icon: "🔧" },
];
import './skills.css'

export default function Skills() {
    return (
        <section id="skills" className="skills-section">
            <h2 className="skills-title">Skills</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
