

// 1. Criação do Provedor (WebTracerProvider)
const provider = new WebTracerProvider({
  resource: new Resource({
    'service.name': 'frontend-monitoramento', // Nome que vai aparecer no Jaeger
  }),
});

// 2. Criação do Exportador apontando para o seu coletor
const exporter = new OTLPTraceExporter({
  url: 'http://localhost:4318/v1/traces', // Porta HTTP do Otel Collector
});

// 3. ✅ O JEITO CERTO (Linha 15): O "addSpanProcessor" deve ser chamado no PROVIDER
provider.addSpanProcessor(new SimpleSpanProcessor(exporter));

// 4. Registra o provedor globalmente
provider.register();

console.log("O arquivo de tracing foi carregado com sucesso!");