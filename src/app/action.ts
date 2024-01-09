'use server'

import { serverClient } from "./_trpc/serverClient"

export async function subNewsLetter(prevState: any, formData: FormData) {
    let mailid = formData.get('email');
    console.log(mailid as string)
    let result = await serverClient.subNewsLetter(mailid as string)
    console.log(result)
    return {
        completed: true,
        error: result.error,
        msg: result.msg
    }
}
