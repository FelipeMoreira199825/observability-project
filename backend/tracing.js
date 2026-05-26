const { NodeSDK } = require('@opentelemetry/sdk-node');
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-grpc');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
const { resourceFromAttributes } = require('@opentelemetry/resources');
const { SemanticResourceAttributes } = require('@opentelemetry/semantic-conventions');

const traceExporter = new OTLPTraceExporter({
  url: 'http://localhost:4317',
});

const sdk = new NodeSDK({
  resource: resourceFromAttributes({
    [SemanticResourceAttributes.SERVICE_NAME]: 'backend-monitoramento',
  }),

  traceExporter,

  instrumentations: [
    getNodeAutoInstrumentations(),
  ],
});

sdk.start();

console.log(
  'OpenTelemetry Inicializado com Sucesso - Serviço: backend-monitoramento'
);