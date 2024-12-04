import React, { useEffect } from 'react';
import api from './api'; // Verifique se a instância da API está configurada corretamente

const SeedUsers = () => {
  useEffect(() => {
    const seedDatabase = async () => {
      const users = [
        {
          name: 'João Silva',
          email: 'joao.silva@example.com',
          password: 'senha123',
          age: 30,
        },
        {
          name: 'Maria Oliveira',
          email: 'maria.oliveira@example.com',
          password: 'senha123',
          age: 25,
        },
        // Adicione outros usuários conforme necessário
      ];

      try {
        for (const user of users) {
          const response = await api.post('/users', {
            name: user.name,
            email: user.email,
            password: user.password,
            age: user.age,
          });
          console.log('Usuário criado:', response.data);
        }
      } catch (error) {
        console.error('Erro ao criar usuários:', error);
      }
    };

    seedDatabase();
  }, []);

  return null;
};

export default SeedUsers;
