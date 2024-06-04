import styles from "./styles.module.scss"
import React, { SetStateAction, useEffect, useState } from "react";
import useFetchStates from "@/service/api";
import { SlList } from "react-icons/sl";



const City = () => {

  const [states, setStates] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    const fetchStates = async () => {
      const data = await useFetchStates();
      setStates(data);
    };

    fetchStates();
  }, []);

  const filteredStates = states.filter((state) =>
    state.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectCity = (city: SetStateAction<string>) => {
    setSelectedCity(city);
    setSearchTerm("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setSelectedCity(e.target.value);
  };

  return ( 
    <>
      <div className={styles.content}>
          <span>Cidade</span>
          <input type="text" value={selectedCity} onChange={handleInputChange} />
          <SlList className={styles.icon} size={20} color="#000" />
        </div>
        
        {searchTerm && (
          <div className={styles.dropdown}>
            {filteredStates.map((state) => (
              <div key={`${state.id}-${state.name}`} 
                className={styles.dropdownItem} 
                onClick={() => handleSelectCity(state.name)}>
                {state.name}
              </div>
            ))}
          </div>
        )}
    </>
   );
}
 
export default City;


