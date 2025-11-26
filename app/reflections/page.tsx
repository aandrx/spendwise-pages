import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Trophy, AlertCircle, Rocket } from "lucide-react"

export default function ReflectionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="secondary">Project Insights</Badge>
            <h1 className="text-4xl md:text-5xl font-bold">Reflections & Learning</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Key takeaways, challenges overcome, and lessons learned throughout the SpendWise development journey
            </p>
          </div>

          {/* Project Outcomes */}
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-6 w-6 text-emerald-600" />
                  Project Outcomes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  SpendWise successfully addresses the complex challenges of travel budget management through 
                  an intuitive, feature-rich mobile application. The project demonstrates the effective integration 
                  of modern design patterns, cloud technologies, and AI capabilities to create a comprehensive 
                  financial management solution.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg">Key Achievements</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 mt-1">✓</span>
                        Implemented all core features: Dashboard, Expense Log, Budgets, Savings Circles, and AI Chatbot
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 mt-1">✓</span>
                        Designed scalable architecture using industry-standard design patterns
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 mt-1">✓</span>
                        Created responsive, accessible UI following modern UX principles
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 mt-1">✓</span>
                        Integrated real-time synchronization and cloud storage
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 mt-1">✓</span>
                        Delivered comprehensive documentation and deployment pipeline
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg">Impact</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 mt-1">✓</span>
                        Simplifies travel budget management for solo and group travelers
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 mt-1">✓</span>
                        Reduces financial stress during trips through proactive alerts
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 mt-1">✓</span>
                        Enables better financial decision-making with AI insights
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 mt-1">✓</span>
                        Facilitates transparent expense sharing in group settings
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 mt-1">✓</span>
                        Provides comprehensive financial records for post-trip analysis
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Challenges Encountered */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Challenges Encountered</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-amber-600" />
                    Real-Time Synchronization
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Challenge:</strong> Implementing real-time data synchronization across multiple 
                    devices while maintaining data consistency, especially in offline scenarios and for 
                    group expense features.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Solution:</strong> Adopted an optimistic update strategy with conflict resolution 
                    mechanisms and implemented a robust offline-first architecture using local storage with 
                    background sync capabilities.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-amber-600" />
                    Complex Expense Splitting Logic
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Challenge:</strong> Designing flexible expense splitting algorithms that handle 
                    various scenarios: equal splits, percentage-based, custom amounts, and partial participation.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Solution:</strong> Implemented the Strategy pattern to create pluggable splitting 
                    algorithms, allowing users to select or customize splitting methods based on their needs.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-amber-600" />
                    AI Integration and Accuracy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Challenge:</strong> Integrating AI capabilities for financial advice while ensuring 
                    accuracy, relevance, and privacy of user financial data.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Solution:</strong> Utilized a hybrid approach combining rule-based systems for 
                    straightforward queries with machine learning models for complex analysis, all while 
                    implementing strict data privacy measures.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-amber-600" />
                    UI/UX Consistency
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Challenge:</strong> Maintaining consistent design language and user experience 
                    across diverse features while keeping the interface intuitive for users with varying 
                    technical expertise.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Solution:</strong> Developed a comprehensive design system with reusable components, 
                    conducted extensive user testing, and iterated based on feedback to refine the user experience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Knowledge Gained */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Knowledge Gained</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-emerald-600" />
                    Technical Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Advanced mobile app development with modern frameworks</li>
                    <li>• Implementation of complex design patterns in real-world scenarios</li>
                    <li>• Cloud architecture and serverless computing</li>
                    <li>• Real-time data synchronization and conflict resolution</li>
                    <li>• AI/ML integration for financial analysis</li>
                    <li>• Responsive UI design and accessibility standards</li>
                    <li>• RESTful API design and microservices architecture</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Rocket className="h-5 w-5 text-emerald-600" />
                    Soft Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Cross-functional team collaboration and communication</li>
                    <li>• Project management and Agile methodology</li>
                    <li>• User-centered design thinking and empathy</li>
                    <li>• Problem-solving under constraints and deadlines</li>
                    <li>• Technical documentation and presentation skills</li>
                    <li>• Code review and constructive feedback practices</li>
                    <li>• Time management and prioritization</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Personal Contributions */}
          <section>
            <Card className="bg-emerald-50/50 border-emerald-200">
              <CardHeader>
                <CardTitle>My Contributions</CardTitle>
                <CardDescription>Key areas where I made significant impact on the project</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p>
                    [Add your specific contributions here. Examples might include:]
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• Led the design and implementation of the Dashboard feature</li>
                    <li>• Architected the real-time synchronization system</li>
                    <li>• Developed the AI chatbot integration and natural language processing</li>
                    <li>• Created the design system and component library</li>
                    <li>• Implemented the expense splitting algorithms</li>
                    <li>• Set up CI/CD pipeline and deployment infrastructure</li>
                    <li>• Conducted user research and usability testing</li>
                    <li>• Authored technical documentation and API specifications</li>
                  </ul>
                  <p className="mt-4">
                    Throughout this project, I grew both technically and professionally, learning to balance 
                    technical excellence with practical constraints while delivering value to end users.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </section>
    </div>
  )
}
