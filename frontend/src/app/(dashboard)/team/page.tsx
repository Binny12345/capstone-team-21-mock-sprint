import type { Metadata } from 'next'
import { getServerSession } from '@/actions/auth.actions'

export const metadata: Metadata = {
  title: 'Team',
}

type Member = {
  name: string
  role: string
  blurb: string
  photo: string
}

// Values to store user details
const team: Member[] = [
  { name: 'Khoi Nguyen', role: 'Project Manager', blurb: 'PM for Team 1. Got a passion for Sports and Travelling.', photo: "../../images/Khoi-Nguyen.jpeg" },
  { name: 'Trong (John) Nguyen', role: 'Business Analyst', blurb: 'My name is John, I am in the final semester of my Bachelor\'s of Information Technology. I am the business analyst for this project', photo: "../../images/Trong-Nguyen.jpeg" },
  { name: 'James Wood', role: 'UX', blurb: 'A 3rd year computer science student with a strong interest in cybersecurity. As the teams UX designer, I will translate client needs into clean, functional designs, and document key design characteristics', photo: "../../images/James-Wood.jpeg" },
  { name: 'Tyson Jayilian', role: 'Developer', blurb: 'I’m studying a Bachelor of Information Technology at RMIT and have an interest in cybersecurity. My role in the team is Developer, where I work on implementing features and contributing to development.', photo: "../../images/Tyson-Jayilian.jpeg" },
  { name: 'Binyam Sisay', role: 'Developer', blurb: 'Developer for Team 1. Passionate for sports and anime, with an interest into software development. As this team\'s developer, I aim to achieve the best in all aspects.', photo: "../../images/Binyam-Sisay.jpeg" },
]

export default async function TeamPage() {
  const session = await getServerSession()

  return (
    <div className="min-h-screen bg-[#0A0A0A] py-12 pr-6 text-zinc-200 sm:px-10 lg:px-20">
      <h1 className="font-serif text-5xl font-normal tracking-tight text-zinc-100">Team Page</h1>

      <div className="mt-10 max-w-3xl">
        {team.map((member, index) => {
          const number = String(index + 1).padStart(2, '0')
          return (
            <div key={index} className="border-zinc border-t py-8">
              <div className="flex gap-8">
                <div className="flex h-30 w-24 flex-shrink-0 flex-col items-center justify-center bg-zinc-900/60">
                  <img src={member.photo} alt={member.name} className="h-38 w-24 object-cover"/>
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3">
                    <h2 className="font-serif text-2xl font-normal text-zinc-100">{member.name}</h2>
                    <span className="font-mono tracking-widest text-zinc-600">{number}</span>
                  </div>
                  <p className="mt-1 text-xs font-medium tracking-widest text-amber-300/90 uppercase">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm text-zinc-400">{member.blurb}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
