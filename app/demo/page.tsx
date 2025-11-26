import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Video, Play } from "lucide-react"

export default function DemoPage() {
  // YouTube video ID for the SpendWise demo
  const youtubeVideoId = "t1-6TW3L2g8"

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="secondary">Video Demo</Badge>
            <h1 className="text-4xl md:text-5xl font-bold">See SpendWise in Action</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A short walkthrough of how SpendWise helps you stay on top of spending, stick to budgets, 
              and save together with the people you care about.
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
                  See how SpendWise helps users manage their budgets with ease
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
                    Get a quick tour of the main dashboard: current budget status, recent activity, and the trends that
                    actually matter for your day‑to‑day decisions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Expense Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    See how fast it is to log a purchase, snap a receipt, and drop it into the right category so nothing
                    slips through the cracks.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Budget Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Watch how budgets are set up for things like food, rent, and fun money – and how SpendWise nudges you
                    before you cross the line.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Group Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Follow a Savings Circle from idea to reality: invite friends, set a goal, track who&apos;s paid what, 
                    and keep everyone on the same page without awkward money chats.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>AI Chatbot Assistant</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    See the AI assistant in action answering everyday money questions, suggesting tweaks to your budget, 
                    and highlighting habits you might want to adjust.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>User Experience Flow</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Walk through a typical SpendWise day: setting things up, logging real expenses, and checking back in
                    at the end of the week to see how you did.
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
