
export default class App {
    constructor(container) {
        this.container = container;
        this.registrEvents();
    }
    registrEvents() {
        this.container.querySelector('.btn').addEventListener('click', () => {
            this.container.querySelector('.collapse_cont').classList.toggle('collapse_cont_second');
            this.container.querySelector('.descr').classList.toggle('descr_second_state');
        });
    }
}
