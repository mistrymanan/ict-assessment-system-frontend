export class UserQuestion {
    id: string;
    title: string;
    slug: string;
    allowedLanguages: string[];
    totalPoints: number;
    showExpectedOutput: boolean;
    description: string;
    currentStatus: string;
    currentScore: number; 
}