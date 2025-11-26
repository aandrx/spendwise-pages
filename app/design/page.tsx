import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Layers, FileCode, GitBranch, Database } from "lucide-react"

export default function DesignPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="secondary">Technical Documentation</Badge>
            <h1 className="text-4xl md:text-5xl font-bold">Design & Architecture</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore the architectural design and implementation patterns that power SpendWise
            </p>
          </div>

          {/* Architecture Overview */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">System Architecture</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-6">
                  SpendWise follows a modern mobile application architecture with clear separation of concerns, 
                  scalability, and maintainability as core principles. The system is built using industry-standard 
                  design patterns and best practices.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Layers className="h-5 w-5 text-emerald-600" />
                      Frontend Architecture
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      <li>• MVVM (Model-View-ViewModel) pattern</li>
                      <li>• Component-based UI architecture</li>
                      <li>• State management with modern frameworks</li>
                      <li>• Responsive and adaptive design</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Database className="h-5 w-5 text-emerald-600" />
                      Backend Architecture
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      <li>• RESTful API design</li>
                      <li>• Microservices architecture</li>
                      <li>• Cloud-based data storage</li>
                      <li>• Real-time synchronization</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Design Patterns */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Design Patterns</h2>
            <Tabs defaultValue="creational" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="creational">Creational</TabsTrigger>
                <TabsTrigger value="structural">Structural</TabsTrigger>
                <TabsTrigger value="behavioral">Behavioral</TabsTrigger>
              </TabsList>
              
              <TabsContent value="creational" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Singleton Pattern</CardTitle>
                    <CardDescription>
                      Used for managing application-wide instances like database connections and configuration managers
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Ensures only one instance of critical services exists throughout the application lifecycle, 
                      providing a global point of access to resources like the authentication manager and API client.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Factory Pattern</CardTitle>
                    <CardDescription>
                      Used for creating different types of expense categories and budget templates
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Provides an interface for creating objects without specifying their exact classes, allowing 
                      flexible creation of various expense types and budget configurations.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="structural" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Adapter Pattern</CardTitle>
                    <CardDescription>
                      Integrates third-party payment APIs and currency conversion services
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Allows incompatible interfaces to work together, enabling seamless integration with external 
                      services while maintaining a consistent internal API.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Repository Pattern</CardTitle>
                    <CardDescription>
                      Abstracts data access layer for expenses, budgets, and user data
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Provides a collection-like interface for accessing domain objects, decoupling business logic 
                      from data access implementation details.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="behavioral" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Observer Pattern</CardTitle>
                    <CardDescription>
                      Implements real-time updates for budget alerts and group expense notifications
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Defines a subscription mechanism to notify multiple objects about events in observed subjects, 
                      enabling reactive UI updates when data changes.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Strategy Pattern</CardTitle>
                    <CardDescription>
                      Handles different expense splitting algorithms for group budgets
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Defines a family of algorithms (equal split, percentage-based, custom allocation) and makes 
                      them interchangeable, allowing runtime selection of splitting strategies.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </section>

          {/* UML Diagrams */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">UML Diagrams</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileCode className="h-5 w-5 text-emerald-600" />
                    Class Diagram
                  </CardTitle>
                  <CardDescription>
                    Core classes and their relationships in the SpendWise domain model
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/30 rounded-lg p-8 flex items-center justify-center min-h-[400px]">
                    <div className="text-center space-y-4">
                      <FileCode className="h-16 w-16 text-muted-foreground mx-auto" />
                      <p className="text-muted-foreground">
                        [Placeholder for Class Diagram]
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Add your class diagram image to: <code className="text-xs bg-muted px-2 py-1 rounded">public/images/diagrams/class-diagram.png</code>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GitBranch className="h-5 w-5 text-emerald-600" />
                    Sequence Diagram
                  </CardTitle>
                  <CardDescription>
                    Expense creation and budget update interaction flow
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/30 rounded-lg p-8 flex items-center justify-center min-h-[400px]">
                    <div className="text-center space-y-4">
                      <GitBranch className="h-16 w-16 text-muted-foreground mx-auto" />
                      <p className="text-muted-foreground">
                        [Placeholder for Sequence Diagram]
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Add your sequence diagram to: <code className="text-xs bg-muted px-2 py-1 rounded">public/images/diagrams/sequence-diagram.png</code>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Layers className="h-5 w-5 text-emerald-600" />
                    Architecture Diagram
                  </CardTitle>
                  <CardDescription>
                    High-level system architecture and component interactions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/30 rounded-lg p-8 flex items-center justify-center min-h-[400px]">
                    <div className="text-center space-y-4">
                      <Layers className="h-16 w-16 text-muted-foreground mx-auto" />
                      <p className="text-muted-foreground">
                        [Placeholder for Architecture Diagram]
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Add your architecture diagram to: <code className="text-xs bg-muted px-2 py-1 rounded">public/images/diagrams/architecture-diagram.png</code>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Technology Stack */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Technology Stack</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Frontend</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Badge variant="outline">React Native / Flutter</Badge>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="outline">TypeScript</Badge>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="outline">Redux / MobX</Badge>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Backend</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Badge variant="outline">Node.js / Python</Badge>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="outline">Express / FastAPI</Badge>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="outline">REST API</Badge>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Database & Cloud</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Badge variant="outline">PostgreSQL / MongoDB</Badge>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="outline">Firebase / AWS</Badge>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="outline">Redis Cache</Badge>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
