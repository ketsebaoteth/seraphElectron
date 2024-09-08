import { ref } from "vue";

export const projectsList = ref([])

export class Project {
    constructor(
        id,
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
        questions = []
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

export class Question {
    constructor(
        title = "question title",
        answers = [
            {
                answerDesc: "answer 1",
                isCorrect: true
            }
        ],
        hasImage = false,
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
