import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarDays, BookOpen, Users, Handshake } from "lucide-react";

export default async function HomePage() {
  return (
    <>
      {/* Hero Section */}

      <section
        className="relative w-full h-[700px] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage: 'url("/christ-chapel.jpg?height=600&width=1920")',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-white space-y-4 px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Welcome to Christ Chapel Church
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            A place where faith grows, hope is renewed, and love connects us
            all. Join our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about">
              <Button
                size="lg"
                variant="secondary"
                className="text-primary hover:bg-gray-100 h-12"
              >
                Learn More
              </Button>
            </Link>
            <Link href="/sermons">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/20 bg-transparent h-12 cursor-pointer"
              >
                Watch Sermons
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 md:py-24 lg:py-32 bg-background lg:px-24">
        <div className=" px-4 md:px-10 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Our Mission & Values
            </h2>
            <p className="text-muted-foreground max-w-prose">
              In alignment with the vision of RCCG Worldwide to pursue mission
              work vigorously both locally and globally. RCCGBC Canada, under
              the leadership of Pastor Bayo Adediran, then the Zonal Coordinator
              of BC1(RCCG Grace Chapel) Vancouver and Pastor Victor Folorunsho
              (RCCG Faith Chapel) Prince George initiated the planting of a new
              parish in Kelowna BC.
            </p>
            <Link href="/about">
              <Button variant="link" className="px-0">
                Read Our Full Story &rarr;
              </Button>
            </Link>
          </div>
          <Image
            src="/chapel-interior.jpg?height=400&width=600"
            width={600}
            height={400}
            alt="Church interior"
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>
      </section>

      {/* Services & Events Section */}
      <section className="py-12 md:py-24 lg:py-32 bg-muted lg:px-24">
        <div className="px-4 md:px-10  text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Join Us for Worship & Events
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer various services and events throughout the week designed to
            help you connect with God and others.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Card>
              <CardHeader>
                <CalendarDays className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Sunday Service</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Join us every Sunday at 10:00 AM for inspiring worship and a
                  powerful message.
                </CardDescription>
                <p className="mt-4 text-sm font-medium">10:00 AM - 11:30 AM</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <BookOpen className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Bible Study</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Deepen your understanding of the scriptures in our weekly
                  Bible study groups.
                </CardDescription>
                <p className="mt-4 text-sm font-medium">
                  Wednesdays at 7:00 PM
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Youth Group</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Engaging activities and discussions for our youth every Friday
                  evening.
                </CardDescription>
                <p className="mt-4 text-sm font-medium">Fridays at 6:30 PM</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Handshake className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Community Outreach</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Participate in our initiatives to serve and support our local
                  community.
                </CardDescription>
                <p className="mt-4 text-sm font-medium">
                  Monthly events - check calendar
                </p>
              </CardContent>
            </Card>
          </div>

          <Link href="/events">
            <Button className="h-12">View All Events</Button>
          </Link>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 md:py-24 lg:py-32 lg:px-24 bg-primary text-primary-foreground">
        <div className="px-4 md:px-10 text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Ready to Connect?
          </h2>
          <p className="max-w-2xl mx-auto text-lg">
            Whether you're new to faith or looking for a church home, we invite
            you to connect with us.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="text-primary hover:bg-gray-100 h-12"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
