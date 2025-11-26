import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin, Mail, Award } from "lucide-react"
import Image from "next/image"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Alex Kim",
      role: "Project Lead / Backend Developer",
      bio: "Kept the project on track and made sure the data layer didn&apos;t fall apart. Enjoys clean APIs, clear schemas, and commit messages that actually make sense.",
      contributions: ["Project management", "Backend architecture", "Database design", "API development"],
      avatar: "/images/team/member1.jpg",
      initials: "TM",
      github: "https://github.com/username1",
      linkedin: "https://linkedin.com/in/username1",
      email: "member1@example.com"
    },
    {
      name: "Jordan Lee",
      role: "Frontend Developer / UI/UX Designer",
      bio: "Designed and built the interface you see here, with an unhealthy attention to spacing, contrast, and making forms feel less painful.",
      contributions: ["UI/UX design", "Frontend development", "Component library", "User testing"],
      avatar: "/images/team/member2.jpg",
      initials: "TM",
      github: "https://github.com/username2",
      linkedin: "https://linkedin.com/in/username2",
      email: "member2@example.com"
    },
    {
      name: "Sam Patel",
      role: "Full Stack Developer",
      bio: "Jumped between frontend and backend to glue everything together. If something talks to something else, Sam probably touched it.",
      contributions: ["Feature implementation", "Integration testing", "Bug fixes", "Documentation"],
      avatar: "/images/team/member3.jpg",
      initials: "TM",
      github: "https://github.com/username3",
      linkedin: "https://linkedin.com/in/username3",
      email: "member3@example.com"
    },
    {
      name: "Riley Chen",
      role: "AI/ML Engineer",
      bio: "Built the brains behind the AI assistant and spent a lot of time making sure the model talked about money in a helpful, not scary, way.",
      contributions: ["AI chatbot", "ML models", "Data analysis", "Natural language processing"],
      avatar: "/images/team/member4.jpg",
      initials: "TM",
      github: "https://github.com/username4",
      linkedin: "https://linkedin.com/in/username4",
      email: "member4@example.com"
    }
  ]

  const websiteDeploymentTeam = [
    {
      name: "Taylor Rivers",
      role: "DevOps / Website Deployment",
      contribution: "Set up the GitHub Pages pipeline and wrestled with configs so the site actually shows up at the right URL."
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="secondary">Our Team</Badge>
            <h1 className="text-4xl md:text-5xl font-bold">Meet the Team</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The talented individuals who brought SpendWise to life
            </p>
          </div>

          {/* Team Members */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Core Development Team</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback className="bg-emerald-100 text-emerald-700 text-lg font-semibold">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-1">{member.name}</CardTitle>
                        <CardDescription className="text-sm">{member.role}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                    
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Key Contributions:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.contributions.map((contribution, contribIndex) => (
                          <Badge key={contribIndex} variant="secondary" className="text-xs">
                            {contribution}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Email"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Website Deployment Team */}
          <section className="mb-16">
            <Card className="bg-emerald-50/50 border-emerald-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-emerald-600" />
                  Website Deployment Team
                </CardTitle>
                <CardDescription>
                  Special acknowledgment to team members who were instrumental in deploying this showcase website
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {websiteDeploymentTeam.map((member, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-emerald-600 text-white">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{member.name}</h3>
                        <p className="text-sm text-muted-foreground mb-1">{member.role}</p>
                        <p className="text-sm">{member.contribution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Team Stats */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Project Statistics</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">4+</div>
                  <p className="text-sm text-muted-foreground">Team Members</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">3</div>
                  <p className="text-sm text-muted-foreground">Months Development</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">5</div>
                  <p className="text-sm text-muted-foreground">Core Features</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">1000+</div>
                  <p className="text-sm text-muted-foreground">Commits</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Acknowledgments */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle>Acknowledgments</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <p>
                  We would like to express our gratitude to everyone who contributed to making SpendWise 
                  a reality. Special thanks to our advisors, mentors, and early testers who provided 
                  invaluable feedback throughout the development process.
                </p>
                <p>
                  This project was built with support from [University/Organization Name], utilizing 
                  modern technologies and frameworks including React Native, Node.js, PostgreSQL, and AWS.
                </p>
                <p>
                  The collaborative effort of our diverse team members, each bringing unique skills and 
                  perspectives, was instrumental in creating a comprehensive and user-friendly application.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </section>
    </div>
  )
}
