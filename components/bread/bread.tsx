// components/Breadcrumb.tsx

import React from 'react';
import Link from 'next/link';

interface BreadcrumbProps {
    items: { text: string; href: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
    return (
        <nav aria-label="breadcrumb" className='h-[40px] w-[320px] border border-amber-200'>
            <ol className="flex space-x-2 ml-3 mt-2">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center ">
                        {index !== items.length - 1 ? (
                            <>
                                <Link href={item.href} legacyBehavior>
                                    <a className="text-gray-80 hover:text-blue-700">{item.text}</a>
                                </Link>
                                <span className="mx-2 text-black">/</span>
                            </>
                        ) : (
                            <span className="text-green-500 font-bold">{item.text}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
