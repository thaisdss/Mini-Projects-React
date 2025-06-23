export const resultMessages = [
  {
    condition: (percentage: number) => percentage === 0,
    message: "Infelizmente seu conhecimento sobre mulheres notáveis na história é muito baixo."
  },
  {
    condition: (percentage: number) => percentage < 50,
    message: "Seu conhecimento sobre mulheres notáveis na história pode melhorar."
  },
  {
    condition: (percentage: number) => percentage < 100,
    message: "Bom trabalho! Você tem um conhecimento razoável sobre mulheres notáveis na história."
  },
  {
    condition: (percentage: number) => percentage === 100,
    message: "Perfeito! Você tem um conhecimento muito bom sobre mulheres notáveis na história."
  }
]