export default function Bio() {
  return (
    <section id="Bio" className="min-w-full text-white bg-[#003058] p-8">
      <h3 className="text-4xl font-bold text-center p-5">
        Mi trabajo
      </h3>
      <div className="flex flex-row items-start justify-center gap-12">
        <img className="w-160 rounded-lg" alt="Esmeralda" src={"hola.png"}></img>
        <div className="pr-20 text-justify">
          <p className="text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, natus id itaque fugit fuga beatae deleniti et aperiam quos culpa ea ducimus perspiciatis nisi accusantium omnis commodi pariatur facere! Magnam.
          </p>
        </div>
      </div>
    </section>
  );
} 