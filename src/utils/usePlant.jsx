
import jsonToPlantUml from 'json-to-plantuml';

export const usePlantCode = (initialNodes)=>{

 return jsonToPlantUml(initialNodes).then(function(result){return result})
}