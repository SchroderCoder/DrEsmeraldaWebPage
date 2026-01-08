import ReviewCard from "./reviewcard";

export default function Reviews() {
  return (
    <section className="bg-blue-100 pb-10" >
      <h3 className="text-center text-black text-4xl font-bold p-5">
        Mis clientes
      </h3>
      <div className="flex items-center justify-center gap-5">
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
      </div>
    </section>
  );
} 