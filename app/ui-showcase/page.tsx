import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Layout } from "lucide-react"
import { getAssetPath } from "@/lib/utils"

export default function UIShowcasePage() {
  const screenshots = [
    {
      name: "Dashboard",
      description: "Your home base for money: balances, recent activity, and how your month is shaping up at a glance.",
      features: ["Budget overview cards", "Spending trend charts", "Quick actions", "Recent transactions list"],
      imagePath: "/images/screenshots/Dashboard.png"
    },
    {
      name: "Expense Log",
      description: "Every coffee, bill, and impulse buy in one tidy list, so you don't have to scroll through bank statements.",
      features: ["Searchable transaction list", "Category filters", "Receipt photo upload", "Easy edits"],
      imagePath: "/images/screenshots/Expenses.png"
    },
    {
      name: "Budgets",
      description: "Simple budgets for the stuff that matters: rent, groceries, nights out, and that \"just in case\" fund.",
      features: ["Guided budget setup", "Category-based limits", "Progress tracking", "Friendly alerts"],
      imagePath: "/images/screenshots/Budgets.png"
    },
    {
      name: "Savings Circles",
      description: "Save up together for trips, gifts, or big purchases without endless spreadsheets or awkward reminders.",
      features: ["Create shared goals", "Track who paid what", "Member contributions view", "Activity timeline"],
      imagePath: "/images/screenshots/SavingsCircle.png"
    },
    {
      name: "AI Chatbot",
      description: "A friendly assistant you can ask, \"Can I afford this?\" without judgment or jargon.",
      features: ["Natural language chat", "Spending breakdowns", "Budget suggestions", "Practical money tips"],
      imagePath: "/images/screenshots/Chatbot.png"
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
              A closer look at the key screens in SpendWise and how they come together to keep your money story clear.
            </p>
          </div>

          {/* Screenshots Section */}
          <section className="space-y-12">
            <h2 className="text-3xl font-bold">Key Screens</h2>
            
            {screenshots.map((screen, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Screenshot */}
                  <div className="relative h-[600px] w-full bg-muted/30 rounded-lg overflow-hidden flex items-center justify-center">
                    <img
                      src={getAssetPath(screen.imagePath)}
                      alt={`${screen.name} screenshot`}
                      className="max-w-full max-h-full object-contain p-4"
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
