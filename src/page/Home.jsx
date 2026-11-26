import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";
import Accordion from "../components/Accordion";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import { works } from "../data/works";
import { Link } from 'react-router-dom';
import { services } from "../data/services";
import { faqs } from "../data/faqs";
import { testimonials } from "../data/testimonials";
import { contact } from "../data/contact";
import { site } from "../data/site";
import { formatPhone } from "../util/format";
import { motion } from "motion/react";
import { staggerContainer } from "../util/motion";
import {
  Building2,
  Hammer,
  Ruler,
  Paintbrush,
  Layers,
  Trees,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

const serviceIcons = {
  1: Building2,
  2: Hammer,
  3: Ruler,
  4: Paintbrush,
  5: Layers,
  6: Trees,
};

export default function Home() {
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
            color: "var(--text-muted)",
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
        <motion.div
          className="grid grid--3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {works
            .filter((w) => w.featured)
            .map((w) => (
              <Link
                key={w.id}
                to={`/obras?id=${w.id}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Card
                  title={w.title}
                  text={w.shortDescription}
                  image={w.coverImage}
                  meta={`${w.category} · ${w.year}`}
                />
              </Link>
            ))}
        </motion.div>
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <Link to="/obras" className="btn btn--secondary">
            Ver todas las obras en la Galería
          </Link>
        </div>
      </Section>
      <Section id="servicios" title="Servicios" subtitle="Lo que ofrecemos">
        <motion.div
          className="grid grid--3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {services.map((s) => {
            const Icon = serviceIcons[s.id];
            return (
              <Card key={s.id} title={s.title} text={s.description}>
                <div className="service-card">
                  <span className="service-card__icon">
                    {Icon ? <Icon size={40} strokeWidth={1.5} /> : s.icon}
                  </span>
                </div>
              </Card>
            );
          })}
        </motion.div>
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
            <p>
              <Phone size={16} /> {formatPhone(contact.phone)}
            </p>
            <p>
              <Mail size={16} /> {contact.email}
            </p>
            <p>
              <MapPin size={16} /> {contact.address}
            </p>
            <p style={{ color: "var(--text-muted)", marginTop: 12 }}>
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
              <MessageCircle size={18} />
              Contactar por WhatsApp
            </Button>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
}