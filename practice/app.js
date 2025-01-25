function CreatUser(username, score) {
  this.username = username;
  this.score = score;
  this.info = function () {
    return `${this.username} has a score of ${this.score}`;
  };
}

const user1 = new CreatUser("John", 100);

console.log(user1.info().__proto__);
