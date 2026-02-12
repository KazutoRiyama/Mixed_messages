const astrology = {
    _sign: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],
    _luck: ['Very unlucky', 'Unlucky', 'lucky', 'very lucky'],
    _advice: ['have a beer', 'trust no one', 'take time for yourself', 'take it easy', 'go out of your comfort zone'],

    randomSign () {
        const index = Math.floor(Math.random() * this._sign.length);
        return this._sign[index];
    },


}

console.log(astrology.randomSign());