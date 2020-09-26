export class Question {
    id: string;
    title: string;
    slug: string;
    allowedLanguages: string[];
    totalPoints: number;
    showExpectedOutput: boolean;
    description: string;
    solutionLanguage: string;
    solutionCode: string;
    testCases: {id:number|string, input:string, output: string}[];
}