import Image from "next/image";

export default function Ubicacion() {
  return (
    <section id="Ubicacion" className="px-5 pb-5 flex flex-col items-center">
      <h3 className="text-center text-black text-4xl font-bold p-5">
        Ubicación
      </h3>
      <div className="flex gap-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3249.847477808996!2d-100.40247650415455!3d20.58354265788209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d35b2d25449f0d%3A0xc2d4e1969b496aef!2sHospital%20H%2B%20Quer%C3%A9taro!5e0!3m2!1ses-419!2smx!4v1767654367023!5m2!1ses-419!2smx"
          width={500}
          height={400}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"

        />
        <div className="font-bold text-[#505050]">
          <ul className="[&>*]:flex">
            <li>
              Hospital H+
            </li>
            <li>
              Calle Privada Ignacio Zaragoza 16, Centro, 76000 Santiago de Querétaro, Qro.
            </li>
            <li>
              Torre 1
            </li>
            <li>
              Consultorio 808
            </li>
            <li>
              Lunes a Viernes de XX:XX a XX:XX
            </li>
          </ul>

          <ul className="mt-10 [&>*]:flex [&>*]:gap-2">
            <li>
              <Image src="icons/phone.svg" alt="" width={20} height={20}></Image>
              442-115-2654
            </li>
            <li>
              <Image src="icons/envelope.svg" alt="" width={20} height={20}></Image>
              esmeralda_cobos@hotmail.com
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
} 