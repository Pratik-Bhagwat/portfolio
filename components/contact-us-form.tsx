"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { contactUsFormSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "./ui/textarea";

const ContactUsForm = () => {
  const form = useForm<z.infer<typeof contactUsFormSchema>>({
    resolver: zodResolver(contactUsFormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      company_name: "",
      email: "",
      phone_no: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof contactUsFormSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-2">
        <div className="flex items-center space-x-3">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-proximaNova text-xs uppercase tracking-wider">
                  Firstname
                </FormLabel>
                <FormControl>
                  <Input
                    className="border-muted/15"
                    type="text"
                    placeholder="firstname"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-proximaNova text-xs uppercase tracking-wider">
                  Lastname
                </FormLabel>
                <FormControl>
                  <Input
                    className="border-muted/15"
                    type="text"
                    placeholder="lastname"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-proximaNova text-xs uppercase tracking-wider">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  className="border-muted/15"
                  type="email"
                  placeholder="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-proximaNova text-xs uppercase tracking-wider">
                Company name
              </FormLabel>
              <FormControl>
                <Input
                  className="border-muted/15"
                  type="text"
                  placeholder="company name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone_no"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-proximaNova text-xs uppercase tracking-wider">
                Phone number
              </FormLabel>
              <FormControl>
                <Input
                  className="border-muted/15"
                  type="tel"
                  placeholder="phone number"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-proximaNova text-xs uppercase tracking-wider">
                MeSsage
              </FormLabel>
              <FormControl>
                <Textarea
                  className="border-muted/15"
                  placeholder="message"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full bg-[#EB5939] font-avanGarde text-background hover:bg-[#ee7054]"
        >
          Send
        </Button>
      </form>
    </Form>
  );
};

export default ContactUsForm;
