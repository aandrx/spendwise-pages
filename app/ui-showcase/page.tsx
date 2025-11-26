import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Palette, Layout } from "lucide-react"

export default function UIShowcasePage() {
  const screenshots = [
    {
      name: "Dashboard",
      description: "The main hub for viewing financial overview, recent transactions, and quick stats. Features real-time budget tracking with visual progress indicators and spending trends.",
      features: ["Budget overview cards", "Expense summary charts", "Quick action buttons", "Recent transactions list"],
      imagePath: "/images/screenshots/dashboard.png"
    },
    {
      name: "Expense Log",
      description: "Comprehensive transaction history with filtering, categorization, and receipt attachment capabilities. Allows users to track every penny spent during their travels.",
      features: ["Searchable transaction list", "Category filters", "Receipt photo upload", "Edit/delete functionality"],
      imagePath: "/images/screenshots/expense-log.png"
    },
    {
      name: "Budgets",
      description: "Create and monitor budgets for different trip categories with smart alerts and spending insights. Set limits for accommodation, food, activities, and more.",
      features: ["Budget creation wizard", "Category-based limits", "Progress tracking", "Alert notifications"],
      imagePath: "/images/screenshots/budgets.png"
    },
    {
      name: "Savings Circles",
      description: "Collaborative savings feature for group travel. Create shared savings goals, track contributions, and coordinate finances with travel companions.",
      features: ["Group creation", "Goal tracking", "Member contributions", "Activity timeline"],
      imagePath: "/images/screenshots/savings-circles.png"
    },
    {
      name: "AI Chatbot",
      description: "Intelligent assistant providing personalized financial advice, budget recommendations, and spending insights. Ask questions in natural language and get actionable guidance.",
      features: ["Natural language interface", "Spending analysis", "Budget suggestions", "Travel tips"],
      imagePath: "/images/screenshots/ai-chatbot.png"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="secondary">User Interface</Badge>
            <h1 className="text-4xl md:text-5xl font-bold">UI Showcase</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Take a visual tour through SpendWise&apos;s intuitive interface with annotated screenshots
            </p>
          </div>

          {/* UI/UX Philosophy */}
          <section className="mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-6 w-6 text-emerald-600" />
                  Design Philosophy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <h3 className="font-semibold">Consistency</h3>
                    <p className="text-sm text-muted-foreground">
                      Unified design language across all screens with consistent color schemes, typography, and component styling
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">Accessibility</h3>
                    <p className="text-sm text-muted-foreground">
                      WCAG 2.1 compliant with proper contrast ratios, scalable fonts, and screen reader support
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">Intuitive Navigation</h3>
                    <p className="text-sm text-muted-foreground">
                      Clear information hierarchy with familiar navigation patterns and minimal learning curve
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Screenshots Section */}
          <section className="space-y-12">
            <h2 className="text-3xl font-bold">Key Screens</h2>
            
            {screenshots.map((screen, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Screenshot Placeholder */}
                  <div className="bg-muted/30 flex items-center justify-center min-h-[400px] p-8">
                    <div className="text-center space-y-4">
                      <Smartphone className="h-16 w-16 text-muted-foreground mx-auto" />
                      <p className="text-muted-foreground font-semibold">[{screen.name} Screenshot]</p>
                      <p className="text-xs text-muted-foreground">
                        Add screenshot to: <code className="bg-muted px-2 py-1 rounded">{screen.imagePath}</code>
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="p-6 flex flex-col justify-center">
                    <Badge className="w-fit mb-4">{screen.name}</Badge>
                    <h3 className="text-2xl font-bold mb-4">{screen.name}</h3>
                    <p className="text-muted-foreground mb-6">
                      {screen.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold flex items-center gap-2">
                        <Layout className="h-4 w-4" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {screen.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-emerald-600 mt-1">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </section>

          {/* Design System */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold mb-6">Design System</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Color Palette</CardTitle>
                  <CardDescription>Carefully chosen colors for optimal readability and visual appeal</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-5 gap-4">
                    <div className="space-y-2">
                      <div className="h-16 bg-emerald-600 rounded"></div>
                      <p className="text-xs text-center">Primary</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 bg-emerald-100 rounded"></div>
                      <p className="text-xs text-center">Light</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 bg-gray-900 rounded"></div>
                      <p className="text-xs text-center">Dark</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 bg-gray-100 rounded"></div>
                      <p className="text-xs text-center">Background</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 bg-red-500 rounded"></div>
                      <p className="text-xs text-center">Accent</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Typography</CardTitle>
                  <CardDescription>Clear hierarchy with readable font sizes and weights</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-2xl font-bold">Heading 1</p>
                    <p className="text-xs text-muted-foreground">24px / Bold</p>
                  </div>
                  <div>
                    <p className="text-xl font-semibold">Heading 2</p>
                    <p className="text-xs text-muted-foreground">20px / Semibold</p>
                  </div>
                  <div>
                    <p className="text-base">Body Text</p>
                    <p className="text-xs text-muted-foreground">16px / Regular</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Caption Text</p>
                    <p className="text-xs text-muted-foreground">14px / Regular</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
