const accum = s => s.split('').map((el, index) => (el.toUpperCase() + el.toLowerCase().repeat(index))).join('-');