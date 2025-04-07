export type FAQType = {
    question: string;
    answer: string;
    bullets?: { id: number; text: string }[]
}