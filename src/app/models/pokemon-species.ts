export interface PokemonSpecies {
  "base_happiness": number,
  "capture_rate": number,
  "color": {
    "name": string,
    "url": string
  },
  "egg_groups": Array<any>,
  "evolution_chain": {
    "url": string
  },
  "evolves_from_species": any,
  "flavor_text_entries": Array<{
    "flavor_text": string,
    "language": {
      "name": string,
      "url": string
    },
    "version": {
      "name": string,
      "url": string
    }
  }>,


  "form_descriptions": Array<any>,
  "forms_switchable": boolean,
  "gender_rate": number,
  "genera": Array<{ "genus": string,
    "language": {
      "name": string,
      "url": string
    } }>,

  "generation": {
    "name": string,
    "url": string
  },
  "growth_rate": {
    "name": string,
    "url": string
  },
  "habitat": {
    "name": string,
    "url": string
  },
  "has_gender_differences": boolean,
  "hatch_counter": number,
  "id": number,
  "is_baby": boolean,
  "is_legendary": boolean,
  "is_mythical": boolean,
  "name": string,
  "names": Array<{
    "language": {
      "name": string,
      "url": string
    },
    "name": string
  }>,


  "order": number,
  "pal_park_encounters": Array<any>
  "pokedex_numbers": Array<any>
  "shape": {
    "name": string,
    "url": string
  },
  "varieties": Array<any>
}
