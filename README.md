# 🛡️ FireSafe Hub | Painel de Ocorrências e Gestão de Prevenção

![Status](https://img.shields.io/badge/Status-Desenvolvimento-orange)
![Version](https://img.shields.io/badge/Versão-2.0.0-blue)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

Uma plataforma completa para gestão, monitoramento e auditoria de sistemas de prevenção contra incêndio. Projetada para ser robusta, intuitiva e segura, permitindo o controle total de ativos e o registro preciso de ocorrências.

---

## 🚀 Funcionalidades Principais

### 🔒 Segurança e Acesso
- **Painel de Acesso Restrito:** Interface de login segura protegida por criptografia de sessão local (Senha padrão: `paineldeocorrencias123`).
- **Visualização Oculta:** Opção de visualizar/esconder a senha para maior precisão no acesso.

### 📊 Monitoramento de Ocorrências (Dashboard)
- **Painel de Alarmes:** Acompanhamento em tempo real de disparos e alarmes.
- **Gestão de Prioridades:** Classificação de ocorrências (Baixa, Média, Alta, Crítica).
- **Rastreabilidade Completa:** Registro de HT7 (Portaria), HT9 (Circulante), protocolos seguidos e decisões tomadas.
- **Logs de Auditoria:** Histórico imutável de alterações para conformidade.

### 🧯 Gestão de Ativos
- **Inventário de Extintores:** Controle detalhado de patrimônio, selo, tipo, carga e datas de validade/manutenção.
- **Monitoramento de Mangueiras:** Registro de hidrantes, tubulações, tipos de lance e vistorias.
- **Rede de Detectores:** Identificação por MAC, endereço físico e localização lógica por prédio/setor.
- **Sistemas de Sonorização:** Gestão de amplificadores e grupos de som para evacuação.

### 🧑‍🚒 Brigada de Incêndio e Treinamentos
- **Controle Acadêmico:** Registro de notas (Módulo, Prova Teórica), frequências e aproveitamento.
- **Status de Situação:** Monitoramento de integrantes ativos/inativos.
- **Cronograma de Cursos:** Datas futuras e prazos de reciclagem.

### 📥 Exportação e Relatórios
- **Excel Integrado:** Geração dinâmica de planilhas formatadas com suporte a múltiplas abas (Ocorrências, Extintores, Mangueiras, Detectores, Amplificadores e Brigada).
- **Auditoria de Inspeções:** Visualização de dados históricos e inspeções antigas.

---

## 🛠️ Tecnologias Utilizadas

- **Frontend:** React 18+ com Vite para alta performance.
- **Estilização:** Tailwind CSS (Arquitetura Utilitária).
- **Tipagem:** TypeScript para máxima segurança em tempo de desenvolvimento.
- **Animações:** Framer Motion (Motion) para interfaces fluidas.
- **Relatórios:** ExcelJS para manipulação robusta de dados em arquivos .xlsx.
- **Ícones:** Lucide React para uma UI limpa e moderna.

---

## 💻 Como Rodar o Projeto

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Acesse no navegador:**
   O projeto estará rodando em `http://localhost:3000`.

---

## 📁 Estrutura de Pastas

- `src/components/`: Componentes modulares de UI e Visões específicas.
- `src/lib/`: Bibliotecas utilitárias (Ex: Lógica de exportação Excel).
- `src/data/`: Bases de dados estáticas e mockups para inicialização rápida.
- `src/*.ts`: Definições de tipos globais e interfaces.

---

## 🎨 Design System

O projeto utiliza o **Cosmic Slate Theme** e o **Safety Red Accent**:
- **Tipografia:** Inter (Interface) e JetBrains Mono (Dados Técnicos).
- **UX:** Foco em baixa carga cognitiva para operadores em situações de emergência.
- **Responsividade:** Totalmente adaptado para tablets e desktops.

---

## 📄 Licença

Este projeto é de uso corporativo para gestão de segurança predial. Todos os direitos reservados.

---
*Desenvolvido com foco na vida e na segurança.* 🛡️
