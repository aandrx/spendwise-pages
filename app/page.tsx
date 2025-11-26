import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wallet, Target, PieChart, Users, Bot, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-linear-to-b from-emerald-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="mb-4">
              Money, but organized
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="text-emerald-600">SpendWise</span>, your smart money manager
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Track where your money&apos;s going, set budgets that actually stick, and save together with friends
              using Savings Circles, all with a little help from AI when you need it.
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
        <div className="container mx-auto max-w-4xl space-y-12 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Project Overview</h2>
            <p className="text-lg text-muted-foreground">
              We had one goal in mind: make it easier for people to see their money at a glance,
              stick to a plan, and save up for things that actually matter. Whether you&apos;re managing your own
              budget or sharing expenses with a group, SpendWise keeps everything in one clear, calm place.
            </p>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Project Goals</h3>
              <p className="text-lg text-muted-foreground">
                Our goal with SpendWise is to turn day‑to‑day money management into something you can actually keep up with.
                That means quick logging of expenses, budgets that are easy to tweak, and a simple way to save together
                without endless spreadsheets or group chats full of receipts.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Key Challenges Addressed</h3>
              <div className="text-left inline-block">
                <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                  <li>Complex expense splitting among group members</li>
                  <li>Real-time budget tracking and alerts</li>
                  <li>Collaborative savings goals through Savings Circles</li>
                  <li>Intelligent financial recommendations powered by AI</li>
                  <li>Multi-currency support</li>
                </ul>
              </div>
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
                  Comprehensive overview of your finances with real-time updates
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
                <PieChart className="h-10 w-10 text-emerald-600 mb-2" />
                <CardTitle>Budgets</CardTitle>
                <CardDescription>
                  Set and monitor budgets for different categories with smart alerts
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-emerald-600 mb-2" />
                <CardTitle>Savings Circles</CardTitle>
                <CardDescription>
                  Collaborate with group members on shared savings goals
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
                  actionable guidance for your finances.
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
