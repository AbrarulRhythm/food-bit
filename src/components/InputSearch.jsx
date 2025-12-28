'use client'

import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const InputSearch = () => {
    const router = useRouter();
    const params = useSearchParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const value = form.search.value;

        const newParams = new URLSearchParams(params.toString());
        newParams.set('search', value);
        router.push(`?${newParams.toString()}`);
    }

    return (
        <form
            onSubmit={handleSubmit}
            className='flex items-center'>
            <input name='search' type="text" className='w-full py-4 px-5 border border-r-0 border-gray-500/40 rounded-l-md h-12 focus:outline-0 focus:border-orange-500' placeholder='Search...' />
            <button className='h-12 bg-orange-500 px-5 rounded-r-md cursor-pointer hover:bg-orange-700 duration-300'>Search</button>
        </form>
    );
};

export default InputSearch;