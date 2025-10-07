let opcion;
let seguir = true;

const pokemones = [
  {
    nombre: "Pikachu",
    nivel: 25,
    tipo: ["Eléctrico"],
    foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    hp: 55,
    hp_total: 55,
    evolucion: true,
  },
  {
    nombre: "Charmander",
    nivel: 12,
    tipo: ["Fuego"],
    foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    hp: 39,
    hp_total: 39,
    evolucion: true,
  },
  {
    nombre: "Bulbasaur",
    nivel: 15,
    tipo: ["Planta", "Veneno"],
    foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    hp: 45,
    hp_total: 45,
    evolucion: true,
  },
  {
    nombre: "Squirtle",
    nivel: 15,
    tipo: ["Agua"],
    foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    hp: 45,
    hp_total: 45,
    evolucion: true,
  },
];

do {
  opcion = prompt(
    "¿Qué desea hacer?\n a) Mostrar pokemones\n b) Cargar nuevo pokémon\n c) Restar HP\n d) Salir"
  ).toLowerCase();

  switch (opcion) {
    case "a":
      console.log("=== POKEMONES CARGADOS ===");
      for (let i = 0; i < pokemones.length; i++) {
        console.log(
          `${i + 1}. ${pokemones[i].nombre} | Nivel: ${pokemones[i].nivel} | HP: ${pokemones[i].hp}/${pokemones[i].hp_total}`
        );
      }
      break;

    case "b":
      let seguir_cargando = true;
      do {
        const nuevoPokemon = {
          nombre: prompt("Ingrese el nombre del Pokémon:"),
          nivel: Number(prompt("Ingrese el nivel del Pokémon:")),
          tipo: prompt("Ingrese los tipos (separados por coma):").split(","),
          foto: prompt("Ingrese la URL de la foto:"),
          hp_total: Number(prompt("Ingrese el HP total:")),
          hp: 0,
          evolucion: prompt("¿Tiene evolución? (si/no)").toLowerCase() === "si",
        };
        nuevoPokemon.hp = nuevoPokemon.hp_total;

        pokemones.push(nuevoPokemon);
        seguir_cargando = prompt("¿Desea agregar otro Pokémon? (si/no)").toLowerCase() === "si";
      } while (seguir_cargando);
      break;

    case "c":
      let lista = "Elija el número del Pokémon para restar HP:\n";
      for (let i = 0; i < pokemones.length; i++) {
        lista += `${i + 1}. ${pokemones[i].nombre} (HP: ${pokemones[i].hp}/${pokemones[i].hp_total})\n`;
      }

      let indice = Number(prompt(lista)) - 1;
      if (indice >= 0 && indice < pokemones.length) {
        let resta = Number(prompt("¿Cuánto HP desea restar?"));
        pokemones[indice].hp -= resta;
        if (pokemones[indice].hp < 0) pokemones[indice].hp = 0;
        console.log(`${pokemones[indice].nombre} ahora tiene ${pokemones[indice].hp} HP.`);
      } else {
        console.log("Pokémon no válido.");
      }
      break;

    case "d":
      seguir = false;
      console.log("Programa finalizado.");
      break;

    default:
      console.log("Opción no válida. Intente nuevamente.");
      break;
  }

  // 🔹 Mostrar el array completo
  console.log("=== ARRAY COMPLETO DE POKEMONES ===");
  console.log(pokemones);

  // 🔹 Mostrar solo los nombres
  console.log("=== LISTA DE NOMBRES ===");
  const nombres = pokemones.map(p => p.nombre);
  console.log(nombres);

} while (seguir);
