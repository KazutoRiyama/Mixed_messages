const astrology = {
    _sign: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],
    _luck: ['Very unlucky', 'Unlucky', 'lucky', 'very lucky'],
    _advice: ['have a beer', 'trust no one', 'take time for yourself', 'take it easy', 'go out of your comfort zone'],

   
     // Returns a random sign different from the excluded one (if provided)
_getRandomSign(exclude = null) {
        let index;
        do {
            index = Math.floor(Math.random() * this._sign.length);
        }   while (exclude !== null && this._sign[index] === exclude);
        return this._sign[index];
    },
    
    // Returns one good + one bad sign compatibilty
    getCompatibility() {
        const good = this._getRandomSign();          //any sign is fine for 'good'
        const bad = this._getRandomSign(good);       // exclude the sign in 'good'

        return {
            goodWith: `You have **good compatibility** with: **${good}**`,
            badWith: `You have **bad compatibility** with: **${bad}**`
        };
    },
    getCompatibilityMessage() {
        const { goodWith, badWith } = this.getCompatibility();
        return `${goodWith}\n${badWith}`;
    },


    // daily compatibility, luck, advice
    getDaily() {
        const sign = this.getCompatibilityMessage();
        const luck = this._luck[Math.floor(Math.random() * this._luck.length)];
        const advice = this._advice[Math.floor(Math.random() * this._advice.length)];

        return `${sign}\nYou are ${luck} today, you should ${advice}`
    }
};


console.log(astrology.getDaily());

