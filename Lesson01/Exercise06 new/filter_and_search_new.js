const tagsToFilterBy = [];
let textToSearch = "";

// func to add all the tags in the page
function AddFilterTags() {
    Array.from(document.querySelectorAll(".extra .label")).forEach((tagEl) => {
        tagEl.addEventListener("click", () => {

            if (!tagsToFilterBy.includes(tagEl.innerHTML)) {
                tagsToFilterBy.push(tagEl.innerHTML);
                applyFilters();
            }

        });
    });
}

// catch all func that will contain all the logic related to updating the page
function applyFilters() {
    createListForProducts(filterByText(filterByTags(products)));
    addTagFilter();
    updateTagFilterList();
}


