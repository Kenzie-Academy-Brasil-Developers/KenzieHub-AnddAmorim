import {z} from "zod"

export const loginFormSchema = z.object({
  email: z
    .string()
    .nonempty("E-mail obrigatório!")
    .email("Forneça um email válido"),

  password: z
    .string()
    .nonempty("Senha obrigatória!")
    .min(8, "É necessário pelo menos oito caracteres")
    .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula")
    .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
    .regex(
      /(?=.*?[#?!@$%^&*-])/,
      "É necessário pelo menos um caracter especial"
    ),
})
