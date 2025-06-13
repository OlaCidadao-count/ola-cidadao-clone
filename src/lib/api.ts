// /**
//  * API UTILITÁRIA PARA CONSUMO DO BACKEND DJANGO
//  *
//  * Como usar:
//  *
//  * 1. Crie funções para cada endpoint do backend.
//  * 2. Importe e use essas funções nos componentes/páginas React.
//  *
//  * Exemplos:
//  *
//  * // Exemplo de login:
//  * export async function login(username: string, password: string) {
//  *   return fetchApi('/api/login/', {
//  *     method: 'POST',
//  *     body: JSON.stringify({ username, password }),
//  *     headers: { 'Content-Type': 'application/json' }
//  *   });
//  * }
//  *
//  * // Exemplo de uso em um componente:
//  * import { login } from '@/lib/api';
//  *
//  * async function handleLogin() {
//  *   try {
//  *     const response = await login('usuario', 'senha');
//  *     // Trate o login (salve token/cookie, etc)
//  *   } catch (err) {
//  *     // Trate o erro
//  *   }
//  * }
//  */

// const API_URL = process.env.NEXT_PUBLIC_API_URL;

// export async function fetchApi(endpoint: string, options: RequestInit = {}) {
//   const response = await fetch(`${API_URL}${endpoint}`, {
//     ...options,
//     credentials: 'include', // Inclui cookies na requisição
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json',
//       ...options.headers,
//     },
//   });

//   if (!response.ok) {
//     if (response.status === 403) {
//       throw new Error('Acesso negado. Esta rota requer autenticação.');
//     }
//     throw new Error(`Erro na requisição: ${response.status}`);
//   }

//   // Verifica o tipo de conteúdo da resposta
//   const contentType = response.headers.get('content-type');
//   if (contentType && contentType.includes('application/json')) {
//     return response.json();
//   }
  
//   // Se não for JSON, retorna o texto
//   return response.text();
// }

// // Funções auxiliares para cada método HTTP
// export const api = {
//   get: (endpoint: string) => 
//     fetchApi(endpoint, { method: 'GET' }),

//   post: <T>(endpoint: string, data:  T) =>
//     fetchApi(endpoint, {
//       method: 'POST',
//       body: JSON.stringify(data),
//     }),

//   put: <T>(endpoint: string, data: T) =>
//     fetchApi(endpoint, {
//       method: 'PUT',
//       body: JSON.stringify(data),
//     }),

//   delete: (endpoint: string) =>
//     fetchApi(endpoint, { method: 'DELETE' }),
// }; 