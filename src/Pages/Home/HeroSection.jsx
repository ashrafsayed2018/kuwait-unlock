import { Link } from "react-router-dom";
export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">كويت انلوك</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">فتح أقفال </span>{" "}
            <br />
            السيارات
          </h1>
          <p className="hero--section-description">
          كل ما عليك هو الاتصال بنا وابلاغنا بمكان سيارتك في اي منطقة من مناطق دولة الكويت وسنأتي اليك في اسرع وقت ممكن.

            <br /> نقوم ببرمجة معظم موديلات السيارات

          </p>
        </div>
        <Link to="tel:99432949" className="btn btn-primary">تواصل معنا</Link>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
