import { Content } from '@/app/library/content';
import Image from 'next/image';

export default function Page({params} : {params : {id: string}}) {
    const id = parseInt(params.id);
    return (
        <div className='w-full p-4 mt-5'>
            <div className='w-full h-fit block'>
                <div 
                    className={`md:w-1/2 p-4 h-[50vh] bg-cover bg-center float-right md:m-5 md:mb-5 w-full mb-4`}
                    style={{ backgroundImage: `url('/portfolio/main_images/${id}.jpg')` }}
                ></div>
                <h1 className='text-4xl font-bold mb-4 text-slate-700'>{Content[id-1].title}</h1>
                {Content[id-1].summary.map((item, index) => (
                    <p key={index} className='text-sm mb-6 text-slate-600'>{item}</p>
                ))}
                
            </div>
            <div className='w-full mt-14 block'>
                <div className="md:w-1/2 float-left w-full">
                    <h1 className='text-4xl font-bold mb-7 text-slate-700'>Vital skills</h1>
                    <div className='flex flex-wrap gap-3'>
                        {Content[id-1].skills.map((item, index) => (
                            <p key={index} className={`text-sm mb-6 ${item.text} ${item.background} py-2 px-4 rounded-full`}>{item.name}</p>
                        ))}
                    </div>
                </div>
                <h1 className='text-4xl font-bold mb-7 text-slate-700'>Self reflections</h1>
                {Content[id-1].self_reflection.map((item, index) => (
                    <p key={index} className='text-sm mb-6 text-slate-600'>{item}</p>
                ))}
            </div>
            <div className='mt-7'>
                <h1 className='text-4xl font-bold mb-5 text-slate-700'>Resources</h1>
                <div className='flex flex-wrap gap-4'>
                    {Content[id-1].resources.map((item, index) => (
                        <div className="relative w-72 h-72" key={index}>
                            <Image
                            src={`/portfolio/resources/${item}`}
                            alt={`Resources | ${item}`}
                            layout="fill"
                            className="object-contain rounded-lg"
                            />
                        </div>
                        // <Image key={index} src={`/portfolio/resources/${item}`} width={300} height={300} className='rounded-lg' alt={`Resources | ${item}`}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
