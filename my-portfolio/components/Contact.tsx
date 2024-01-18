"use client";

import React from "react";
import SectionHeading from "./Section-Heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./Submit-Btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contato", 0.3);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)]"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <SectionHeading>Contato</SectionHeading>

      <p className="text-gray-700 text-center sm:text-start -mt-3 dark:text-white/80">
        Entre em contato diretamente em{" "}
        <a className="underline" href="mailto:matheus7227@gmail.com">
          matheusoliveira7227@gmail.com
        </a>
        {"  "}
        ou através do form abaixo.
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email enviado com sucesso!");
        }}
      >
        <input
          type="email"
          name="senderEmail"
          required
          maxLength={500}
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all"
          placeholder="Seu email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100 transition-all"
          name="message"
          placeholder="Escreva uma mensagem"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
