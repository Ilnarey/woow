export class FinancePresenter {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    init() {
        this.bindEvents();
        this.updateView();
    }

    bindEvents() {
        document.getElementById("transaction-form").addEventListener("submit", this.handleAddTransaction.bind(this));
        document.getElementById("transactions-list").addEventListener("click", this.handleDeleteTransaction.bind(this));
        document.getElementById("type-filter").addEventListener("change", this.handleFilterChange.bind(this));
        document.getElementById("category-filter").addEventListener("change", this.handleFilterChange.bind(this));
    }

    handleAddTransaction(event) {
        event.preventDefault();

        const type = document.getElementById("type").value;
        const category = document.getElementById("category").value;
        const amount = parseFloat(document.getElementById("amount").value);

        if (!type || !category || isNaN(amount) || amount <= 0) {
            alert("Заполните все поля корректно.");
            return;
        }

        const transaction = {
            id: Date.now(),
            type,
            category,
            amount,
        };

        this.model.addTransaction(transaction);
        this.updateView();
        this.view.clearForm();
    }

    handleDeleteTransaction(event) {
        if (!event.target.classList.contains("delete-btn")) return;

        const id = parseInt(event.target.dataset.id, 10);
        this.model.deleteTransaction(id);
        this.updateView();
    }

    handleFilterChange() {
        const type = document.getElementById("type-filter").value;
        const category = document.getElementById("category-filter").value;

        const filteredTransactions = this.model.filterTransactions(type, category);
        this.view.renderTransactions(filteredTransactions);
    }

    updateView() {
        const transactions = this.model.transactions;
        const balance = this.model.getBalance();

        this.view.renderTransactions(transactions);
        this.view.renderBalance(balance);
    }
}
