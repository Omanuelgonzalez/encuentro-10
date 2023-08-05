import { useEffect, useState } from "react";
import { Title } from "../components/Title";

export const Eventos = () => {
const [data, setData] = useState ([]);
  useEffect(() => {
   fetch('https://jsonplaceholder.typicode.com/posts/1/posts')
     .then((response) => response.json())
     .then((datos) => setData(datos));
   },[])

  return (
    <>
      <Title titulo="Lista de eventos disponibles!" />

<ul>
  {data.map((item: any) => (
<li  className= 'mb-16 relative'key={item.id}>
<h1 className={'text-2xl font-bold uppercase text-green-500'}>{item.title}</h1>
<p className='text-lg italic '>{item.body}</p>

<div className='absolute w-1/2 translate-x-1/2  border-b border-red-500 -botton-10'></div>
</li>
  ))}
</ul>
    </>
  )
}