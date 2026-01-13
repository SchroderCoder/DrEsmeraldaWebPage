type ReviewCardProps = {
  
  text:string, 
  title:string
}

export default function ReviewCard({text , title }:ReviewCardProps ){
  return (
    <section className="max-w-75 h-75 min-w-75 rounded-2xl bg-white  p-6 border border-gray-100">
      <div className="flex items-center gap-5">
        <img
          className="w-16 h-16 rounded-full object-cover "
          alt="foto-perfil"
          src="user.png"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {title}
          </h3>
          <div className="flex gap-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                className="w-5 h-5 text-yellow-400"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.176 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.049 9.401c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
              </svg>
            ))}
          </div>
          <img
            className="w-20 pt-2"
            alt="logo"
            src="logo-doctoralia.png"
          />
        </div>
      </div>

      <p className="mt-4 text-gray-700 leading-relaxed line-clamp-6">
  {text}
</p>

    </section>
  );
}
