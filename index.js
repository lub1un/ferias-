const prompt = require('prompt-sync')({ sigint: true });

const { criar, atualizar, remover, listar } = require("./atividades");

while (true) {
    console.log(
        "O que deseja fazer?\n1 - Criar\n2 - Listar\n3 - Atualizar\n4 - Remover\n5 - Sair\n"
    );
    let opcao = Number(prompt());

    switch (opcao) {
        case 1:
            criar();
            break;
        case 2: 
            listar();
            break
        case 3:
            atualizar()
            break
        case 4:
            remover()
            break
        case 5: 
            sair()
            process.exit()
        default:
            break;
    }
    module.exports = {
        criar,
        atualizar,
        remover,
        listar,
    };
    
}

