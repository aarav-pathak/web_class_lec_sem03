class BankAccount {
    owner;
    #balance;
  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    this.#balance -= amount;
  }

  getbalance(){
     return this.#balance
  }
}

const account = new BankAccount("Vikas", 1000);

account.deposit(500);

console.log(account.balance); // 1500

console.log(account.getbalance())




// only public and private access modifier
//  balance=2000  (public access modifier
//  #balance= 2000 ( private access modifier