const CAT_ENDPOINT_PREFIX = 'https://cataas.com/cat'

/**
 * Obtiene la URL de una imagen de gato basada en una palabra
 * @param {string} text Texto que el gato dirá en la imagen
 * @returns {Promise<string>} URL de la imagen
 */
export const getCatImage = async (word) => {
  const res = await fetch(`${CAT_ENDPOINT_PREFIX}/says/${word}?json=true`)
  if (!res.ok) {
    throw new Error('Error al obtener la imagen del gato')
  }
  const catData = await res.json()
  const url = `${CAT_ENDPOINT_PREFIX}/${catData._id}/says/${word}`
  return url
}
