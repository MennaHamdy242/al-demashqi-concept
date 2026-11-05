import WhatsAppButton from "../components/WhatsAppButton";
import "./Contact.css";

const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("شارع صيدناوي، العاشر من رمضان، مصر");

function Contact() {
  return (
    <main className="contact-page">
      <h1>التواصل والموقع</h1>
      <p className="contact-intro">
        دي صفحة تواصل ضمن concept redesign مستقل. بيانات التواصل هنا للتوضيح،
        والطلب بيتجهز كرسالة واتساب للمراجعة.
      </p>

      <section className="contact-card" aria-labelledby="address-title">
        <h2 id="address-title">العنوان</h2>
        <p>شارع صيدناوي، العاشر من رمضان، مصر</p>
        <a href={mapUrl} target="_blank" rel="noopener noreferrer">
          افتحي العنوان في خرائط Google
        </a>
      </section>

      <section className="contact-card" aria-labelledby="message-title">
        <h2 id="message-title">واتساب</h2>
        <p>ابدئي برسالة استفسار عن المنيو أو تابعي طلبك.</p>
        <WhatsAppButton className="contact-whatsapp">
          افتحي واتساب
        </WhatsAppButton>
      </section>

      <p className="contact-disclaimer">
        المشروع تجريبي وغير رسمي، ومفيش رقم واتساب حقيقي للمطعم مستخدم هنا.
      </p>
    </main>
  );
}

export default Contact;
