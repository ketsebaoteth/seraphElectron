import { ref } from "vue";
import Answer from "../answer.vue";

export const projectsList = ref([])

export class Question {
    constructor(
        title = "question title",
        answers = ref([
            {
                answerDesc: "answer 1",
                isCorrect: true
            }
        ]),
        hasImage = false,
        img = ref(null),
        imagePath = "https://boilerplate.png",
        imageExpandable = true,
        imageDownloadable = true,
        hasGraph = true,
        problem = {
            isQuestionWrong: false,
            hasNoAnswer: false,
            allAreAnswer: false,
        },
        graphSettings = {
            showXIntercept: false,
            showYIntercept: false,
            highlightPoint: [],
            showEquation: true,
        }
    ) {
        this.title = title;
        this.answers = answers;
        this.hasImage = hasImage;
        this.imagePath = imagePath;
        this.imageExpandable = imageExpandable;
        this.imageDownloadable = imageDownloadable;
        this.hasGraph = hasGraph;
        this.problem = problem;
        this.graphSettings = graphSettings;
    }
}


let sampleQuestion = new Question();
export class Project {
    constructor(
        id = `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
        name = "untitled",
        description = "no description has been provided",
        dateCreated = new Date(),
        grade = 9,
        chapter = 9,
        testYear = 2012,
        userData = [
            {
                attempts: 0,
                isFavorited: false,
                favoritedQuestions: [],
                lastScores: [
                    {
                        totalQuestionsAnswered: 0,
                        totalCorrectAnswers: 0,
                        totalWrongQuestions: 0,
                        missedQuestions: [],
                    }
                ]
            }
        ],
        questionCount = 1,
        questions = ref([sampleQuestion]),
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.dateCreated = dateCreated;
        this.grade = grade;
        this.chapter = chapter;
        this.testYear = testYear;
        this.userData = userData;
        this.questionCount = questionCount;
        this.questions = questions;
    }
}

