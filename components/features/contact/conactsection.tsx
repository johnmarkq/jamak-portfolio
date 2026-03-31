import { Section } from "@/components/common/Section";
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'

export function ContactSection(){
    return(
        <Section className="py-25">
            <div className="container mx-auto w-full lg:pt-20">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-12 text-center md:text-left">Contact</h1>
                
                {/* Main Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    
                    {/* Left Side - Form and Info */}
                    <div className="flex flex-col gap-8">
                        
                        {/* Contact Form */}
                        <div className="border border-foreground/20 rounded-lg p-6 md:p-8">
                            <h2 className="font-extrabold text-2xl md:text-3xl mb-6">Contact Form</h2>
                            <form className="flex flex-col gap-4">
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Email</label>
                                    <Input 
                                        type="email" 
                                        placeholder="your@email.com" 
                                        className="h-10 rounded-md"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Name</label>
                                    <Input 
                                        type="text" 
                                        placeholder="Your Name" 
                                        className="h-10 rounded-md"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Message</label>
                                    <Textarea 
                                        placeholder="Your message here..." 
                                        className="min-h-32 rounded-md"
                                    />
                                </div>
                                <Button className="h-10 mt-2 rounded-md font-semibold">
                                    Send Message
                                </Button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="border border-foreground/20 rounded-lg p-6 md:p-8">
                            <h2 className="font-extrabold text-2xl md:text-3xl mb-6">Contact Info</h2>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-3">
                                    <MdEmail size={24} className="text-primary flex-shrink-0" />
                                    <div className="flex flex-col">
                                        <span className="text-sm text-muted-foreground">Email</span>
                                        <Link href="mailto:gulbejohnmark@gmail.com" className="font-semibold hover:text-primary transition-colors">
                                            gulbejohnmark@gmail.com
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MdPhone size={24} className="text-primary flex-shrink-0" />
                                    <div className="flex flex-col">
                                        <span className="text-sm text-muted-foreground">Phone</span>
                                        <a href="tel:+639977381713" className="font-semibold hover:text-primary transition-colors">
                                            +63 (9977) 381-713
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MdLocationOn size={24} className="text-primary flex-shrink-0" />
                                    <div className="flex flex-col">
                                        <span className="text-sm text-muted-foreground">Location</span>
                                        <p className="font-semibold">Your City, Country</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Side - Image */}
                    <div className="flex items-center justify-center">
                        <div className="w-full h-64 md:h-96 lg:h-full bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-dashed border-foreground/20 rounded-lg flex items-center justify-center">
                            <p className="text-2xl md:text-3xl font-bold text-muted-foreground">Image</p>
                        </div>
                    </div>

                </div>
            </div>
        </Section>
    );
}