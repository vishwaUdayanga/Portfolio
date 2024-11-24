import React from 'react';
import Image from 'next/image';

const images = [
    {
        src: '/portfolio/gallery/1.jpg',
        alt: 'Gallery | 1'
    },
    {
        src: '/portfolio/gallery/2.jpg',
        alt: 'Gallery | 2'
    },
    {
        src: '/portfolio/gallery/3.jpg',
        alt: 'Gallery | 3'
    },
    {
        src: '/portfolio/gallery/4.jpg',
        alt: 'Gallery | 4'
    },
    {
        src: '/portfolio/gallery/5.jpg',
        alt: 'Gallery | 5'
    },
    {
        src: '/portfolio/gallery/6.jpg',
        alt: 'Gallery | 6'
    },
    {
        src: '/portfolio/gallery/7.jpg',
        alt: 'Gallery | 7'
    },
    {
        src: '/portfolio/gallery/8.jpg',
        alt: 'Gallery | 8'
    },
    {
        src: '/portfolio/gallery/9.jpg',
        alt: 'Gallery | 9'
    },
    {
        src: '/portfolio/gallery/10.jpg',
        alt: 'Gallery | 10'
    },
    {
        src: '/portfolio/gallery/11.jpg',
        alt: 'Gallery | 11'
    }
]
export default function Gallery() {
    return (
        <div className='w-full p-4 mt-5'>
            <div className='w-full h-fit block'>
                <h1 className='text-4xl font-bold mb-4 text-slate-700'>Gallery</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {images.map((image, index) => (
                    <div key={index} className="relative w-full h-64">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        layout="fill"
                        className="object-cover rounded-lg"
                    />
                    </div>
                ))}
            </div>
        </div>
    )
}