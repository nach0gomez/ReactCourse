const FACTS_ENDPOINT = 'https://catfact.ninja/fact'

/**
 * Obtiene un hecho aleatorio sobre gatos
 * @returns {Promise<string>} Hecho sobre gatos
 */
export const getRandomCatFact = async () => {
  const res = await fetch(FACTS_ENDPOINT)
  if (!res.ok) {
    throw new Error('Error al obtener el hecho del gato')
  }
  const data = await res.json()
  return data.fact
}
