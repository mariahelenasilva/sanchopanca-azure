# Sistema de Gerenciamento de Usuários - App Sancho Pança

## Funcionalidades Implementadas

### 1. **Gerenciamento de Usuários com Porcentagem**
- Visualização do progresso de leitura de cada usuário
- Cálculo automático de porcentagem baseado na página atual vs total de páginas
- Exibição de progresso médio por usuário em todos os livros

### 2. **Filtros por Encontros na API**
- Filtro por tipo de encontro (Online/Presencial)
- Filtro por encontro específico
- Integração com as APIs:
  - `EncontrosControllers/ListarEncontrosAtivos`
  - `LivrosControllers/ListarLivros`
  - `UsuariosControllers/ListarUsuarios`
  - `LeiturasControllers/ListarLeituras`

### 3. **Busca de Participantes por Encontro**
- Identificação automática de usuários que estão participando de encontros específicos
- Verificação de leituras registradas para o livro do encontro
- Lista detalhada de participantes com progresso individual

### 4. **Busca Avançada**
- Busca por nome, email ou nome de usuário
- Filtro por tipo de encontro
- Filtro por encontro específico
- Filtro por progresso mínimo (10%, 25%, 50%, 75%, 100%)
- Limpeza de filtros com um clique

### 5. **Visualizações e Estatísticas**
- **Estatísticas Gerais:**
  - Total de usuários filtrados
  - Número de encontros ativos
  - Total de leituras registradas

- **Gráfico de Pizza:**
  - Progresso médio por encontro
  - Número de participantes por encontro
  - Cores diferenciadas para cada encontro

- **Lista de Encontros:**
  - Informações detalhadas de cada encontro
  - Progresso médio dos participantes
  - Visualização das barras de progresso individuais

### 6. **Interface Responsiva**
- Design adaptável para diferentes tamanhos de tela
- Componentes organizados em grid responsivo
- Navegação intuitiva com ícones

## Estrutura dos Componentes

### `GerenciarAdm.jsx`
- Componente principal que gerencia todo o sistema
- Integração com APIs
- Lógica de filtros e cálculos
- Renderização de gráficos e listas

### `BuscaAvancada.jsx`
- Componente dedicado para busca avançada
- Múltiplos filtros combináveis
- Interface intuitiva para pesquisa

## APIs Utilizadas

```javascript
// Endpoints principais
GET /api/EncontrosControllers/ListarEncontrosAtivos
GET /api/LivrosControllers/ListarLivros
GET /api/UsuariosControllers/ListarUsuarios
GET /api/LeiturasControllers/ListarLeituras
```

## Cálculo de Progresso

```javascript
const calcularProgressoUsuario = (usuarioId, livroId) => {
  const leitura = leituras.find(l => l.usuario_id === usuarioId && l.livro_id === livroId);
  if (!leitura) return 0;
  
  const livro = livros.find(l => l.id === livroId);
  if (!livro || !livro.total_paginas) return 0;
  
  return Math.round((leitura.page_atual / livro.total_paginas) * 100);
};
```

## Filtros Disponíveis

### Filtros Simples
- **Tipo de Encontro:** Online, Presencial, Todos
- **Encontro Específico:** Seleção por encontro individual

### Filtros Avançados
- **Termo de Busca:** Nome, email ou nome de usuário
- **Tipo de Encontro:** Online, Presencial, Todos
- **Encontro Específico:** Seleção por encontro individual
- **Progresso Mínimo:** 10%, 25%, 50%, 75%, 100%

## Como Usar

1. **Acesse a página de Gerenciamento de Usuários**
2. **Use a Busca Avançada** para encontrar usuários específicos
3. **Aplique filtros** para refinar os resultados
4. **Visualize estatísticas** no painel superior
5. **Analise o gráfico** de progresso por encontro
6. **Selecione um encontro** para ver participantes específicos
7. **Monitore o progresso** individual de cada usuário

## Tecnologias Utilizadas

- **React** - Framework principal
- **Axios** - Cliente HTTP para APIs
- **Recharts** - Biblioteca para gráficos
- **React Icons** - Ícones da interface
- **CSS Grid/Flexbox** - Layout responsivo

## Responsividade

O sistema é totalmente responsivo e funciona em:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)

## Próximas Melhorias

- [ ] Exportação de relatórios em PDF/Excel
- [ ] Notificações em tempo real
- [ ] Dashboard com métricas avançadas
- [ ] Sistema de alertas para baixo progresso
- [ ] Integração com sistema de mensagens
