import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users, Lightbulb, HeartHandshake } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="py-12 md:py-24 lg:py-32 lg:px-24 bg-background animate-fade-in">
      <div className=" px-4 md:px-10">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            About Christ Chapel Parish
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our story, our beliefs, and the heart behind our community.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
            <p className="text-muted-foreground">
              Christ Chapel Parish began with a small group of believers in
              19XX, united by a shared vision to create a welcoming space for
              worship and spiritual growth. Over the years, we have grown into a
              vibrant community, committed to serving God and our neighbors. Our
              journey has been one of faith, perseverance, and unwavering
              dedication to the teachings of Christ.
            </p>
            <p className="text-muted-foreground">
              From humble beginnings in a rented hall, we now stand in our
              beautiful church building, a testament to God's grace and the
              generosity of our congregation. We continue to build on this
              legacy, always looking for new ways to impact lives and spread the
              message of hope.
            </p>
          </div>
          <Image
            src="/ext.jpg"
            width={600}
            height={400}
            alt="Church building exterior"
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>

        {/* Our Beliefs Section */}
        <div className="space-y-8 mb-20">
          <h2 className="text-3xl text-center font-bold tracking-tight">
            What We Believe
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Lightbulb className="w-8 h-8 text-primary mb-2" />
                <CardTitle>The Bible</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We believe the Bible is the inspired, infallible, and
                  authoritative Word of God, guiding our faith and life.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="w-8 h-8 text-primary mb-2" />
                <CardTitle>God & Trinity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We believe in one God, eternally existing in three persons:
                  Father, Son (Jesus Christ), and Holy Spirit.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <HeartHandshake className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Salvation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Salvation is by grace through faith in Jesus Christ, who died
                  for our sins and rose again.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Leadership Section */}
        <div className="space-y-8">
          <h2 className="text-3xl text-center font-bold tracking-tight">
            Our Leadership Team
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Card className="text-center">
              <CardContent className="flex flex-col items-center p-6">
                <Image
                  src="/face.jpg?height=150&width=150"
                  width={150}
                  height={150}
                  alt="Pastor John Doe"
                  className="rounded-full object-cover mb-4"
                />
                <CardTitle className="text-xl">Pastor John Doe</CardTitle>
                <CardDescription>Lead Pastor</CardDescription>
                <p className="text-sm text-muted-foreground mt-2">
                  Pastor John has been leading Grace Community Church since
                  20XX, bringing inspiring messages and a heart for the
                  community.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="flex flex-col items-center p-6">
                <Image
                  src="/face.jpg?height=150&width=150"
                  width={150}
                  height={150}
                  alt="Sarah Smith"
                  className="rounded-full object-cover mb-4"
                />
                <CardTitle className="text-xl">Sarah Smith</CardTitle>
                <CardDescription>Youth Director</CardDescription>
                <p className="text-sm text-muted-foreground mt-2">
                  Sarah is passionate about guiding our youth and fostering a
                  strong foundation of faith in the next generation.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="flex flex-col items-center p-6">
                <Image
                  src="/face.jpg?height=150&width=150"
                  width={150}
                  height={150}
                  alt="Michael Brown"
                  className="rounded-full object-cover mb-4"
                />
                <CardTitle className="text-xl">Michael Brown</CardTitle>
                <CardDescription>Worship Leader</CardDescription>
                <p className="text-sm text-muted-foreground mt-2">
                  Michael leads our worship team, creating an atmosphere where
                  everyone can experience God's presence through music.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="flex flex-col items-center p-6">
                <Image
                  src="/face.jpg?height=150&width=150"
                  width={150}
                  height={150}
                  alt="Emily White"
                  className="rounded-full object-cover mb-4"
                />
                <CardTitle className="text-xl">Emily White</CardTitle>
                <CardDescription>
                  Community Outreach Coordinator
                </CardDescription>
                <p className="text-sm text-muted-foreground mt-2">
                  Emily organizes our outreach programs, connecting our church
                  with the needs of the wider community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
