// app.js

const {Sequelize, DataTypes} = require('sequelize');
const config = require('./config/config.js');
const PedidoModel = require('./models/pedido.js');
const sequelize = new Sequelize(config.development);
const Pedido = PedidoModel(sequelize, DataTypes);
async function run() {

    try {
        //Cadastro de Pedidos
        const pedidoDanilo = await Pedido.create({
            cliente: "Danilo Farias",
            data: '11-10-2023',
            produto: "Sanduiche de queijo com lombo",
            valor: 6.00
        });

        const pedidoAlex = await Pedido.create({
            cliente: "Alex Lopes",
            data: '11-10-2023',
            produto: "Sanduiche de ricota",
            valor: 6.50
        });

        //console.log('Atendimento ID 1: ', atendimentoDanilo.toJSON());

        // Leitura dos Pedidos
        const pedidos = await Pedido.findAll();
        console.log('Pedidos Cadastrados:', pedidos); //.map(p => p.toJSON()));

        // Atualizacao de dados do Aluno
        /*const alunosAtualizados = await Alunos.update(
            {nome: 'Luciano Ribeiro Galhardo'},
            {where: {id: alunoCadastrado1.id}}
        );*/

        /*
        // Remocao do aluno 4
        const alunoRemovido = await Alunos.destroy({where: {id: alunoCadastrado4.id}});

        console.log(
            'Aluno Removido: ', alunoRemovido > 0 ? 'Removido com Sucesso' : 'ID não encontrado'
        );

        */

    } catch (error) {
        console.error('Erro: ', error.message);
        
    } finally {
        // Fechar conexão com banco de dados
        await Pedido.sequelize.close();
    }

}
run();