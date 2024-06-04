import { decrypt } from "@/actions/decrypt";
import axios from "axios";

export type State = {
  id: number;
  name: string;
}

const useFetchStates = async (): Promise<State[]> => {
  try{
    const response = await axios.get('https://dropdown-api.onrender.com/state');
    const data = response.data.map((state: any) => ({
      id: state.id,
      name: decrypt(state.name),
    }))
    return data;
  }catch(err){
    console.log("Erro ao buscar estados", err)
    return[];
  } 
}
 
export default useFetchStates;