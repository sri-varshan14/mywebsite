"use client"
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import SearchSVG from '../svg/SearchSVG';
import { trpc } from '@/app/_trpc/client';
import { type FzfResultItem, Fzf } from 'fzf'
import Link from 'next/link';
import BookSVG from '../svg/BookSVG';
import ArrowUpRightSVG from '../svg/ArrowUpRightSVG';

interface SearchResult {
    id: string,
    title: string,
    description: string,
    tags: Array<string>
}

const Spotlight = ({ setSearchBar }: { setSearchBar: Dispatch<SetStateAction<boolean>> }) => {
    let replaceChar = '$'
    const [fetch, setFetch] = useState(false);
    const [content, setContent] = useState(Array<string>);
    const [filterResult, setFilterResult] = useState(Array<SearchResult>);
    const result = trpc.getSearchDetails.useQuery();
    const fzf = new Fzf(content);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (result.data != undefined && !fetch) {
            const content_arr = result.data!.map(entry => {
                return entry.id + " " + entry.title.replaceAll(' ', replaceChar) + " " + entry.description.replaceAll(' ', replaceChar) + " " + entry.tags;
            }) as string[];
            setContent(content_arr);
            setFetch(true);
        }
        const text_value = event.currentTarget.value
        if (text_value == "") {
            setFilterResult([])
        }
        else {
            const filter_value = fzf.find(event.currentTarget.value)
            const filter_result = filter_value.map((a) => {
                let [id, title, description, tags] = a.item.split(' ');
                return {
                    id: id,
                    title: title.replaceAll(replaceChar, ' '),
                    description: description.replaceAll(replaceChar, ' '),
                    tags: tags.split("-")
                } as SearchResult;
            })
            setFilterResult(filter_result)
        }
    }

    function handleKeyBoardInput(event: React.KeyboardEvent<HTMLElement>) {
        console.log(event.key)
        if (event.key == "Escape") {
            setSearchBar(false)
        }
    }
    return (
        <div className='fixed w-screen h-screen top-0 left-0 z-1800 z-[1800]'>
            <span className='flex justify-center h-full w-full relative'  >
                <span className='w-1/2 h-fit rounded-xl z-[1900] mt-[5vw]' onClick={() => setSearchBar(true)}>
                    <div className='w-full h-20 bg-base-100 rounded-xl border-2 border-base-content flex items-center overflow-hidden'>
                        <SearchSVG cssClasses='w-10 m-5' />
                        <input
                            className='h-full bg-base-100 w-[calc(100%_-_7.5rem)] outline-none lead font-inter'
                            type='text'
                            placeholder='Search'
                            onChange={handleChange}
                            onKeyDown={handleKeyBoardInput}
                            autoFocus={true}
                        />
                        <kbd className="kbd kbd-md m-5">Esc</kbd>
                    </div>
                    {
                        filterResult.length != 0 &&
                        <div className='w-full mt-5 bg-base-100 max-h-[30rem] flex flex-col rounded-xl border-2 border-base-content gap-5'>
                            {
                                filterResult.map((result) => {
                                    let link = "/blog/" + result.id;
                                    return (
                                        <Link href={link}>
                                            <div className='flex h-26 items-center justify-evenly hover:bg-base-200 rounded-xl'>
                                                <BookSVG cssClasses='w-8 m-8' />
                                                <div className='flex flex-col py-5' key={result.id}>
                                                    <h2 className='my-0 leading-none'>{result.title}</h2>
                                                    <p className='my-1'>{result.description.length > 50 ? result.description.substring(0, 100) + "...." : result.description}</p>
                                                    <div className='flex gap-2'>
                                                        {result.tags.map((val) => <p key={val} className='badge badge-outline'>{val}</p>)}
                                                    </div>
                                                </div>
                                                <ArrowUpRightSVG cssClasses='w-8 m-8 stroke-base-content' />
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    }
                </span >
                <div className='w-full h-screen absolute backdrop-blur-sm' onClick={() => setSearchBar(false)}></div>
            </span >
        </div >
    )
}

export default Spotlight;
