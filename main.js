import { FinanceModel } from "./src/model/model.js";
import { FinanceView } from "./src/view/view.js";
import { FinancePresenter } from "./src/presenter/presenter.js";

// Создаем экземпляры модели, представления и презентера
const model = new FinanceModel();
const view = new FinanceView();
const presenter = new FinancePresenter(model, view);

// Запускаем приложение
presenter.init();
