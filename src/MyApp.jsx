import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header/Header.jsx";
import Input from "./components/Input/Input.jsx";

function App() {
  const [CharacterName, setCharacterName] = useState("");
  const [CharacterAbility, setCharacterAbility] = useState("");

  useEffect(() => {
    // Використовуйте асинхронну функцію всередині useEffect для отримання даних
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        const firstPokemon = response.data.results[0]; // Адаптуйте індекс за потребою

        setCharacterName(firstPokemon.name);
        setCharacterAbility(firstPokemon.ability.name); // Адаптуйте цю властивість за потребою
      } catch (error) {
        console.error("Помилка при отриманні даних:", error);
      }
    };

    fetchData();
  }, []); // Порожній масив залежностей означає, що цей ефект виконається лише один раз після початкового рендерингу

  return (
    <>
      <Header CharacterName={CharacterName} CharacterAbility={CharacterAbility} />
      <Input />
    </>
  );
}

export default App;
