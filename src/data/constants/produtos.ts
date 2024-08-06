import Produto from '@/data/model/Produto';

const produtos: Produto[] = [
    {
        id: 1,
        nome: 'Full Pice',
        descricao: 'Regular Ticket',
        preco: 20,
        imagem: '/app/assets/Ticket.jpg',
    },
    {
        id: 2,
        nome: 'Student',
        descricao: 'Student only',
        preco: 10,
        imagem: '/src/app/assets/Ticket.jpg',
    },
    {
        id: 3,
        nome: 'Senior',
        descricao: 'People with 60s or more',
        preco: 10,
        imagem: '/src/app/assets/Ticket.jpg',
    },
    {
        id: 4,
        nome: 'Vip',
        descricao:'Vit Sits',
        preco: 25,
        imagem: '/src/app/assets/Ticket.jpg',
    },
    {
        id: 5,
        nome: 'Special',
        descricao: 'People whos use wheelsChairs',
        preco: 10,
        imagem: '/src/app/assets/Ticket.jpg',
    },
]

export default produtos;