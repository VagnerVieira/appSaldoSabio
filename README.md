# appSaldoSabio

1) Primeiro clone o repositório

2) Instale dentro da pasta do projeto as depêndencias:
```bash
  npm install
```  

# Backend finanças App

3) Sincronize o banco abrindo seu cmd dentro da pasta do projeto e rodando:
```cmd
npx prisma migrate dev
```
- Após rodar o passo prisma migrate dev você pode olhar dentro da pasta prisma ele deve ter gerado um arquovo com nome `dev.db`

4) Agora pode rodar o projeto com ```yarn dev``` ou ```npm run dev```

* Sempre a api vai tentar rodar na porta ```3333```, exemplo: ```http://localhost:3333/login```

## Executar


```bash
  npx expo start
``` 
