"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { DollarSign, CreditCard, Banknote } from "lucide-react";

export default function GivePage() {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Processing donation...");

    // In a real application, you would integrate with a payment gateway here (e.g., Stripe, PayPal, Pushpay)
    // This is a placeholder for demonstration purposes.
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Donation submitted:", { amount, name, email });

    const parsedAmount = Number.parseFloat(amount);
    if (parsedAmount > 0) {
      const accountNumber = "1234567890"; // Replace with your church's account
      const bankDeepLink = `gtbank://transfer?amount=${parsedAmount}&account=${accountNumber}`;

      // Try redirecting to the deep link (only works if user has GTBank app)
      window.location.href = bankDeepLink;

      setStatus("Redirecting to your bank app...");
    } else {
      setStatus("Please enter a valid amount.");
    }
  };

  return (
    <section className="py-12 md:py-24 lg:py-32 lg:px-24 bg-background animate-fade-in">
      <div className=" px-4 md:px-6 lg:px-10">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Give Online
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your generosity helps us continue our mission and ministries. Thank
            you for your support!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Donation Form */}
          <Card className="p-6">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl">Make a Donation</CardTitle>
              <CardDescription>
                Securely give your tithes and offerings online.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-2">
                  <Label htmlFor="amount">Donation Amount</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="amount"
                      name="amount"
                      type="number"
                      step="0.01"
                      min="0.01"
                      placeholder="25.00"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      required
                      className=" pl-10 h-12 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="name">Your Name (Optional)</Label>
                  <Input
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-12"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Your Email (Optional)</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-12"
                  disabled={status === "Processing donation..."}
                >
                  {status === "Processing donation..."
                    ? "Processing..."
                    : "Donate Now"}
                </Button>
                {status && status !== "Processing donation..." && (
                  <p
                    className={`text-center text-sm ${
                      status.includes("Thank you")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {status}
                  </p>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Other Giving Methods / Information */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Other Ways to Give
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CreditCard className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">In-Person Giving</h3>
                  <p className="text-muted-foreground">
                    You can give during our Sunday services using cash or check.
                    Offering plates are available at the back of the sanctuary.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Banknote className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Mail a Check</h3>
                  <p className="text-muted-foreground">
                    Checks can be made payable to "Grace Community Church" and
                    mailed to:
                    <br />
                    123 Church Street, Cityville, State 12345
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <DollarSign className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Planned Giving</h3>
                  <p className="text-muted-foreground">
                    Consider including Grace Community Church in your estate
                    planning. Please contact us for more information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
