"use client"
import { subNewsLetter } from "@/app/action";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

const initialState = {
    completed: false,
    error: false,
    msg: '',
}

const NewsLetterSection = () => {
    let [isLoading, setIsLoading] = useState(false);
    const [state, formAction] = useFormState(subNewsLetter, initialState)
    const { pending } = useFormStatus()

    return (
        <section className="w-screen bg-base-content px-[8vw] md:px-[6vw] sm:px-[6vw]">
            <div className="flex py-20 items-center justify-evenly flex-wrap">
                <h1 className="d1 text-base-100 max-w-md">Never miss another article.</h1>
                <div className="">
                    <form className="flex items-center gap-5 pt-5 pb-3" action={formAction}>
                        <input className="bg-base-content border-b-2 border-b-base-100 text-base-100 outline-none body py-2 max-w-[30ch] " type="email" name="email" placeholder="Enter your email here" />
                        <button className="flex items-center text-base-content bg-base-100 px-7 py-2  rounded-full font-semibold lead" type="submit" onClick={() => setIsLoading(true)}>
                            {
                                isLoading && !state.completed ?
                                    <span className="loading loading-md loading-infinity "></span> :
                                    <p>Join</p>
                            }
                        </button>
                    </form>
                    <p aria-live="polite" className={`${state?.error ? 'text-red-500' : 'text-green-500'}`}>
                        {state.msg}
                    </p>
                </div>
            </div>
        </section >
    )
}

export default NewsLetterSection;
