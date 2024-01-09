export const convertTimeStampToDate = (str: string) => {
    const date = new Date(str);
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    };
    return date.toLocaleDateString('en-US', options);
}
