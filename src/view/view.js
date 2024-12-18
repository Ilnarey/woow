export class FinanceView {
    constructor() {
        this.initUI();
    }

    // Инициализация динамического UI
    initUI() {
        this.renderBalanceSection();
        this.renderFormSection();
        this.renderFilterSection();
    }

    renderBalanceSection() {
        const balanceContainer = document.querySelector(".balance");
        const balanceHTML = `
            <h2>Общий баланс: <span id="total-balance">0</span> руб.</h2>
        `;
        balanceContainer.innerHTML = balanceHTML;
    }

    renderFormSection() {
        const formContainer = document.querySelector(".form-container");
        const formHTML = `
            <form id="transaction-form">
                <select id="type" required>
                    <option value="">Выберите тип операции</option>
                    <option value="income">Доход</option>
                    <option value="expense">Расход</option>
                </select>

                <select id="category" required>
                    <option value="">Выберите категорию</option>
                    <option value="salary">Зарплата</option>
                    <option value="food">Еда</option>
                    <option value="transport">Транспорт</option>
                    <option value="entertainment">Развлечения</option>
                </select>

                <input type="number" id="amount" placeholder="Сумма">
                
                <button type="submit">Добавить операцию</button>
            </form>
        `;
        formContainer.innerHTML = formHTML;
    }

    renderFilterSection() {
        const filterContainer = document.querySelector(".filters");
        const filterHTML = `
            <h2>Фильтры</h2>
            <select id="type-filter">
                <option value="">Все операции</option>
                <option value="income">Доходы</option>
                <option value="expense">Расходы</option>
            </select>
            <select id="category-filter">
                <option value="">Все категории</option>
                <option value="salary">Зарплата</option>
                <option value="food">Еда</option>
                <option value="transport">Транспорт</option>
                <option value="entertainment">Развлечения</option>
            </select>
        `;
        filterContainer.innerHTML = filterHTML;
    }

    renderTransactions(transactions) {
        const transactionsList = document.getElementById("transactions-list");
        transactionsList.innerHTML = "";
        transactions.forEach((transaction) => {
            const transactionEl = document.createElement("div");
            transactionEl.className = `transaction ${transaction.type}`;
            transactionEl.innerHTML = `
                <span>${transaction.category} (${transaction.type === "income" ? "Доход" : "Расход"})</span>
                <span>${transaction.amount} руб.</span>
                <button class="delete-btn" data-id="${transaction.id}">Удалить</button>
            `;
            transactionsList.appendChild(transactionEl);
        });
    }

    renderBalance(balance) {
        document.getElementById("total-balance").textContent = balance;
    }

    clearForm() {
        document.getElementById("transaction-form").reset();
    }
}
