/**
 *
 * @param {String} carta Ejemplo: 'AC' o '10S'
 * @returns {Number} Devuelve el valor de la carta en tipo numerico. Ejemplo: A = 11 , 10 = 10
 */

export const valorCarta = carta => {
	if (carta.length < 0 && carta.length > 3) {
		throw new Error(
			'La longitud del string tiene que ser mayor a 0 y menor a 3'
		);
	}

	const valor = carta.substring(0, carta.length - 1);
	return isNaN(valor) ? (valor === 'A' ? 11 : 10) : valor * 1;
};
