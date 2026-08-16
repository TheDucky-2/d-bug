

export interface SubscriptionPlan{
    name: string;
    price: number;
    mostPopular? : boolean;
    description: string;
    features: string[]
}