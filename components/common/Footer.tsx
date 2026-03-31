
"use client"
import { MdEmail, MdLocationOn } from 'react-icons/md'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'

export function Footer(){
    return(
        <footer className="border-t border-foreground/10 bg-background py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    
                    {/* Contact Info */}
                    <div className="flex flex-col gap-3 items-center md:items-start">
                        <h3 className="font-extrabold text-lg">Contact</h3>
                        <div className="flex items-center gap-2">
                            <MdEmail size={18} />
                            <a href="mailto:gulbejohnmark@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                                gulbejohnmark@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <MdEmail size={18} />
                            <a href="tel:+639977381713" className="text-muted-foreground hover:text-foreground transition-colors">
                                +63 (9977) 381-713
                            </a>
                        </div>
                    </div>

                    {/* Address */}
                    <div className="flex flex-col gap-3 items-center md:items-start">
                        <h3 className="font-extrabold text-lg">Address</h3>
                        <div className="flex items-center gap-2">
                            <MdLocationOn size={18} />
                            <p className="text-muted-foreground">
                                Your City, Country
                            </p>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="flex flex-col gap-3 items-center md:items-start">
                        <h3 className="font-extrabold text-lg">Follow</h3>
                        <div className="flex gap-4">
                            <a href="#" className="p-3 rounded-full border border-foreground/20 hover:border-foreground hover:bg-primary/10 transition-all">
                                <FaGithub size={20} />
                            </a>
                            <a href="#" className="p-3 rounded-full border border-foreground/20 hover:border-foreground hover:bg-primary/10 transition-all">
                                <FaLinkedin size={20} />
                            </a>
                            <a href="#" className="p-3 rounded-full border border-foreground/20 hover:border-foreground hover:bg-primary/10 transition-all">
                                <FaFacebook size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-foreground/10 mt-8 pt-8 text-center text-muted-foreground text-sm">
                    <p>&copy; 2026 Your Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}