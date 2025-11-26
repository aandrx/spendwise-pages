import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Layout } from "lucide-react"
import Image from "next/image"

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

          {/* Screenshots Section */}
          <section className="space-y-12">
            <h2 className="text-3xl font-bold">Key Screens</h2>
            
            {screenshots.map((screen, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Screenshot */}
                  <div className="relative min-h-[400px] bg-muted/30 rounded-lg overflow-hidden">
                    <Image
                      src={screen.imagePath}
                      alt={`${screen.name} screenshot`}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
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
        </div>
      </section>
    </div>
  )
}
