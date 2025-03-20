
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "@/components/ui/use-toast";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  organization: z.string().optional(),
  phone: z.string().optional(),
  service: z.string({
    required_error: "Please select a service you're interested in.",
  }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Form data:", data);
      
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. We'll get back to you shortly.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="bg-primary-50 text-primary-700 text-sm font-medium px-4 py-1.5 rounded-full">
              Get in Touch
            </span>
            <h1 className="heading-lg mt-4 mb-6">
              Let's Start a Conversation
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you're looking for research support, consulting services, or just want to learn more about our work, we're here to help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left side - Contact Information */}
            <div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-50 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Address</h3>
                      <p className="text-gray-600 mt-1">
                        123 Healthcare Avenue<br />
                        Medical District<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-50 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Email</h3>
                      <a href="mailto:info@connectheor.com" className="text-primary-600 hover:underline mt-1 block">
                        info@connectheor.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-50 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Phone</h3>
                      <a href="tel:+15551234567" className="text-gray-600 mt-1 block">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="font-medium text-gray-900 mb-3">Office Hours</h3>
                  <p className="text-gray-600">
                    Monday-Friday: 9:00 AM - 5:00 PM<br />
                    Saturday-Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right side - Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 shadow-sm">
                <h2 className="text-xl font-semibold mb-6">Send Us a Message</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input placeholder="your.email@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="organization"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Organization</FormLabel>
                            <FormControl>
                              <Input placeholder="Your company or institution" {...field} />
                            </FormControl>
                            <FormDescription>Optional</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="+1 (555) 123-4567" {...field} />
                            </FormControl>
                            <FormDescription>Optional</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service of Interest *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a service you're interested in" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="health-economics">Health Economics Research</SelectItem>
                              <SelectItem value="rwe">Real-World Evidence Generation</SelectItem>
                              <SelectItem value="market-access">Market Access Strategy</SelectItem>
                              <SelectItem value="data-analytics">Healthcare Data Analytics</SelectItem>
                              <SelectItem value="ai-solutions">AI & Machine Learning Solutions</SelectItem>
                              <SelectItem value="other">Other Services</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please provide some details about your project or inquiry..." 
                              className="min-h-32"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white btn-hover-effect"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Send Message <Send className="ml-2 h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
