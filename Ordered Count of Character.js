const orderedCount = text => Array.from(new Set(text)).map(c => [c, text.match(new RegExp(c, 'g')).length]);