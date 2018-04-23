export default (state = [], action) => {
  let qIndex
  switch(action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote]
    case "REMOVE_QUOTE":
      let quotes = state.filter(q => q.id !== action.quoteId)
      return quotes
    case "UPVOTE_QUOTE":
      qIndex = state.findIndex(q => q.id === action.quoteId)
      return state.map( (el, index) => index === qIndex ? {...el, votes: el.votes + 1} : el )
    case "DOWNVOTE_QUOTE":
      qIndex = state.findIndex(q => q.id === action.quoteId)
      return state.map( (el, index) => {
        if (index === qIndex) {
          if (el.votes === 0) {
            return el
          } else {
            return {...el, votes: el.votes - 1}
          }
        }
      })
    default:
      return state;
  }
}
