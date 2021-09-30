module.exports = {

    
    criarStringDePerfil(perfilList) {
        let perfis = '#';
        for (let i = 0; i < perfilList.length; i++) {
            perfis = perfis + '  #' + perfilList[i].nome;
        }
        return perfis
    }
}
