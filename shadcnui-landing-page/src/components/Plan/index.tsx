import { PlanContent } from "../PlanContent"

export const Plan = () => {
  return (
    <section className="flex flex-col items-center mt-12 max-md:p-8">
      <h1 className="text-6xl max-md:text-3xl font-bold text-center">Preço Simples e Transparente</h1>
      <p className="text-center text-zinc-400 md:text-xl max-w-3xl mt-8">Pra que inúmeros planos quando nós sabemos exatamente o que é melhor para você? Assine o nosso plano mensal Pro Premium VIP e garanta mensalmente um ebook novo de programação. E por menos de um café por dia.</p>
      <PlanContent 
      title="Plano Pro Premium Vip"
      description="Tudo que você precisa para seus estudos"
      price={29}
      type="monthly"
      features={[
        '1 ebook por mês',
        'Curadoria especial',
        'Acesso ilimitado',
        'Cancele a qualquer momento'
      ]}
      />
    </section>
  )
}