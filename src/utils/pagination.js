 export const paginationLogic = (pokemonsFilter, currentPage) => {
    // cantidad de pokemons por pagina
    const pokemonPerPage = 12;

    console.log("Otra paginacion ")

    // Pokemons que se van a mostrar en la pagina actual
    const sliceStart = (currentPage - 1) * pokemonPerPage
    const sliceEnd = sliceStart + pokemonPerPage
    const pokemonsInPage = pokemonsFilter.slice(sliceStart, sliceEnd)

    // Ultima Pagina
    const lastPage = Math.ceil(pokemonsFilter.length / pokemonPerPage) || 1 

    // Bloque Actual
    const pagesPerBlock = 5
    const actualBlock = Math.ceil(currentPage / pagesPerBlock)

    // Paginas que se van a mostrar en el Bloque Actual
    const pagesInBlock = []
    const minPage = (actualBlock * pagesPerBlock - pagesPerBlock) + 1
    const maxPage = actualBlock * pagesPerBlock
   
    for(let i = minPage; i <= maxPage; i++) { 
    if(i <= lastPage) {
      pagesInBlock.push(i)
    }
  }
  return {pagesInBlock, lastPage, pokemonsInPage}
}
