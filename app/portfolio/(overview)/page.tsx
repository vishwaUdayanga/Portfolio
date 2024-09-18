import { Content } from './../../library/content';
import Image from 'next/image';

export default function Page() {
    return (
        <div className='w-full p-4 mt-5'>
            <div className='w-full'>
                <div className="md:w-1/2 p-4 h-[50vh] bg-[url('/portfolio/main_images/1.jpg')] bg-cover bg-center float-right md:m-5 md:mb-5 w-full mb-4"></div>
                <h1 className='text-4xl font-bold mb-4 text-slate-700'>{Content[0].title}</h1>
                {Content[0].summary.map((item, index) => (
                    <p key={index} className='text-sm mb-6 text-slate-600'>{item}</p>
                ))}
                
            </div>
            <div className='w-full mt-14'>
                <div className="md:w-1/2 float-left w-full">
                    <h1 className='text-4xl font-bold mb-7 text-slate-700'>Vital skills</h1>
                    <div className='flex flex-wrap gap-3'>
                        {Content[0].skills.map((item, index) => (
                            <p key={index} className={`text-sm mb-6 ${item.text} ${item.background} py-2 px-4 rounded-full`}>{item.name}</p>
                        ))}
                    </div>
                </div>
                <h1 className='text-4xl font-bold mb-7 text-slate-700'>Self reflections</h1>
                {Content[0].self_reflection.map((item, index) => (
                    <p key={index} className='text-sm mb-6 text-slate-600'>{item}</p>
                ))}
            </div>
            <div className='mt-7'>
                <h1 className='text-4xl font-bold mb-5 text-slate-700'>Exercises</h1>
                <div className='flex flex-wrap gap-4'>
                    {Content[0].exercises.map((item, index) => (
                        <Image key={index} src={`/portfolio/exercises/${item}.png`} width={300} height={300} className='rounded-lg' alt={`Exercise | ${item}`}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
