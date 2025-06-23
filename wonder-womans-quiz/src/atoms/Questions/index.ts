import { atom } from "jotai"
import { questions } from "../../constants/questions"

export const currentQuestionIdAtom = atom(1)

export const totalQuestionsAtom = atom(questions.length)

export const hitsAtom = atom(0)

export const nextQuestionAtom = atom(null, (get, set) => {
  set(currentQuestionIdAtom, get(currentQuestionIdAtom) + 1)
})

export const resetQuestionsAtom = atom(null, (_, set) => {
  set(currentQuestionIdAtom, 1)
  set(hitsAtom, 0)
})

export const currentQuestionAtom = atom((get) => {
  return questions.find((question) => question.id === get(currentQuestionIdAtom))
})