import ReviewCard from "./reviewcard";
import Carousel from "./Carousel";

const ReviewsList = 
  [
    {
      text : "Excelente atención. Me dio mucha confianza y tranquilidad, pues estaba yo muy nerviosa al ser la primera vez que me realizaba una electromiografía. Muy paciente y cuidadosa. Me explicó todo a detalle y ofreció respuestas muy completas. Mi experiencia superó mis expectativas.",
      title : " IMedina "
    },
    {
      text : "Comparto mi experiencia con la Dra. Esmeralda ya que en realidad el dedicación durante la consulta fueron únicas, me escucho con paciencia y resolvió mis dudas sobre mi enfermedad. Claro que es 100 % recomendable ",
      title : " Paulin Resendiz"
    },
    {
      text: "desde hace varios años realizo mis estudios de electroencefalograma a mi hija con la Dra, Cobos. tiene excelente trato ",
      title: "Anonimo"
    },
    {
      text: "califico a la dra con 5 estrellas por su amabilidad y respeto, mi mama es una persona de la tercera edad y en todo momento mostro paciencia, su trato es impecable.",
      title: " Ma. Ugalde"
    },
    {
      text: "la doctora es muy profesional, sabe su trabajo y me explico muy bien como seguir mi tratamiento muy atenta ",
      title: " Carolina Velasco"
    },
    {
      text: "Agradezco a la Dr. Esmeralda por la atención brindada y por que es muy profesional ya que me dejo claro los síntomas que suceden y las alternativas que podemos aplicar. ",
      title: "  Mónica Garcia"
    },
    {
      text: "Buen dia, me dio el tiempo para agradecer a la Dra. Cobos es una neuróloga altamente preparada con el tratamiento que me aplicó sentí inmediatamente mejoras así como mi recuoeracion, es por ello que la recomiendo ampliamente.",
      title: "Dayan Muñiz"
    },
    {
      text: "la busque por doctoralia y me atendió muy bien, el motivo de mi visita fue por problemas para dormir, por lo que la recomiendo mucho. ",
      title: "Isaura Guzman"
    },
    {
      text: "Fui a realizarme estudio de electromiografia, la experiencia fue muy adecuada con la explicacion que me dio la Dra. ",
      title: "Maria Luisa "
    },
    
  ]
export default function Reviews() {
  return (
    <section className="bg-blue-100 pb-10" >
      <h3 className="text-center text-black text-4xl font-bold p-5">
        Mis clientes
      </h3>
      <div className="flex justify-center">
        <Carousel cardsPerPage={3} gap = {5} autoScrollSeconds={10} > 
          { ReviewsList.map((elem) => 
            <ReviewCard text = {elem.text} title = {elem.title}></ReviewCard> )
          }
        </Carousel>
      </div>
    </section>
  );
} 