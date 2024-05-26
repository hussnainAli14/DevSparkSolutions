"use server";
import EmailTemplate from "@/app/ui/email/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      senderName,
      services,
      companyName,
      email,
      priceRange,
      description,
      phoneNumber,
    } = body;
    const { data, error } = await resend.emails.send({
      from: "TeschSol Contact Form <onboarding@resend.dev>",
      to: "hussnainraja768@gmail.com",
      subject: "Request for booking",
      reply_to: email,
      react: (
        <EmailTemplate
          senderName={senderName}
          services={services}
          companyName={companyName}
          email={email}
          priceRange={priceRange}
          description={description}
          phoneNumber={phoneNumber}
        />
      ),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
