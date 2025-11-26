import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Video, Play } from "lucide-react"

export default function DemoPage() {
  // Replace this with your actual YouTube video ID
  const youtubeVideoId = "YOUR_VIDEO_ID_HERE"

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="secondary">Video Demonstration</Badge>
            <h1 className="text-4xl md:text-5xl font-bold">Application Demo</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch SpendWise in action with a comprehensive walkthrough of all features and functionality
            </p>
          </div>

          {/* Video Section */}
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Video className="h-6 w-6 text-emerald-600" />
                  Full Application Walkthrough
                </CardTitle>
                <CardDescription>
                  See how SpendWise helps travelers manage their budgets with ease
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted/30 rounded-lg overflow-hidden">
                  {youtubeVideoId && youtubeVideoId !== "YOUR_VIDEO_ID_HERE" ? (
                    <iframe
                      className="w-full h-full rounded-lg"
                      src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                      title="SpendWise Application Demo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-center space-y-4">
                      <Play className="h-16 w-16 text-muted-foreground mx-auto" />
                      <p className="text-muted-foreground font-semibold">[Video Demo Placeholder]</p>
                      <p className="text-sm text-muted-foreground max-w-md">
                        Replace <code className="bg-muted px-2 py-1 rounded text-xs">YOUR_VIDEO_ID_HERE</code> in 
                        the code with your actual YouTube video ID
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Demo Highlights */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Demo Highlights</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dashboard Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    See how the dashboard provides an at-a-glance view of your travel finances, 
                    including budget status, recent expenses, and spending trends.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Expense Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Watch how easy it is to log expenses, attach receipts, categorize transactions, 
                    and keep your travel budget organized.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Budget Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Learn how to create custom budgets for different categories, set spending limits, 
                    and receive alerts when approaching thresholds.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Group Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Explore Savings Circles for collaborative travel planning, shared expenses, 
                    and coordinated budget management with travel companions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>AI Chatbot Assistant</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Experience the AI-powered chatbot providing personalized financial advice, 
                    spending insights, and budget recommendations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>User Experience Flow</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Follow a complete user journey from onboarding through daily expense tracking 
                    to end-of-trip budget analysis and reporting.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
