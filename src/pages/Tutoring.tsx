
import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Book, GraduationCap, Users } from 'lucide-react';

const TutoringPage = () => {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">English Tutoring Services</h1>
        
        <Tabs defaultValue="adults" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="adults">Adults & Newcomers</TabsTrigger>
            <TabsTrigger value="students">11+ Exam Prep</TabsTrigger>
          </TabsList>

          <TabsContent value="adults">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>English for Adults & UK Newcomers</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p className="text-muted-foreground">
                    Tailored English lessons for adults new to the UK, focusing on practical language skills,
                    cultural integration, and everyday communication.
                  </p>
                  
                  <div className="grid gap-4">
                    <div className="border p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">30-Minute Session</h3>
                      <p className="text-2xl font-bold mb-2">£25</p>
                      <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                        <li>One-to-one focused learning</li>
                        <li>Practical conversation practice</li>
                        <li>Basic grammar and vocabulary</li>
                        <li>Cultural context and customs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="students">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  <span>11+ Exam Preparation</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p className="text-muted-foreground">
                    Specialized tutoring for students preparing for 11+ exams, covering English comprehension,
                    creative writing, and verbal reasoning.
                  </p>
                  
                  <div className="grid gap-4">
                    <div className="border p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">30-Minute Session</h3>
                      <p className="text-2xl font-bold mb-2">£30</p>
                      <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                        <li>Exam techniques and strategies</li>
                        <li>Practice questions and feedback</li>
                        <li>Comprehension skills</li>
                        <li>Vocabulary enhancement</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            All sessions are conducted online via Zoom. Book a session by contacting us through the contact form.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TutoringPage;
