class Wallet{

    constructor(){
        this._balance=0;
        this._translations=[];
    }

    deposit(amount){
        this._processDeposit(amount);
        this._balance+=amount;
    }
    
    withdraw(amount){
        if(amount>this._balance){
            console.log('Not Enough funds');
            return;
        }
        this._balance-=amount;
        this._processWithdraw(amount);
    }


    _processDeposit(amount){
        console.log(`Depositing ${amount}`);

        this._translations.push({
            type: 'deposit',
            amount,
        })

    }
    _processWithdraw(amount){
        console.log(`Withdrowing ${amount}`);

        this._translations.push({
            type: 'Withdraw',
            amount,
        })

    }
    get balance(){
        return this._balance;
    }
    
    get translation(){
        return this._translations;
    }
}

const wallet= new Wallet();

wallet.deposit(300);
wallet.withdraw(50);

console.log(wallet.balance);
console.log(wallet.translation);