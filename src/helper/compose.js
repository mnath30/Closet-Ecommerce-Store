const compose=(...funct)=>(state,productdata)=>funct.reduce((accumulatedProducts,currentFunction)=>currentFunction(state,accumulatedProducts),productdata)

export {compose}