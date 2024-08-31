
'use client';
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import emailjs from 'emailjs-com';
import {NextResponse} from "next/server";
import {toast} from "sonner";
export default function ContactUs() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get('email') as string;
    const message = data.get('message') as string;
    console.log("Ssss",data)
    const templateParams = {
      to_name: email,
      message: message,
    };
    interface EmailJSResult {
      text: string; // Message de succès, généralement "OK"
      status: number; // Code HTTP de la réponse
    }
    interface EmailJSError {
      text: string; // Message d'erreur
      status: number; // Code HTTP de la réponse en cas d'erreur
    }


    emailjs.send('service_md544a3', 'template_35oanzh', templateParams, 'Sge_wmxkYxvGAcK_2')
      .then((result: EmailJSResult)  => {
        toast("Succès", {
          description: "l'email a été envoyé avec succès",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        });
      }, (error: EmailJSError)  => {
        toast("Erreur", {
          description: "Erreur lors de l'envoi de l'email",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      });

    console.log("submitted");
  };
  return (
    <div className="space-y-8 max-w-6xl  mx-auto mb-10 mt-10">
      <motion.div
        initial={{opacity: 0, y: 200}}
        whileInView={{opacity: 1, y: 0}}
        transition={{type: "spring", stiffness: 50, damping: 10}}
        className="container px-4"
      >
        <h1 className="text-4xl md:text-[3.5rem] font-gotham font-bold text-center text-secondary mb-10 mt-4">
          Contactez <br/>
          <span className="text-5xl md:text-[6rem] font-gotham font-bold text-center mt-1 text-primary leading-none">
                            nous
                        </span>
        </h1>
      </motion.div>
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Discutons ensemble</h2>
          <p className="text-gray-500 dark:text-gray-400">
            N'hésitez pas à laisser vos questions ci-dessous ou à nous appeler pour parler avec notre équipe de vente dévouée.
          </p>
        </div>
        <div className="space-y-4">
          <Card className={"dark:bg-muted"}>
            <CardHeader>
              <h3 className="text-2xl font-bold">Contact Details</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Avatar className="size-4"/>
                  <span>1234 Street, City, State, 56789</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Avatar className="w-4 h-4"/>
                  <span>(123) 456-7890</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Avatar className="w-4 h-4"/>
                  <Link href="#" prefetch={false}>
                    salifbiaye411@gmail.com
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className={"dark:bg-muted"}>
            <CardHeader>
              <h3 className="text-2xl font-bold">Laissez un message</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <form onSubmit={onSubmit}>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" placeholder="Entrez votre email" type="email" required/>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Écrivez votre message" className="min-h-[100px]"
                            required/>
                  <Button className={"mt-5"} type="submit">Envoyer un message</Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
    </div>
  )
}
