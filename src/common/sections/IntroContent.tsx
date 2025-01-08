import React from 'react'
import {Container} from '@/common/components/Container'
import Image from 'next/image'

interface IntroContentProps {
  className?: string;
  content: React.ReactNode;
}

export default function IntroContent({className, content}: IntroContentProps) {
  return (
    <Container htmlTag="div" className={`intro-content basis-2/3 py-fluid-lg px-fluid-sm md:pr-fluid-xl ${className}`}>
       {content}
    </Container>
  )
}
