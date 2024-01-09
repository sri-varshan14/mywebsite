'use server'

import { serverClient } from "./_trpc/serverClient"

export async function subNewsLetter(prevState: any, formData: FormData) {
    let mailid = formData.get('email');
    let result = await serverClient.subNewsLetter(mailid as string)
    return {
        completed: true,
        error: result.error,
        msg: result.msg
    }
}
