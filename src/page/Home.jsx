import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";
import Accordion from "../components/Accordion";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import { works } from "../data/works";
import { services } from "../data/services";
import { faqs } from "../data/faqs";
import { testimonials } from "../data/testimonials";
import { contact } from "../data/contact";
import { site } from "../data/site";
import { formatPhone } from "../util/format";
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return (
    <>
      <Header />
      <Navbar />
      <Section
        id="nosotros"
        title="Sobre Mi"
        subtitle="Experiencia que se nota en cada obra"
      >
        <p
          style={{
            textAlign: "center",
            maxWidth: 800,
            margin: "0 auto",
            color: "var(--color-muted)",
          }}
        >
          {site.about}
        </p>
      </Section>
      <Section
        id="obras"
        title="Obras realizadas"
        subtitle="Algunos de nuestros trabajos"
      >
        <div className="grid grid--3">
          {works.map((w) => (
            <Card
              key={w.id}
              title={w.title}
              text={w.description}
              image={w.image}
              meta={`${w.category} · ${w.date}`}
            />
          ))}
        </div>
      </Section>
      <Section id="servicios" title="Servicios" subtitle="Lo que ofrecemos">
        <div className="grid grid--3">
          {services.map((s) => (
            <Card key={s.id} title={s.title} text={s.description}>
              <div className="service-card">
                <span className="service-card__icon">{s.icon}</span>
              </div>
            </Card>
          ))}
        </div>
      </Section>
      <Section id="faq" title="Preguntas frecuentes">
        <Accordion items={faqs} />
      </Section>
      <Section id="testimonios" title="Lo que dicen nuestros clientes" subtitle="Opiniones reales">
        <Testimonials items={testimonials} />
      </Section>
      <Section id="contacto" title="Contacto" subtitle="Hablemos de tu obra">
        <div className="contact-grid">
          <div className="contact-info">
            <p>
              <strong>{site.clientName}</strong>
            </p>
            <p>📞 {formatPhone(contact.phone)}</p>
            <p>✉️ {contact.email}</p>
            <p>📍 {contact.address}</p>
            <p style={{ color: "var(--color-muted)", marginTop: 12 }}>
              Atención y presupuestos únicamente por WhatsApp. Respondemos a la
              brevedad.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button variant="accent" href={`https://wa.me/${contact.whatsapp}`}>
              Contactar por WhatsApp
            </Button>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
}
