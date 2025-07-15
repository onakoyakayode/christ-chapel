"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // In a real application, you would send formData to your backend here
    console.log("Form submitted:", formData);

    setStatus("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
  };

  return (
    <section className="py-12 md:py-24 lg:py-32 lg:px-24 bg-muted animate-fade-in">
      <div className=" px-4 md:px-6 lg:px-10">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Contact Us
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you! Reach out to us with any questions,
            prayer requests, or just to say hello.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-muted-foreground">
                    160B RUTHLAND ROAD, NORTH KELOWA BC V1X3B2
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:7785817727" className="hover:underline">
                      (778) 581-7727
                    </a>
                    ,{" "}
                    <a href="tel:2502151990" className="hover:underline">
                      (250) 215-1990
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a
                    href="mailto:info@christchapel.org"
                    className="text-muted-foreground"
                  >
                    info@christchapel.org
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full h-100 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2570.4816632089833!2d-119.3898283!3d49.8897599!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537d8d395c3d4639%3A0x995730b0a5a8c5a7!2s160%20Rutland%20Rd%20N%2C%20Kelowna%2C%20BC%20V1X%201X7%2C%20Canada!5e0!3m2!1sen!2sng!4v1752600811194!5m2!1sen!2sng"
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Church Location Map"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="h-12"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full h-56 rounded-md border border-gray-300 p-3 text-sm"
                />
              </div>
              <Button
                type="submit"
                className="w-full h-12"
                disabled={status === "Sending..."}
              >
                {status === "Sending..." ? "Sending..." : "Send Message"}
              </Button>
              {status && status !== "Sending..." && (
                <p
                  className={`text-center text-sm ${
                    status.includes("success")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
