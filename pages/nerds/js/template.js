export function render(card){
    return `
    <div class="catalog__item advantages carousel cart${card[...adds]}">
        <img class="catalog__img" src="" alt="">
        <div class="catalog__wrap">
            <div class="catalog__window">
                <div class="catalog__round"></div>
            </div>
            <div class="catalog__buy-now">
                <div class="catalog__item-name"></div>
                <div class="catalog__item-subtitle"></div>
                <button class="btn btn_buy">
                    <span class="price"></span>
                    <span class="currency"> руб.</span>
                </button>
            </div>
        </div>
    </div>
    `;
}