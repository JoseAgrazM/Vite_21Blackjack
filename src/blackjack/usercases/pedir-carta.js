/**
 *
 * @param {Aarray<String>} deck Es un array de String
 * @returns {String}vRetorna una carta tipo String. Ej: 'AC' , '10S'
 */

export const pedirCarta = deck => {
	if (!deck || deck.length === 0) {
		throw 'No hay cartas en el deck';
	}
	return deck.pop();
};
