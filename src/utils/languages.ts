export const languages = [
    {
        code : "uz",
        title: "๐บ๐ฟ O'zbekcha",
    },
    {
        code : "ru",
        title: "๐ท๐บ ะ ัััะบะธะน",
    },
    {
        code : "en",
        title: "๐บ๐ธ English",
    }
]

export const getLangCode = (lang: string | undefined): string | undefined => {
    if (!lang) return undefined;
    const langCode = languages.find(item => item.title === lang);
    return langCode?.code;
}