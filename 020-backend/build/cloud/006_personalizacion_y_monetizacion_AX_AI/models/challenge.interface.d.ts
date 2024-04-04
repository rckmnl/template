export interface IChallenge {
    cha_id: string;
    cha_company_id: string;
    cha_image: string;
    cha_title: string;
    cha_description: string;
    cha_system_requirements: string;
    cha_category: string;
    cha_type: string;
    cha_price: string;
    cha_participants: string;
    cha_time: string;
    cha_timeExpiration: string;
    cha_questions: Question[];
    cha_link: string;
    cha_specificTask: string;
    cha_question: string;
}
interface Question {
    question: string;
    answer: Answer[];
}
interface Answer {
    country: string;
    correct: boolean;
}
export {};
