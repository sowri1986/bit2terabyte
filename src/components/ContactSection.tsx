
import React, { useState } from 'react';
import { AtSign, Github, Linkedin, Mail, MapPin, Phone, Send, AlertCircle } from 'lucide-react';
import SectionTransition from './SectionTransition';
import { cn } from '@/lib/utils';

// Configure your form endpoint here
// Option 1: Web3Forms - Get your access key at https://web3forms.com (free, no signup needed)
// Option 2: Formspree - Use https://formspree.io/f/YOUR_FORM_ID
// Option 3: Your own API endpoint
const CONTACT_FORM_ENDPOINT = 'https://api.web3forms.com/submit';
const WEB3FORMS_ACCESS_KEY = '49185e10-9cc7-4e51-98c7-a7cd338086a5';

const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: `New Contact Form Submission from ${formState.name}`,
          from_name: 'Bit2Terabyte Contact Form',
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setFormStatus('success');
        setFormState({ name: '', email: '', message: '' });
        // Reset form status after 5 seconds
        setTimeout(() => {
          setFormStatus('idle');
        }, 5000);
      } else {
        setFormStatus('error');
        setErrorMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setFormStatus('error');
      setErrorMessage('Failed to send message. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-container">
      <SectionTransition>
        <div className="text-center mb-12">
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">Get In Touch</p>
        </div>
      </SectionTransition>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <SectionTransition delay={100}>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Let's Talk</h3>
            <p className="text-muted-foreground mb-8">
              Have a security challenge or want to discuss potential collaborations?
              I'm always interested in new projects and opportunities.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg text-primary mr-4">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:contact@bit2terabyte.tech" className="text-muted-foreground hover:text-primary transition-colors">
                    contact@bit2terabyte.tech
                  </a>
                </div>
              </div>

              {/* <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg text-primary mr-4">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>  */}

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg text-primary mr-4">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">
                    London, UK
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-medium mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/sowri1986/"
                  className="bg-secondary p-3 rounded-full text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/sowri1986"
                  className="bg-secondary p-3 rounded-full text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </a>
                {/* <a 
                  href="#" 
                  className="bg-secondary p-3 rounded-full text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                  aria-label="Email Contact"
                >
                  <AtSign className="h-5 w-5" />
                </a> */}
              </div>
            </div>
          </div>
        </SectionTransition>

        <SectionTransition delay={200}>
          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>

            {formStatus === 'success' ? (
              <div className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 p-4 rounded-lg flex items-center">
                <div className="bg-green-100 dark:bg-green-800/30 p-2 rounded-full mr-3">
                  <Send className="h-5 w-5" />
                </div>
                <p>Your message has been sent successfully!</p>
              </div>
            ) : formStatus === 'error' ? (
              <div className="space-y-4">
                <div className="bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 p-4 rounded-lg flex items-center">
                  <div className="bg-red-100 dark:bg-red-800/30 p-2 rounded-full mr-3">
                    <AlertCircle className="h-5 w-5" />
                  </div>
                  <p>{errorMessage}</p>
                </div>
                <button
                  onClick={() => setFormStatus('idle')}
                  className="text-primary hover:underline text-sm"
                >
                  Try again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-all",
                    "hover:shadow-lg hover:shadow-primary/20",
                    "flex items-center justify-center",
                    isSubmitting && "opacity-80 cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4 ml-2" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </SectionTransition>
      </div>
    </section>
  );
};

export default ContactSection;
