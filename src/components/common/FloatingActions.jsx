import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../../data/constants';

const FloatingActions = () => {
    const phoneNo = CONTACT_INFO.phones[0].replace(/\s|\+/g, '');

    return (
        <div className="fixed bottom-10 right-6 md:right-10 z-50 flex flex-col gap-4">
            {/* Phone Button */}
            <a
                href={`tel:${phoneNo}`}
                className="group flex items-center justify-center w-14 h-14 bg-white text-primary border border-gray-100 rounded-full shadow-2xl hover:bg-primary hover:text-white transition-all duration-300 active:scale-95"
                title="Call Us"
            >
                <Phone size={24} />
                <span className="absolute right-full mr-4 bg-gray-900 text-white text-xs font-bold py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    Call Now
                </span>
            </a>

            {/* WhatsApp Button */}
            <a
                href={`https://wa.me/${phoneNo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 active:scale-95"
                title="WhatsApp Us"
            >
                <MessageSquare size={24} />
                <span className="absolute right-full mr-4 bg-gray-900 text-white text-xs font-bold py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    WhatsApp
                </span>
            </a>
        </div>
    );
};

export default FloatingActions;
