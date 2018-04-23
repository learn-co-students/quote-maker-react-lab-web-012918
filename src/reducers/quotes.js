export default (state = [], action) => {
  switch(action.type){
    case("ADD_QUOTE"):
      return state.concat(action.quote)
    case("REMOVE_QUOTE"):
      let filteredQuotes = state.filter(quote => quote.id !== action.quoteId)
      return filteredQuotes
    case("UPVOTE_QUOTE"):
      let upQuote = state.find(upQuote => upQuote.id === action.quoteId)
      let indexOfUpQuote = state.indexOf(upQuote)
      upQuote.votes++
      let newUpState = state.slice(0, indexOfUpQuote).concat(upQuote)
      return newUpState
    case("DOWNVOTE_QUOTE"):
      let quote = state.find(quote => quote.id === action.quoteId)
      if(quote.votes > 0){
        let indexOfQuote = state.indexOf(quote)
        quote.votes--
        let newDownState = state.slice(0, indexOfQuote).concat(quote)
        return newDownState
      }
      else{
        return state
      }

    default:
      return state
  }
}
