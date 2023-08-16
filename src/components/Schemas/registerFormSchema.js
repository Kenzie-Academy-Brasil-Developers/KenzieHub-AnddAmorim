import {z} from "zod"

export const registerFormSchema = z
  .object({
    name: z.string().nonempty("Nome obrigatório"),

    email: z
      .string()
      .nonempty("E-mail obrigatório")
      .email("Forneça um email válido"),

    password: z
      .string()
      .nonempty("Senha obrigatória")
      .min(8, "É necessário pelo menos oito caracteres")
      .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
      .regex(
        /(?=.*?[#?!@$%^&*-])/,
        "É necessário pelo menos um caracter especial"
      ),

    confirmPassword: z.string().nonempty("Confirmação de senha obrigatória"),

    bio: z.string().nonempty("Por favor preencha a Bio"),

    contact: z.string().nonempty("Por favor forneça um contato"),

    course_module: z.string().nonempty("Por favor selecione um módulo"),
  })
  .refine(({password, confirmPassword}) => password === confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"],
  })
