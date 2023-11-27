class Wallet{
    // declaring private attributes
    #balance=0;
    #translations=[];
    

    deposit(amount){
        this.#processDeposit(amount);
        this.#balance+=amount;
    }
    
    withdraw(amount){
        if(amount>this.#balance){
            console.log('Not Enough funds');
            return;
        }
        this.#balance-=amount;
        this.#processWithdraw(amount);
    }


    #processDeposit(amount){
        console.log(`Depositing ${amount}`);

        this.#translations.push({
            type: 'deposit',
            amount,
        })

    }
    #processWithdraw(amount){
        console.log(`Withdrowing ${amount}`);

        this.#translations.push({
            type: 'Withdraw',
            amount,
        })

    }
    get balance(){
        return this.#balance;
    }
    
    get translation(){
        return this.#translations;
    }
}

const wallet= new Wallet();

wallet.deposit(300);
wallet.withdraw(50);

console.log(wallet.balance);
console.log(wallet.translation);
// console.log(wallet.#balance);