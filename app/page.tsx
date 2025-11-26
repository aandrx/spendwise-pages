import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wallet, Target, Users, Bot, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="mb-4">
              Travel Budget Management
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Welcome to <span className="text-emerald-600">SpendWise</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive travel budgeting application designed to simplify expense tracking, 
              budget management, and collaborative savings for solo and group travelers.
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Button asChild size="lg">
                <Link href="/ui-showcase">
                  Explore Features <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/demo">Watch Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="introduction" className="py-16 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Project Overview</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                SpendWise is an innovative mobile application that revolutionizes how travelers 
                manage their finances during trips. Whether you&apos;re traveling solo or with a group, 
                SpendWise provides the tools you need to stay on budget and make informed financial decisions.
              </p>
            </div>

            <div className="prose prose-lg max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold">Project Goals</h3>
              <p>
                The primary aim of SpendWise is to ease the process of creating and managing travel 
                itineraries and expenses for both solo and group travelers. By combining intuitive 
                design with powerful features, we&apos;ve created a solution that addresses the common 
                pain points of travel budget management.
              </p>
              
              <h3 className="text-2xl font-semibold mt-8">Key Challenges Addressed</h3>
              <ul className="space-y-2">
                <li>Complex expense splitting among group members</li>
                <li>Real-time budget tracking and alerts</li>
                <li>Collaborative savings goals</li>
                <li>Intelligent financial recommendations</li>
                <li>Multi-currency support for international travel</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Core Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Wallet className="h-10 w-10 text-emerald-600 mb-2" />
                <CardTitle>Dashboard</CardTitle>
                <CardDescription>
                  Comprehensive overview of your travel finances with real-time updates
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Target className="h-10 w-10 text-emerald-600 mb-2" />
                <CardTitle>Expense Log</CardTitle>
                <CardDescription>
                  Track every transaction with categories, receipts, and location data
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-emerald-600 mb-2" />
                <CardTitle>Budgets</CardTitle>
                <CardDescription>
                  Set and monitor budgets for different trip categories with smart alerts
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Bot className="h-10 w-10 text-emerald-600 mb-2" />
                <CardTitle>Savings Circles</CardTitle>
                <CardDescription>
                  Collaborate with travel companions on shared savings goals
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <Bot className="h-10 w-10 text-emerald-600 mb-2 mx-auto" />
                <CardTitle>AI-Powered Chatbot</CardTitle>
                <CardDescription className="text-base">
                  Get personalized financial advice, budget recommendations, and spending insights 
                  powered by artificial intelligence. Ask questions in natural language and receive 
                  actionable guidance for your travel finances.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Explore More</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Design & Architecture</CardTitle>
                <CardDescription>
                  Explore the technical architecture, design patterns, and UML diagrams that power SpendWise
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/design">View Architecture</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>UI Showcase</CardTitle>
                <CardDescription>
                  Take a visual tour through the application&apos;s interface with annotated screenshots
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/ui-showcase">View Screenshots</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Meet the Team</CardTitle>
                <CardDescription>
                  Learn about the talented individuals who brought SpendWise to life
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/team">View Team</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
