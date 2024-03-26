import { z } from "zod";

export const contactUsFormSchema = z.object({
  firstname: z
    .string()
    .min(2, { message: "firstname should be more than 2 Characters" }),
  lastname: z
    .string()
    .min(2, { message: "lastname should be more than 2 Characters" }),
  company_name: z
    .string()
    .min(2, { message: "company name should be more than 2 Characters" }),
  email: z.string().email(),
  phone_no: z
    .string()
    .min(10, { message: "it should have 10 Characters" })
    .max(10, { message: "it should have 10 Characters" }),
  message: z
    .string()
    .min(5, { message: "message should be greater than 5 Characters" }),
});
