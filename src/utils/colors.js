export const colorType = (type)=>{
    switch (type) {
      case "grass":
        return {backgroundColor: "green"}
      
      case "fire":
          return {backgroundColor: "red"}
  
      case "bug":
        return {backgroundColor: "yellowgreen"}
  
      case "water":
        return {backgroundColor: "darkblue"}
  
      case "rock":
        return {backgroundColor: "darkgoldenrod"}
  
      case "steel":
        return {backgroundColor: "steelblue"}
  
      case "flying":
        return {backgroundColor: "lightgray"}
  
      case "fairy":
        return {backgroundColor: "pink"}
  
      case "electric":
        return {backgroundColor: "yellow"}
  
      case "poison":
        return {backgroundColor: "purple"}
  
      case "ghost":
        return {backgroundColor: "darkpurple"}
  
      case "psychic":
        return {backgroundColor: "#F11D68"}
      
      case "dragon":
        return {backgroundColor: "#aa00ff"}
  
      case "ground":
        return {backgroundColor: "#ffb700"}
  
      case "normal":
        return {backgroundColor: "grey"}
  
      case "fighting":
        return {backgroundColor: "#ad1f4e"}
  
      case "ice":
        return {backgroundColor: "#9ef8fa"}
  
      case "dark":
        return {backgroundColor: "#454854"}
      
  
      default: return null
    }
  }