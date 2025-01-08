import React from 'react'
import Image from 'next/image'
import { Container, Wrapper } from '../components/Container'
import data from "@/data/globalData.json";
import { ModalButton } from '../components/ModalButton';
import HelpModal from '../components/HelpModal';
import PrivacyModal from '../components/PrivacyModal';

export const Footer = () => {
    const {
        name,
        phone,
        address: {
            street,
            city,
            state,
            zip
        },
        branding: {
            logoFooter,
            logoAlt
        }
    } = data.partner;

    return (
        <Container
            htmlTag='footer'
            className='page-footer bg-primary-cardinal-500 text-white p-fluid-sm z-10'
        >
            <Wrapper
                alignItems='items-center'
                justifyContent='justify-between'
                className='gap-4'
                layout='row'
            >
                <Container layout='row' className='school-info flex gap-4 items-center basis-4/5'>
                    <figure className='logo relative w-fluid-xl h-fluid-md'>
                        <Image
                            src={logoFooter}
                            alt={logoAlt}
                            fill
                        />
                    </figure>
                    <div className='flex w-full'>
                    <address>{street}, {city}, {state} {zip}&nbsp;&nbsp;</address>
                    <a href={`tel:${phone}`}>{phone}</a>
                    </div>
                </Container>
                <Container className='help-privacy basis-1/5 text-fluid-xs max-md:items-center'>
                    
                    <div className='flex gap-4 uppercase'>
                    <ModalButton content={<HelpModal />} >
                        Help
                    </ModalButton>
                    |
                    <ModalButton content={<PrivacyModal />} >
                        Privacy
                    </ModalButton>
                    </div>
                </Container>
            </Wrapper>
        </Container>
    )
}
