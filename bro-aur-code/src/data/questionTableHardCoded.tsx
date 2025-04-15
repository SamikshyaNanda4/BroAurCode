export type Questions = {
    id: number
    question: string
    status: "pending" | "processing" | "success" | "failed"
    difficulty:"Easy" | "Medium" | "High"
  }

  export const questions: Questions[] = [
    {
        id: 101,
        question: "Two Sum",
        status: "success",
        difficulty: "Easy",
      },
      {
        id: 102,
        question: "Add Two Numbers",
        status: "pending",
        difficulty: "Medium",
      },
      {
        id: 103,
        question: "Longest Substring Without Repeating Characters",
        status: "processing",
        difficulty: "Medium",
      },
      {
        id: 104,
        question: "Median of Two Sorted Arrays",
        status: "failed",
        difficulty: "High",
      },
      {
        id: 105,
        question: "Reverse Integer",
        status: "success",
        difficulty: "Easy",
      },
      {
        id: 106,
        question: "Zigzag Conversion",
        status: "pending",
        difficulty: "Medium",
      },
      {
        id: 107,
        question: "Valid Parentheses",
        status: "success",
        difficulty: "Easy",
      },
  ]
