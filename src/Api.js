const ADVANCE_AMOUNT = 25
const TIPS = [
  {
    percent: 5,
    trees: 5,
  },
  {
    percent: 10,
    trees: 10,
  },
  {
    percent: 15,
    trees: 30,
  },
  {
    percent: 20,
    trees: 40,
  },
]

export const fetchTips = async () => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          advanceAmount: ADVANCE_AMOUNT,
          tipOptions: TIPS,
        }),
      10
    )
  })
}
