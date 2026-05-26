import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');

  const loadUsers = async () => {
    try {
      console.log('Buscando usuários...');

      const response = await fetch('http://localhost:3000/users');

      console.log('Status:', response.status);
      console.log('URL:', response.url);

      const text = await response.text();

      console.log('Resposta recebida:');
      console.log(text);

      const data = JSON.parse(text);

      setUsers(data);

    } catch (error) {
      console.error('ERRO AO CARREGAR USUÁRIOS:');
      console.error(error);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const createUser = async () => {
    try {
      await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name })
      });

      setName('');
      loadUsers();

    } catch (error) {
      console.error('ERRO AO CRIAR USUÁRIO:');
      console.error(error);
    }
  };

  return (
  <div style={{
    minHeight: '100vh',
    backgroundColor: '#f4f6f8',
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    color: '#111'
  }}>
    <div style={{
      maxWidth: '600px',
      backgroundColor: '#fff',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.12)'
    }}>
      <h1 style={{ color: '#111', marginBottom: '25px' }}>
        Projeto Observability
      </h1>

      <input
        type="text"
        placeholder="Digite um nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: '10px',
          width: '250px',
          marginRight: '10px',
          border: '1px solid #555',
          borderRadius: '4px',
          color: '#111'
        }}
      />

      <button
        onClick={createUser}
        style={{
          padding: '10px 16px',
          backgroundColor: '#005bbb',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        Criar Usuário
      </button>

      <h2 style={{ color: '#111', marginTop: '30px' }}>
        Lista de Usuários
      </h2>

      <ul style={{ color: '#111', fontSize: '18px', lineHeight: '1.6' }}>
        {users.map((user) => (
          <li key={user.id}>
            {user.id} - {user.name}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

}

export default App;
