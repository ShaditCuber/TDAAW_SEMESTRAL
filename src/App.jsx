import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import RouterApp from '../Router';
import { UsuarioProvider } from './context/AuthContext';
import Layout from './components/Layout/Layout';

const queryClient = new QueryClient();


export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UsuarioProvider>
        <BrowserRouter>
          <Layout>
            <RouterApp />
          </Layout>
        </BrowserRouter>
      </UsuarioProvider>
    </QueryClientProvider>
  );
}