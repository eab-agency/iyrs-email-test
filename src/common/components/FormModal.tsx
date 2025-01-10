'use client';
import React, { useEffect } from 'react';

interface FormModalProps {
    url: string; // The base URL for the form script
    id: string;  // The ID for the form container
}

export const FormModal = ({ url, id }: FormModalProps) => {
    useEffect(() => {
        // Sanitize location.search to avoid potential injection
        const searchParams = new URLSearchParams(window.location.search);
        const queryString = searchParams.toString();

        // Create the script element dynamically
        const script = document.createElement('script');
        script.async = true;
        script.src = `${url}?id=${id}&output=embed&div=${id}${queryString ? `&${queryString}` : ''}`;

        // Append the script to the document
        const formContainer = document.getElementById(id);
        formContainer?.appendChild(script);

        // Clean up the script when the component unmounts
        return () => {
            if (formContainer?.contains(script)) {
                formContainer.removeChild(script);
            }
        };
    }, [url, id]); // Dependencies to ensure effect runs when these props change

    return (
        <div id="modal" className="modal mauticform">
            <div id={id}></div> {/* Use the id prop dynamically */}
        </div>
    );
};
