export type SEO = {
    title: string;
    description: string;
    url: string;
    image: string;
}

export function createMetadata({
    title,
    description,
    url,
    image,
}: SEO) {
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url,
            type: "website",
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
