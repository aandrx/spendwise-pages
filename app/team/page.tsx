import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, Award } from "lucide-react";
import Image from "next/image";

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Steven Mai",
      role: "Product & Backend Lead",
      bio: "Keeps SpendWise pointed in the right direction and makes sure the APIs behave. Loves tidy schemas and dashboards that load instantly.",
      contributions: [
        "Product direction",
        "Backend architecture",
        "API design",
        "Code reviews",
        "Design curation",
      ],
      avatar: "/images/team/steven.jpg",
      initials: "SM",
      github: "https://github.com/StevenQMai",
      linkedin: "https://www.linkedin.com/in/steven-mai7/",
      email: "smai34@gatech.edu",
    },
    {
      name: "Andrew Liu",
      role: "Frontend & UX Engineer",
      bio: "Designed the interface, built the component library, and fought for every pixel of breathing room.",
      contributions: [
        "UI system",
        "Accessibility polish",
        "Responsive layouts",
        "Design specs",
        "AI Integration",
      ],
      avatar: "/images/team/andrew.jpg",
      initials: "AL",
      github: "https://github.com/aandrx",
      linkedin: "https://www.linkedin.com/in/andrew-liu7/",
      email: "aliu458@gatech.edu",
    },
    {
      name: "Shriyan Somalinga",
      role: "Full Stack Engineer",
      bio: "Bridged the frontend and backend, making sure budgets, expenses, and Savings Circles actually talk to each other.",
      contributions: [
        "Feature integration",
        "Savings Circles backend",
        "Testing",
        "Documentation",
      ],
      avatar: "/images/team/shriyan.jpg",
      initials: "SS",
      github: "#",
      linkedin: "#",
      email: "shriyan@example.com",
    },
    {
      name: "Sishnukeshav Balamurali",
      role: "Full Stack Engineer",
      bio: "Wrote and curated crucial documentation and maintained frontend aspects of the app for user experience.",
      contributions: ["Insight generation", "Privacy guardrails"],
      avatar: "/images/team/sishnu.jpg",
      initials: "SB",
      github: "#",
      linkedin: "#",
      email: "sishnu@example.com",
    },
    {
      name: "Rohan Banerjee",
      role: "Full Stack Engineer",
      bio: "Took every feature for a spin on different devices and kept the mobile experience snappy.",
      contributions: ["Manual QA passes", "Bug triage", "Release notes"],
      avatar: "/images/team/rohan.jpg",
      initials: "RB",
      github: "#",
      linkedin: "#",
      email: "rohan@example.com",
    },
    {
      name: "Rishabh Raman",
      role: "Full Stack Engineer",
      bio: "Handled documentation, diagrams, and performance tests so SpendWise feels fast and reliable.",
      contributions: ["Performance profiling", "Monitoring setup"],
      avatar: "/images/team/rishabh.jpg",
      initials: "RR",
      github: "#",
      linkedin: "#",
      email: "rishabh@example.com",
    },
  ];

  const websiteDeploymentTeam = [
    {
      name: "Steven Mai",
      role: "Backend & Infrastructure Lead",
      contribution:
        "Optimized the Next.js build process for static export, configured basePath and asset handling for GitHub Pages deployment, ensured proper routing and image optimization, and set up the production build pipeline for seamless hosting.",
    },
    {
      name: "Andrew Liu",
      role: "Frontend & Build Optimization",
      contribution:
        "Architected the CI/CD deployment pipeline, configured GitHub Actions workflows for automated builds and deployments, set up branch protection and deployment triggers, and ensured seamless integration with GitHub Pages including custom domain configuration.",
    },
    {
      name: "Shriyan Somalinga",
      role: "Full Stack Integration & Testing",
      contribution:
        "Integrated frontend and backend components for the showcase website, ensuring budgets, expenses, and features communicate properly in the deployed environment.",
    },
    {
      name: "Sishnukeshav Balamurali",
      role: "Integration & Documentation",
      contribution:
        "Ensured features and insights generation work seamlessly in production, with proper privacy guardrails for the deployed site.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="secondary">Our Team</Badge>
            <h1 className="text-4xl md:text-5xl font-bold">Meet the Team</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The team of students who built SpendWise!
            </p>
          </div>

          {/* Team Members */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Core Development Team</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback className="bg-emerald-100 text-emerald-700 text-lg font-semibold">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-1">
                          {member.name}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {member.role}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {member.bio}
                    </p>

                    <div>
                      <h4 className="font-semibold text-sm mb-2">
                        Key Contributions:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {member.contributions.map(
                          (contribution, contribIndex) => (
                            <Badge
                              key={contribIndex}
                              variant="secondary"
                              className="text-xs"
                            >
                              {contribution}
                            </Badge>
                          ),
                        )}
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
                  Special acknowledgment to team members who were instrumental
                  in deploying this showcase website
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {websiteDeploymentTeam.map((member, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-white rounded-lg"
                    >
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-emerald-600 text-white">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{member.name}</h3>
                        <p className="text-sm text-muted-foreground mb-1">
                          {member.role}
                        </p>
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
            <h2 className="text-3xl font-bold mb-8 text-center">
              Project Statistics
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">
                    6
                  </div>
                  <p className="text-sm text-muted-foreground">Team Members</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">
                    3
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Months Development
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">
                    5
                  </div>
                  <p className="text-sm text-muted-foreground">Core Features</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">
                    100+
                  </div>
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
                  We would like to express our thanks to everyone who
                  contributed to making SpendWise a reality. Special thanks to
                  our instructor, mentor, and other TA's who provided invaluable
                  feedback throughout the development process.
                </p>
                <p>
                  This project was built with support from Georgia Institute of
                  Technology, utilizing tried and true technologies and
                  frameworks including Java, Firebase, Android Studio and MVVM
                  architecture.
                </p>
                <p>
                  The collaborative effort of our diverse team members, each
                  bringing unique skills and perspectives, was vital in creating
                  a comprehensive and user-friendly application.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </section>
    </div>
  );
}
