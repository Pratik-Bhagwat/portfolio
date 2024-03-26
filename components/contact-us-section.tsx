import ContactUsForm from "./contact-us-form";
import { Card, CardContent } from "./ui/card";
import Wrapper from "./wrapper";

const ContactUsSection = () => {
  return (
    <section id="contact">
      <Wrapper className="flex h-screen flex-col justify-center space-y-5">
        <h5 className="font-proximaNova text-sm uppercase tracking-[0.5em] sm:text-base">
          Contact me
        </h5>
        <div className="w-[350px] self-center sm:w-[450px]">
          <Card className="w-full border-muted/15 bg-background text-foreground">
            <CardContent>
              <ContactUsForm />
            </CardContent>
          </Card>
        </div>
      </Wrapper>
    </section>
  );
};

export default ContactUsSection;
