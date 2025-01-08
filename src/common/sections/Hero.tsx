import React from 'react'
import Image from 'next/image'
import { Container, Wrapper } from '@/common/components/Container'

import heroImage from '@/assets/troy-hero.png'

interface HeroProps {
    classname?: string;
    title?: string;
    content?: string;
}


export const Hero = ({classname, title, content}:HeroProps) => {
    return (
        <Container className={`hero ${classname} bg-slate-500 relative`}>
            <Wrapper layout='row' width='wide' alignItems='items-center' className='min-h-96 mx-auto w-full justify-center lg:justify-between'>

                <figure className='hero-image absolute w-[100vw] h-full flex-1 z-0 left-1/2 -translate-x-1/2'>
                    <Image
                        src={heroImage}
                        alt='An aerial view of the Lindenwood University campus, showing buildings, fields, and greenery, with a video play button overlay.'
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
                        placeholder='blur'
                        className='object-cover'
                    />
                </figure>

                <Container layout='col' alignItems='items-center' justifyContent='justify-center' className='content py-fluid-2xl px-fluid-md z-10 w-full lg:w-1/2 relative text-center lg:text-left'>
                    <h1>
                        <span dangerouslySetInnerHTML={{ __html: title ?? '' }} />
                    </h1>
                    <p className='text-fluid-sm font-thin' dangerouslySetInnerHTML={{__html: content ?? ''}} />
                </Container>

            </Wrapper>
        </Container>
    )
}

