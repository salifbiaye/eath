
'use client';
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import emailjs from 'emailjs-com';
import { toast } from "sonner";
import { useState } from "react";
import { Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function ContactUs() {
  const t = useTranslations('contactPage');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.currentTarget;
    const data = new FormData(e.currentTarget);
    const email = data.get('email') as string;
    const message = data.get('message') as string;

    const templateParams = {
      to_name: email,
      message: message,
    };

    toast(t('messageForm.notifications.unavailable.title'), {
      style: {
        color: "#ffd21f",
      },
      description: t('messageForm.notifications.unavailable.description'),
    });

    form.reset();
    setIsLoading(false);
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto mb-10 mt-10">
      <motion.div
        initial={{opacity: 0, y: 200}}
        animate={{opacity: 1, y: 0}}
        transition={{type: "spring", stiffness: 50, damping: 10}}
        className="container px-4"
      >
        <h1 className="text-4xl md:text-[3.5rem] font-gotham font-bold text-center text-secondary mb-10 mt-4">
          {t('title')} <br/>
          <span className="text-5xl md:text-[6rem] font-gotham font-bold text-center mt-1 text-primary leading-none">
            {t('subtitle')}
          </span>
        </h1>
      </motion.div>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">{t('discussion.title')}</h2>
        <p className="text-gray-900 dark:text-muted-foreground">
          {t('discussion.description')}
        </p>
      </div>
      <div className="space-y-4">
        <motion.div
          initial={{opacity: 0, x: 20}}
          animate={{opacity: 1, x: 0}}
          transition={{delay: 0.6}}
          className="space-y-6"
        >
          <Card className="dark:bg-muted rounded-[5px] border-primary/20">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6">{t('contactInfo.title')}</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary"/>
                  </div>
                  <div>
                    <p className="font-medium">{t('contactInfo.email.label')}</p>
                    <p className="text-sm text-gray-900 dark:text-muted-foreground">{t('contactInfo.email.value')}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary"/>
                  </div>
                  <div>
                    <p className="font-medium">{t('contactInfo.phone.label')}</p>
                    <p className="text-sm text-gray-900 dark:text-muted-foreground">{t('contactInfo.phone.value')}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary"/>
                  </div>
                  <div>
                    <p className="font-medium">{t('contactInfo.address.label')}</p>
                    <p className="text-sm text-gray-900 dark:text-muted-foreground">{t('contactInfo.address.value')}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="dark:bg-muted rounded-[5px] border-primary/20">
            <CardHeader>
              <h3 className="text-2xl font-bold">{t('messageForm.title')}</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <form onSubmit={onSubmit}>
                  <Label className="flex flex-row gap-2 p-2 rounded-full w-fit bg-primary/10 mb-2" htmlFor="email">
                    <Mail className="h-4 w-4 text-primary"/>
                    {t('messageForm.email.label')}
                  </Label>
                  <Input 
                    className="mb-4 rounded-[5px]"
                    id="email"
                    name="email"
                    placeholder={t('messageForm.email.placeholder')}
                    type="email"
                    required
                  />
                  <Label className="flex flex-row gap-2 p-2 rounded-full w-fit bg-primary/10 mb-2" htmlFor="message">
                    <Mail className="h-4 w-4 text-primary"/>
                    {t('messageForm.message.label')}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={t('messageForm.message.placeholder')}
                    className="min-h-[300px] rounded-[5px]"
                    required
                  />
                  <Button className="w-full mt-5 rounded-[5px]" size="lg" disabled={isLoading}>
                    {isLoading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                    ) : (
                      <Send className="mr-2 h-4 w-4"/>
                    )}
                    {t('messageForm.submit')}
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
