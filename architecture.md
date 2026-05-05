## 🏗️ architecture.md

### **Arquitetura do Frontend**
O sistema foi desenhado para ser uma SPA (Single Page Application) leve, consumindo uma API de alta performance via Octane/Swoole.

#### **1. Gerenciamento de Dados**
*   **TanStack Query**: Utilizado para *caching* e sincronização do estado do servidor. Isso garante que os dados do dashboard (como o contador de cliques) estejam sempre atualizados sem re-renderizações desnecessárias.

#### **2. Visualização de Dados (Engine)**
*   **Leaflet Engine**: O mapa de calor processa coordenadas de latitude/longitude dinamicamente, renderizando círculos de intensidade proporcional ao volume de cliques em cada região.
*   **Recharts**: Implementação de gráficos de barras reativos que se ajustam automaticamente ao redimensionamento da tela.

#### **3. Interface e Experiência (UI/UX)**
*   **Atomic Design**: Componentes como `TrendingCard` e `AnalyticsHeader` são isolados para facilitar a manutenção.
*   **Micro-interações**: O uso de `lucide-react` para feedback visual (ícones de copiar, trending e status) melhora a percepção de um sistema "vivo".
