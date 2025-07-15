import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CalendarDays, MapPin } from "lucide-react";

export default function EventsPage() {
  const events = [
    {
      title: "Community BBQ & Fellowship",
      date: "Saturday, August 10, 2025",
      time: "12:00 PM - 3:00 PM",
      location: "Church Backyard",
      description:
        "Join us for a fun-filled afternoon of food, games, and fellowship for all ages.",
    },
    {
      title: "Women's Ministry Brunch",
      date: "Saturday, August 17, 2025",
      time: "10:00 AM - 12:00 PM",
      location: "Fellowship Hall",
      description:
        "A special gathering for women to connect, share, and grow in faith.",
    },
    {
      title: "Men's Prayer Breakfast",
      date: "Saturday, August 24, 2025",
      time: "8:00 AM - 9:30 AM",
      location: "Church Kitchen",
      description:
        "Start your Saturday with prayer, breakfast, and brotherhood.",
    },
    {
      title: "Youth Lock-In",
      date: "Friday, August 30, 2025",
      time: "7:00 PM - Saturday, 8:00 AM",
      location: "Youth Center",
      description:
        "An overnight event packed with games, movies, and spiritual discussions for our youth.",
    },
    {
      title: "New Members Class",
      date: "Sunday, September 1, 2025",
      time: "1:00 PM - 2:30 PM",
      location: "Conference Room",
      description:
        "Learn more about Grace Community Church and how to become a member.",
    },
  ];

  return (
    <section className="py-12 md:py-24 lg:py-32 lg:px-24 bg-background animate-fade-in">
      <div className="px-4 md:px-6 lg:px-10">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Upcoming Events
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated on all the exciting activities and gatherings at Grace
            Community Church.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  <CalendarDays className="w-4 h-4 inline-block mr-1" />{" "}
                  {event.date} | {event.time}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <p className="text-sm text-muted-foreground mb-4">
                  {event.description}
                </p>
                <div className="flex items-center text-sm text-primary">
                  <MapPin className="w-4 h-4 mr-1" /> {event.location}
                </div>
                <Button
                  variant="outline"
                  className="mt-4 w-full bg-transparent h-12"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="#" className="text-primary hover:underline">
            View Full Calendar &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
