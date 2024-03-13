import View from "./View";

class PaginationView extends View {
    _parentElement = document.querySelector('.pagination');

    addHandlerClick(handler){
        this._parentElement.addEventListener('click', function(e) {
            const btn = e.target.closest('.btn--inline');
            if(!btn) return;

            const goToPage = +btn.dataset.goto;
            handler(goToPage);
        })
    }

    _generateMarkup() {
        const currentPage = this._data.page;
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);

        // Page 1, and there are other pages
        if(currentPage === 1 && numPages > 1) {
            return this._generateMarkupButton(1);
        }

        // Last page
        if(currentPage === numPages && numPages > 1) {
            return this._generateMarkupButton(-1);
        }

        // Other page
        if(currentPage < numPages) {
            return `${this._generateMarkupButton(1) + this._generateMarkupButton(-1)}`;
        }

        // Page 1, and there are NO other pages
        return '';
    }

    _generateMarkupButton(num) {
        const currentPage = this._data.page;
        return `
            <button data-goto="${currentPage + num}" class="btn--inline pagination__btn--${num > 0 ? 'next' : 'prev'}">
                <svg class="search__icon">
                    <use href="src/img/icons.svg#icon-arrow-${num > 0 ? 'right' : 'left'}"></use>
                </svg>
                <span>Page ${currentPage + num}</span>
            </button>
        `;
    }
}
export default new PaginationView();