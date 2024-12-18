export class FinanceModel {
    constructor() {
        this.transactions = [];
    }

    getBalance() {
        return this.transactions.reduce((total, transaction) => {
            return transaction.type === "income"
                ? total + transaction.amount
                : total - transaction.amount;
        }, 0);
    }

    addTransaction(transaction) {
        this.transactions.push(transaction);
    }

    deleteTransaction(id) {
        this.transactions = this.transactions.filter((t) => t.id !== id);
    }

    filterTransactions(type, category) {
        return this.transactions.filter((transaction) => {
            const typeMatch = type ? transaction.type === type : true;
            const categoryMatch = category ? transaction.category === category : true;
            return typeMatch && categoryMatch;
        });
    }
}
