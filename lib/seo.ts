export type SEO = {
    title: string;
    description: string;
    url?: string;
    image?: string;
}

export function createMetadata({
    title,
    description,
    url = 'https://iam-soul.com/to-feel-again',
    image = 'https://i.ibb.co/svVTkGYm/Untitled-design.png',
}: SEO) {
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url,
            type: "website",
            locale: "he_IL", // or "he_IL" for Hebrew/Israel
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
            creator: "@Twitter",
        },
    };
}
