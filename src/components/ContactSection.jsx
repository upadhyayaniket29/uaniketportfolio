import {
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Send,
    Twitch,
    Twitter,
  } from "lucide-react";
  import { cn } from "@/lib/utils";
  import { useToast } from "@/hooks/use-toast";
  import { useState } from "react";
  
  export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      setIsSubmitting(true);
  
      setTimeout(() => {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setIsSubmitting(false);
      }, 1500);
    };
    return (
      <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get In <span className="text-primary"> Touch</span>
          </h2>
  
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
            I'm always open to discussing new opportunities.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {/* <h3 className="text-2xl font-semibold mb-6">
                {" "}
                Contact Information
              </h3> */}
  
              <div className="flex flex-col items-start justify-center space-y-6 text-left mt-10 mx-auto w-fit">
  {/* Contact Info Heading */}
  <h2 className="text-2xl font-semibold mb-4 text-white">Contact Information</h2>

  {/* Email */}
  <div className="flex items-center space-x-4">
    <div className="p-3 rounded-full bg-primary/10">
      <Mail className="h-6 w-6 text-primary" />
    </div>
    <div>
      <p className="text-sm text-gray-400">Email</p>
      <a
        href="mailto:upadhyayaniket29@gmail.com"
        className="text-white hover:text-primary transition-colors"
      >
        upadhyayaniket29@gmail.com
      </a>
    </div>
  </div>

  {/* Phone */}
  <div className="flex items-center space-x-4">
    <div className="p-3 rounded-full bg-primary/10">
      <Phone className="h-6 w-6 text-primary" />
    </div>
    <div>
      <p className="text-sm text-gray-400">Phone</p>
      <a
        href="tel:+919179303750"
        className="text-white hover:text-primary transition-colors"
      >
        +91 9179 303 750
      </a>
    </div>
  </div>

  {/* Location */}
  <div className="flex items-center space-x-4">
    <div className="p-3 rounded-full bg-primary/10">
      <MapPin className="h-6 w-6 text-primary" />
    </div>
    <div>
      <p className="text-sm text-gray-400">Location</p>
      <p className="text-white">Gwalior, Madhya Pradesh, India</p>
    </div>
  </div>
</div>


  
              <div className="pt-8">
                <h4 className="font-medium mb-4"> Connect With Me</h4>
                <div className="flex space-x-4 justify-center">
                  <a href="https://www.linkedin.com/in/aniket-upadhyay-02ba07222/" target="_blank">
                    <Linkedin />
                  </a>
                  <a href="https://x.com/Aniketu89741067" target="_blank">
                    <Twitter />
                  </a>
                  <a href="https://www.instagram.com/synkie_aniket/" target="_blank">
                    <Instagram />
                  </a>
                  {/* <a href="#" target="_blank">
                    <Twitch />
                  </a> */}
                </div>
              </div>
            </div>
  
            <div
              className="bg-card p-8 rounded-lg shadow-xs"
              onSubmit={handleSubmit}
            >
              <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
  
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    {" "}
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                    placeholder="Type Your Name..."
                  />
                </div>
  
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    {" "}
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                    placeholder="john@gmail.com"
                  />
                </div>
  
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    {" "}
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                    placeholder="Hello, I'd like to talk about..."
                  />
                </div>
  
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "cosmic-button w-full flex items-center justify-center gap-2"
                  )}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };