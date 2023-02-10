export type Review = "unsatisfied" | "neutral" | "satisfied" | "very_satisfied"

export type Form = {
    name: string;
    email: string;
    review: Review;
    comment: string;
}