/*
Each user on average deducts 5 units from the network’s total data. To watch a movie you must connect 
to a network that has at least 10 remaining units of data.
*/

class Network {
  constructor(data, users) {
    this.data = data;
    this.users = users;
    this.dataToRunMovies = 10;
  }

  movieTime() {
    let dataUsed = this.users * 5;

    if (this.data - dataUsed >= this.dataToRunMovies) {
      return true;
    } else {
      return false;
    }
  }
}

/*const myNetwork = new Network(50, 8);
console.log(myNetwork.movieTime());*/

class Player {
  constructor(name, hitsPerMinute) {
    this.name = name;
    this.hitsPerMinute = hitsPerMinute;
    this.balloonCount = 100;
  }

  status() {
    console.log(`Player: ${this.name} -- Balllons Left: ${this.balloonCount}`);
  }
}

function balloonAttack(p1, p2) {
  p1.balloonCount -= p2.hitsPerMinute * 10;
  p2.balloonCount -= p1.hitsPerMinute * 10;

  p1.status();
  p2.status();
  if (p1.balloonCount > p2.balloonCount) {
    return p1.name;
  } else if (p2.balloonCount > p1.balloonCount) {
    return p2.name;
  } else {
    return "Tie";
  }
}

/*

const player1 = new Player("p1", 7);
const player2 = new Player("p2", 7);

console.log(balloonAttack(player1, player2));

*/

class ShiftCipher {
  constructor(shift) {
    this.shift = shift;
  }

  encrypt(messageToEncrypt) {
    let messageCapitalized = messageToEncrypt.toUpperCase();
    let encryptedMessage = [];

    for (var i = 0; i < messageCapitalized.length; i++) {
      let workingChar = messageCapitalized.charCodeAt(i);
      let addedChar = workingChar + this.shift;
      let lessChar = 0;

      //if addedChar is greater than the letter 'Z'
      if (addedChar > 90) {
        lessChar = addedChar - 90;
        lessChar = 64 + lessChar; //start over at A
      }

      //space character
      if (workingChar != 32) {
        if (lessChar > 0) {
          encryptedMessage.push(String.fromCharCode(lessChar));
        } else {
          encryptedMessage.push(String.fromCharCode(workingChar + this.shift));
        }
      } else {
        encryptedMessage.push(String.fromCharCode(workingChar));
      }
    }

    return encryptedMessage.join("");
  }
  decrypt(messageToDecrypt) {
    let decryptedMessage = [];

    let messageCapitalized = messageToDecrypt.toUpperCase();

    for (var i = 0; i < messageCapitalized.length; i++) {
      let workingChar = messageCapitalized.charCodeAt(i);
      let subChar = workingChar - this.shift;
      let lessChar = 0;

      //if addedChar is greater than the letter 'Z'
      if (subChar < 65) {
        lessChar = 65 - subChar;
        lessChar = 91 - lessChar; //start over at Z
      }

      //space character
      if (workingChar != 32) {
        if (lessChar > 0) {
          decryptedMessage.push(String.fromCharCode(lessChar));
        } else {
          decryptedMessage.push(String.fromCharCode(workingChar - this.shift));
        }
      } else {
        decryptedMessage.push(String.fromCharCode(workingChar));
      }
    }

    return decryptedMessage.join("").toLowerCase();
  }
}

const myEncrypt = new ShiftCipher(1);
//console.log(myEncrypt.alphabet["I"]);
let encryptedString = myEncrypt.encrypt("a");
console.log(encryptedString);

//let decryptedString = myEncrypt.decrypt(encryptedString);
let decryptedString = myEncrypt.decrypt("a");
console.log(decryptedString);
