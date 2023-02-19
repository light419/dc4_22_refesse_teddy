function alphabetdecroissant() {
    let alphabet = '';
    for (let i = 'z'.charCodeAt(0); i >= 'a'.charCodeAt(0); i--) {
      alphabet += String.fromCharCode(i);
    }
    console.log(alphabet);
  }