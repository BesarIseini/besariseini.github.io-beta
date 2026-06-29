import {QuestionType} from "../../../src/types/QuestionType.ts";


const demo = {
    questions: [
    {
        type: QuestionType.ORDERING,
        obj: {
            question: "Represent the number -0.75 in single precision floatingpoint format:",
            points: 20,
            negativePoints: 10,
            description: "",
            hasImage: false,
            imageLink: "",
            required: false,
            renderType: "horizontal",
            options: [
                "1", "2", "3", "4", "5", "a", "b", "c", "d", "e", "testingLmao"
            ],
            correct: ["1", "2", "3", "4", "5"],
            warningMessage: []
        }
    }
],
    hasTimer: true,
     timer: 600,
    quizSettings: {
        shuffleQuestions: false,
        title: "Version 1.2 - D&D, Image Hotspots",
        courseId: "DM",
        duration: 600,
        date: new Date("2026-07-05"),
        description: "This is a demo containing new Ordering, Drag & Drop and Image Hotspots question types added in v1.2.0 ",
        id: 2,
        type: "Practical",
        quizVersion: 14,
        // courseName: "Demo"
    }
}

export default demo;