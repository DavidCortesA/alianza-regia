'use client'
import { useForm } from 'react-hook-form';

export default function ContactForm(){
  const { register, handleSubmit, formState: { errors }} = useForm();
  
  function onSubmit(data){
    console.log(data);
  };

  return (
    <section id='contact' className='backdrop-blur-sm rounded-md bg-slate-50/50'>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto p-5">
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium text-gray-800">Nombre</label>
          <input type="text" {...register("name", { required: true })} className={`mt-1 block w-full rounded-md border-stone-300 shadow-sm focus:border-lime-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors.name ? "border-red-500" : ""}`} />
          {errors.name && <span className="text-red-500 text-sm">Este campo es requerido</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block font-medium text-gray-800">Email</label>
          <input type="email" {...register("email", { required: true })} className={`mt-1 block w-full rounded-md border-stone-300 shadow-sm focus:border-lime-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors.email ? "border-red-500" : ""}`} />
          {errors.email && <span className="text-red-500 text-sm">Este campo es requerido</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block font-medium text-gray-800">Mensaje</label>
          <textarea {...register("message", { required: true })} className={`mt-1 block w-full rounded-md resize-none border-stone-300 shadow-sm focus:border-lime-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors.message ? "border-red-500" : ""}`} />
          {errors.message && <span className="text-red-500 text-sm">Este campo es requerido</span>}
        </div>

        <button type="submit" className="px-4 py-2 bg-amber-400 hover:bg-amber-600 text-white rounded-md transition duration-300 w-full">Enviar</button>
      </form>
    </section>
  );
};