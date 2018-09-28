module.exports =  function makeExchange(currency) {
    const result = {};
    if (currency > 10000) {
        result.error = 'You are rich, my friend! We don\'t have so much coins for exchange'; 
    } else if (currency > 0) {
        const h = Math.floor(currency / 50),
              q = Math.floor((currency % 50) / 25),
              d = Math.floor(((currency % 50) % 25) / 10),
              n = Math.floor((((currency % 50) % 25) % 10) / 5),
              p = Math.floor((((currency % 50) % 25) % 10) % 5);
        if (h) {
            result["H"] = h;
        }
        if (q) {
            result["Q"] = q;
        }
        if (d) {
            result["D"] = d;
        }
        if (n) {
            result["N"] = n;
        }
        if (p) {
            result["P"] = p;
        }
    }    
    return result;
